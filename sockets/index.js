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

    // 🔌 Connect to Upstash Redis
    const pubClient = createClient({
      url: process.env.REDIS_URL,
      socket: {
        reconnectStrategy: retries => Math.min(retries * 50, 1000) // Optional: retry strategy
      }
    });

    const subClient = pubClient.duplicate();

    // ✅ Prevent calling unsupported `CLIENT SETINFO` on Upstash
    pubClient.on('error', (err) => {
      if (err.message.includes('CLIENT SETINFO')) {
        console.warn('⚠️ Ignored CLIENT SETINFO error (Upstash doesn’t support it)');
      } else {
        console.error('Redis pubClient error:', err);
      }
    });

    subClient.on('error', (err) => {
      if (err.message.includes('CLIENT SETINFO')) {
        console.warn('⚠️ Ignored CLIENT SETINFO error (Upstash doesn’t support it)');
      } else {
        console.error('Redis subClient error:', err);
      }
    });

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
