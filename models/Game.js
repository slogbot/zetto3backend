const mongoose = require('mongoose');
const boardSchema = require('../schemas/boardSchema'); // ✅ Import our modular board

const playerSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    deck: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    hand: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }],
    homeCard: { type: mongoose.Schema.Types.ObjectId, ref: 'Card', default: null } // ✅ New

  
  });
  

// 🧠 New interaction schema


  const gameSchema = new mongoose.Schema({
    players: { type: [playerSchema], default: [] },
    board: boardSchema,
    activePlayer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
    phase: { type: String, enum: ['placement', 'movement', 'combat'], default: 'placement' }, // 🆕
    createdAt: { type: Date, default: Date.now }
  });

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
