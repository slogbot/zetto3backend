const Game = require('../models/Game');
const { getIO } = require('../sockets');
const handService = require('../services/handService');
const deckService = require('../services/deckService');
const boardService = require('../services/boardService');
const { emitGameState } = require('../services/gameService');
const movementValidator = require('../utils/validators/movementValidator');
const { resolveCombat } = require('../utils/validators/combatValidator');
const { validateMinionPlacement } = require('../utils/validators/minionPlacementValidator');
const { validateStructurePlacement } = require('../utils/validators/structurePlacementValidator');
const manaService = require('../services/manaService'); // ⬅️ Add this


exports.createGame = async (req, res) => {
  try {
    const board = boardService.generateEmptyBoard();
    console.log('🎯 Generated board:', JSON.stringify(board, null, 2));

    const game = new Game({ board });
    console.log('🎯 New game to save:', JSON.stringify(game, null, 2));

    await game.save();
    console.log('✅ Game saved!');

    getIO().to('lobby').emit('game-created', game);
    res.status(201).json({ message: 'Game created', gameId: game._id });
  } catch (err) {
    console.error('❌ Failed to create game:', err);
    res.status(500).json({ message: 'Failed to create game' });
  }
};

exports.getAvailableGames = async (req, res) => {
  try {
    const games = await Game.find({ 'players.1': { $exists: false } }).sort({ createdAt: -1 });
    res.status(200).json({ games });
  } catch (err) {
    console.error('❌ Failed to fetch available games:', err);
    res.status(500).json({ message: 'Failed to fetch games' });
  }
};

exports.joinGame = async (req, res) => {
  try {
    const gameId = req.params.id;
    const userId = req.user.userId;
    console.log(`📥 joinGame requested for gameId=${gameId} by userId=${userId}`);

    const game = await Game.findById(gameId);
    if (!game) {
      console.warn(`❌ Game not found: ${gameId}`);
      return res.status(404).json({ message: 'Game not found' });
    }

    if (game.players.length >= 2) {
      console.warn(`❌ Game already full: ${game.players.length} players`);
      return res.status(400).json({ message: 'Game already full' });
    }

    const user = await require('../models/User').findById(userId);
    if (!user) {
      console.warn(`❌ User not found: ${userId}`);
      return res.status(404).json({ message: 'User not found' });
    }

    console.log(`✅ User found: ${user.username}, selectedHomeCard: ${user.selectedHomeCard}`);

    const userDeck = await deckService.getDeckForUser(userId);
    const homeCardData = user.selectedHomeCard
      ? await require('../models/Card').findById(user.selectedHomeCard)
      : null;

    if (homeCardData) {
      console.log(`🏠 Fetched homeCard: ${homeCardData.name} (${homeCardData._id})`);
    } else {
      console.warn(`⚠️ No home card assigned for user ${user.username}`);
    }

    game.players.push({
      user: userId,
      deck: [...userDeck],
      homeCard: homeCardData ? homeCardData._id : null,
        mana: 10 // ✅ give starting mana

    });

// ✅ Set the first player as active if not already set
if (!game.activePlayer && game.players.length === 2) {
  game.activePlayer = game.players[0].user;
  console.log(`🎯 Set active player to user ${game.activePlayer}`);
}
    const playerIndex = game.players.length - 1;
    console.log(`➕ Added player at index ${playerIndex}`);

    if (homeCardData) {
      boardService.placeHomeCardOnBoard(game, playerIndex, homeCardData);
    }

    await game.save();
    console.log(`💾 Game updated and saved with ${game.players.length} player(s)`);

    getIO().to('lobby').emit('game-joined', game);

    const updatedGame = await Game.findById(gameId)
      .populate('players.user')
      .populate('players.hand')
      .populate('players.deck')
      .populate('players.homeCard');

    await emitGameState(gameId);
    res.status(200).json({ message: 'Joined game', gameId: game._id });

  } catch (err) {
    console.error('❌ joinGame failed:', err);
    res.status(500).json({ message: err.message || 'Failed to join game' });
  }
};

