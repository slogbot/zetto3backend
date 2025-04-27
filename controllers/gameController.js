const Game = require('../models/Game');
const { getIO } = require('../sockets');
const handService = require('../services/handService');
const deckService = require('../services/deckService');
const boardService = require('../services/boardService');

// 🧠 Modular load interaction states
const interactionStates = {
  neutral: require('../services/interactionStates/states/neutralState'),  
  playMinionBasic: require('../services/interactionStates/states/playMinionBasicState'),
  playFieldSpell: require('../services/interactionStates/states/playFieldSpellState'),
  playStructureBasic: require('../services/interactionStates/states/playStructureBasicState'),
  playDirectToHand: require('../services/interactionStates/states/playDirectToHandState'),
  playDirectToCell: require('../services/interactionStates/states/playDirectToCellState'),
  playDirectTo2Cells: require('../services/interactionStates/states/playDirectTo2CellsState')
};

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

    const game = await Game.findById(gameId);
    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }

    if (game.players.length >= 2) {
      return res.status(400).json({ message: 'Game already full' });
    }

    const userDeck = await deckService.getDeckForUser(userId);
    game.players.push({ user: userId, deck: [...userDeck] });
    await game.save();

    getIO().to('lobby').emit('game-joined', game);

    const updatedGame = await Game.findById(gameId)
      .populate('players.user')
      .populate('players.hand')
      .populate('players.deck');

    getIO().to(`game-${gameId}`).emit('game-state', {
      players: updatedGame.players.map(p => ({
        username: p.user.username || 'Unknown',
        handSize: p.hand.length,
        deckSize: p.deck.length
      })),
      board: updatedGame.board
    });

    res.status(200).json({ message: 'Joined game', gameId: game._id });
  } catch (err) {
    console.error('Failed to join game:', err);
    res.status(500).json({ message: err.message || 'Failed to join game' });
  }
};

exports.drawCard = async (req, res) => {
  try {
    const { gameId } = req.params;
    const userId = req.user.userId;

    const { hand } = await handService.drawCard(gameId, userId);

    getIO().to(`game-${gameId}`).emit('hand-updated', { userId, hand });

    res.status(200).json({ message: 'Card drawn', hand });
  } catch (err) {
    console.error('Failed to draw card:', err);
    res.status(500).json({ message: err.message || 'Failed to draw card' });
  }
};

exports.click = async (req, res) => {
  try {
    const gameId = req.params.id;
    const { type, data } = req.body;

    if (!type || !data) {
      return res.status(400).json({ message: 'Invalid click payload' });
    }

    const game = await Game.findById(gameId);
    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }

    const currentState = game.interaction.state || 'neutral';
    const stateHandler = interactionStates[currentState];

    if (!stateHandler) {
      console.error(`❌ No handler found for state: ${currentState}`);
      return res.status(500).json({ message: `No handler for state ${currentState}` });
    }

    await stateHandler.handleClick(gameId, type, data);

    res.status(200).json({ message: 'Click handled' });
  } catch (err) {
    console.error('❌ Failed to handle click:', err);
    res.status(500).json({ message: err.message || 'Failed to handle click' });
  }
};
exports.resetInteraction = async (req, res) => {
    try {
      const { id } = req.params;
      console.log('🛠️ Resetting interaction for gameId:', id);
  
      const interactionManager = require('../services/interactionStates/interactionManager');
      
      await interactionManager.changeState(id, 'neutral', []);
      
      res.status(200).json({ message: 'Interaction reset to neutral.' });
    } catch (err) {
      console.error('❌ Failed to reset interaction:', err);
      res.status(500).json({ message: 'Failed to reset interaction' });
    }
  };
  
  