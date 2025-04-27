const Game = require('../models/Game'); // 🧠 Import your Game model

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('🎮 (GameSocket) Player connected:', socket.id);

    socket.on('join-game-room', async ({ gameId, userId }) => {
      try {
        socket.join(`game-${gameId}`);
        console.log(`🧩 ${socket.id} joined room game-${gameId}`);

        const game = await Game.findById(gameId)
          .populate('players.user') // 🧠 populate usernames
          .populate('players.hand') // 🧠 if you want card names later
          .populate('players.deck');

        if (!game) {
          console.error('❌ Game not found!');
          return;
        }

        // Find this player's index
        const playerIndex = game.players.findIndex(p => p.user._id.toString() === userId);
        socket.emit('player-index', playerIndex);

        // Send full game state
        socket.emit('game-state', {
          players: game.players.map(p => ({
            username: p.user.username || 'Unknown',
            handSize: p.hand.length,
            deckSize: p.deck.length
          })),
          board: game.board, // ✅ Send the board
        });

        console.log('✅ Sent initial game state');
      } catch (err) {
        console.error('❌ Failed to join game room:', err);
      }
    });
  });
};
