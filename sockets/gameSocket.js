const { emitGameState } = require('../services/gameService');
const Game = require('../models/Game');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('🎮 (GameSocket) Player connected:', socket.id);

    socket.on('join-game-room', async ({ gameId, userId }) => {
      try {
        socket.join(`game-${gameId}`);
        console.log(`🧩 ${socket.id} joined room game-${gameId}`);

        const game = await Game.findById(gameId);
        if (!game) {
          console.error('❌ Game not found!');
          return;
        }

        const playerIndex = game.players.findIndex(p => p.user.toString() === userId);
        socket.emit('player-index', playerIndex);

        await emitGameState(gameId);
        console.log('✅ Sent initial game state');
      } catch (err) {
        console.error('❌ Failed to join game room:', err);
      }
    });
  });
};