exports.drawCard = async (req, res) => {
  try {
    const { gameId } = req.params;
    const userId = req.user.userId;

    const { hand } = await handService.drawCard(gameId, userId);


    res.status(200).json({ message: 'Card drawn', hand });
  } catch (err) {
    console.error('Failed to draw card:', err);
    res.status(500).json({ message: err.message || 'Failed to draw card' });
  }
};
const PHASES = ['placement', 'movement', 'combat'];

exports.nextPhase = async (req, res) => {
  try {
    const gameId = req.params.id;
    const game = await Game.findById(gameId);
    if (!game) return res.status(404).json({ message: 'Game not found' });

    const currentIndex = PHASES.indexOf(game.phase);
    const nextPhase = PHASES[(currentIndex + 1) % PHASES.length];

    game.phase = nextPhase;
    await game.save();

    await emitGameState(gameId);
    res.status(200).json({ message: `Phase changed to ${nextPhase}` });
  } catch (err) {
    console.error('❌ Failed to change phase:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
exports.swapTurn = async (req, res) => {
  try {
    const gameId = req.params.id;
    const game = await Game.findById(gameId);
    if (!game) return res.status(404).json({ message: 'Game not found' });

    const currentId = game.activePlayer?.toString();
    const nextPlayer = game.players.find(p => p.user.toString() !== currentId);

    if (!nextPlayer) return res.status(400).json({ message: 'No other player to swap to' });

    game.activePlayer = nextPlayer.user;
    manaService.applyManaGains(game); // ⬅️ Just before game.save()

    await game.save();

    await emitGameState(gameId);
    res.status(200).json({ message: `Turn swapped to ${nextPlayer.user}` });
  } catch (err) {
    console.error('❌ Failed to swap turn:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.placeMinion = async (req, res) => {
  try {
    const gameId = req.params.id;
    const userId = req.user.userId;
    const { cardId, cell } = req.body;

    const game = await Game.findById(gameId);
    if (!game) return res.status(404).json({ message: 'Game not found' });

    const player = game.players.find(p => p.user.toString() === userId);
    if (!player) return res.status(403).json({ message: 'You are not part of this game' });

    const cardIndex = player.hand.findIndex(c => c.toString() === cardId);
    if (cardIndex === -1) return res.status(400).json({ message: 'Card not found in hand' });

    const validation = validateMinionPlacement(game, cell.x, cell.y, userId);
    if (!validation.valid) {
      console.warn(`❌ Invalid minion placement: ${validation.reason}`);
      return res.status(400).json({ message: validation.reason });
}

    // Remove card from hand
    const cardData = await require('../models/Card').findById(cardId);
    player.hand.splice(cardIndex, 1);

    // Place card snapshot on board
    boardService.placeMinionOnBoard(game, cell.x, cell.y, {
      cardId: cardData._id,
      name: cardData.name,
      type: cardData.type,
      subType: cardData.subType,
      ownerId: userId,
      atk: cardData.atk,
      def: cardData.def,
      mov: cardData.mov,
      range: cardData.range,
      hp: cardData.hp,
      canPlaceMinion: cardData.canPlaceMinion,
      canPlaceStructure: cardData.canPlaceStructure,
      sectorValue: cardData.sectorValue // ✅ Add this line

    });

    await game.save();
    await emitGameState(gameId);

    res.status(200).json({ message: 'Minion placed successfully' });
  } catch (err) {
    console.error('❌ Failed to place minion:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
exports.placeStructure = async (req, res) => {
  try {
    const gameId = req.params.id;
    const userId = req.user.userId;
    const { cardId, cell } = req.body;

    const game = await Game.findById(gameId);
    if (!game) return res.status(404).json({ message: 'Game not found' });

    const player = game.players.find(p => p.user.toString() === userId);
    if (!player) return res.status(403).json({ message: 'You are not part of this game' });

  const cardIndex = player.hand.findIndex(c => c.toString() === cardId);
if (cardIndex === -1) return res.status(400).json({ message: 'Card not found in hand' });

const cardData = await require('../models/Card').findById(cardId);

// ✅ Only allow structurebasic for now
if (cardData.type !== 'structure' || cardData.subType !== 'structurebasic') {
  return res.status(400).json({ message: 'Invalid structure card' });
}

// ✅ Validate structure placement
const validation = validateStructurePlacement(game, cell.x, cell.y, userId);
if (!validation.valid) {
  console.warn(`❌ Invalid structure placement: ${validation.reason}`);
  return res.status(400).json({ message: validation.reason });
}

// ✅ Remove card from hand
player.hand.splice(cardIndex, 1);


    boardService.placeMinionOnBoard(game, cell.x, cell.y, {
      cardId: cardData._id,
      name: cardData.name,
      type: cardData.type,
      subType: cardData.subType,
      ownerId: userId,
      canPlaceMinion: cardData.canPlaceMinion,
      canPlaceSpawner: cardData.canPlaceSpawner,
      sectorValue: cardData.sectorValue // ✅ Add this line

    });

    await game.save();
    await emitGameState(gameId);

    res.status(200).json({ message: 'Structure placed successfully' });
  } catch (err) {
    console.error('❌ Failed to place structure:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
exports.moveMinion = async (req, res) => {
  try {
    const gameId = req.params.id;
    const userId = req.user.userId;
    const { from, to } = req.body;

    console.log(`📥 Move requested by user ${userId} in game ${gameId}`);
    console.log(`📍 From: (${from.x},${from.y}) → To: (${to.x},${to.y})`);

    const game = await Game.findById(gameId);
    if (!game) return res.status(404).json({ message: 'Game not found' });

    // ✅ Centralized movement validation
    const result = movementValidator.validateMovement(game, from, to, userId);
    if (!result.valid) {
      console.warn('❌ Invalid move:', result.reason);
      return res.status(400).json({ message: result.reason });
    }

    const sourceCell = game.board.grid[from.y][from.x];
    const targetCell = game.board.grid[to.y][to.x];

    targetCell.occupant = sourceCell.occupant;
    sourceCell.occupant = null;

    console.log(`✅ Moved unit to (${to.x},${to.y})`);
    await game.save();
    await emitGameState(gameId);
    res.status(200).json({ message: 'Minion moved successfully' });

  } catch (err) {
    console.error('❌ Move error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
exports.attackMinion = async (req, res) => {
  try {
    const gameId = req.params.id;
    const userId = req.user.userId;
    const { from, to } = req.body;

    const game = await Game.findById(gameId);
    if (!game) return res.status(404).json({ message: 'Game not found' });

    const attackerCell = game.board.grid[from.y]?.[from.x];
    const defenderCell = game.board.grid[to.y]?.[to.x];

    if (!attackerCell || !defenderCell) {
      return res.status(400).json({ message: 'Invalid coordinates' });
    }

    const attacker = attackerCell.occupant;
    const defender = defenderCell.occupant;

    if (!attacker || !defender) {
      return res.status(400).json({ message: 'Missing attacker or defender' });
    }

    if (attacker.ownerId.toString() !== userId) {
      return res.status(403).json({ message: 'You do not control this unit' });
    }

   const result = resolveCombat(attacker, defender);

if (!result.valid) {
  return res.status(400).json({ message: result.reason });
}

// Apply HP changes
if (attacker) attacker.hp = result.attackerHp;
if (defender) defender.hp = result.defenderHp;

// Remove dead units
if (result.attackerHp <= 0) attackerCell.occupant = null;
if (result.defenderHp <= 0) defenderCell.occupant = null;

await game.save();
await emitGameState(gameId);

res.status(200).json({ message: 'Combat resolved', result });


  } catch (err) {
    console.error('❌ Combat error:', err);
  }
};





  

  
  