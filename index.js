const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const connectDB = require('./config/db');
const socketManager = require('./sockets');

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Your API routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/packs', require('./routes/packRoutes'));
app.use('/api/deck', require('./routes/deckRoutes'));
app.use('/api/games', require('./routes/gameRoutes'));
// add others later

// Create HTTP server
const server = http.createServer(app);

// Attach Socket.IO
socketManager.init(server);

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
