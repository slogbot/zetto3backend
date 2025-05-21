const { createAdapter } = require('@socket.io/redis-adapter');
const { createClient } = require('redis');

let io;

module.exports = {
  init: async (httpServer) => {
    io = require('socket.io')(httpServer, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST']
      }
    });

    // 🔌 Connect to Redis
    const pubClient = createClient({ url: process.env.REDIS_URL });
    const subClient = pubClient.duplicate();

    await pubClient.connect();
    await subClient.connect();

    io.adapter(createAdapter(pubClient, subClient));

    console.log('🧠 Socket.IO initialized with Redis adapter');

    require('./lobbySocket')(io);
    require('./gameSocket')(io);

    return io;
  },

  getIO: () => {
    if (!io) throw new Error('Socket.io not initialized');
    return io;
  }
};
