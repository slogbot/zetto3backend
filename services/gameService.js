const Game = require('../models/Game');
const { getIO } = require('../sockets');
const sectorService = require('./sectorService'); // adjust path if needed

async function emitGameState(gameId) {
  const game = await Game.findById(gameId)
    .populate('players.user')
    .populate('players.hand')
    .populate('players.deck');

  if (!game) throw new Error('Game not found');
  // ✅ Calculate sector control before constructing payload
const sectorControl = sectorService.calculateSectorControl(game);
  // 🔇 Remove heavy log
  console.log(`📤 Emitting game state to game-${gameId}`);

  const payload = {
  board: game.board,
  phase: game.phase,
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
    sectors: sectorControl // ✅ renamed to sectors for frontend clarity
};


  getIO().to(`game-${gameId}`).emit('game-state', payload);
}

module.exports = {
  emitGameState
};
