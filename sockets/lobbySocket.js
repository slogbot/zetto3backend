module.exports = (io) => {
    io.on('connection', (socket) => {
      console.log('🟢 Lobby socket: client connected', socket.id);
  
      socket.on('subscribe-lobby', () => {
        socket.join('lobby');
        console.log(`📡 ${socket.id} joined lobby`);
      });
  
      socket.on('disconnect', () => {
        console.log('🔌 Client disconnected:', socket.id);
      });
    });
  };
  