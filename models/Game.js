const mongoose = require('mongoose');
const boardSchema = require('../schemas/boardSchema'); // ✅ Import our modular board

const playerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  deck: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Card'
    }
  ],
  hand: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Card'
    }
  ]
});

// 🧠 New interaction schema
const interactionSchema = new mongoose.Schema({
  state: { type: String, default: 'neutral' },
  selectedCards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Card' }]
});

const gameSchema = new mongoose.Schema({
  players: {
    type: [playerSchema],
    default: []
  },
  board: boardSchema, // ✅ Board is already attached
  interaction: {
    type: interactionSchema,
    default: () => ({}) // ✅ Default to neutral state
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
