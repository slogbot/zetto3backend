const Game = require('../models/Game');
const { getIO } = require('../sockets');
const sectorService = require('./sectorService');
const totemService = require('./totemService');

// 🔁 Modular game state refresh (called before key actions like combat, turn change, etc.)
async function refreshGameState(game) {
  await totemService.applyTotemAuras(game);
  // Future: await effectService.expireEffects(game);
  // Future: await turnService.runPassiveTriggers(game);
}

// 📤 Emits current game state to all players in room
async function emitGameState(gameId) {
  const game = await Game.findById(gameId)
    .populate('players.user')
    .populate('players.hand')
    .populate('players.deck');

  if (!game) throw new Error('Game not found');

  // ✅ Always refresh state before sending it
  await refreshGameState(game);

  const sectorControl = sectorService.calculateSectorControl(game);

  console.log(`📤 Emitting game state to game-${gameId}`);

  const payload = {
    board: game.board,
    turnCount: game.turnCount,
    players: game.players.map(p => ({
      userId: p.user._id.toString(),
      username: p.user.username || 'Unknown',
      hand: p.hand,
      deck: p.deck,
      handSize: p.hand.length,
      deckSize: p.deck.length,
      homeCard: p.homeCard ?? null,
      mana: p.mana
    })),
    activePlayer: game.activePlayer?.toString() ?? null,
    sectors: sectorControl
  };

  getIO().to(`game-${gameId}`).emit('game-state', payload);
}

// 📦 Emits updated hand to a specific user
async function emitUpdatedHand(gameId, userId) {
  const game = await Game.findById(gameId).populate('players.hand');
  const player = game.players.find(p => p.user.toString() === userId);
  if (!player) return;

  getIO().to(`game-${gameId}`).emit('hand-updated', {
    userId,
    hand: player.hand
  });
}

module.exports = {
  emitGameState,
  refreshGameState,
  emitUpdatedHand
};

