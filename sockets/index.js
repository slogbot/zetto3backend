let io;

module.exports = {
  init: (httpServer) => {
    io = require('socket.io')(httpServer, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST']
      }
    });

    console.log('🧠 Socket.IO initialized');

    require('./lobbySocket')(io);
    require('./gameSocket')(io);

    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error('Socket.io not initialized');
    }
    return io;
  }
};
