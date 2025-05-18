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
    phase: game.phase,
    phaseCount: game.phaseCount,
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

module.exports = {
  emitGameState,
  refreshGameState // ✅ export this so other logic (like combat) can call it
};
