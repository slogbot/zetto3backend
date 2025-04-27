const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming cards are tied to users
    required: false,
  },
  type: {
    type: String,
    enum: ['minion', 'spell', 'structure'],
    required: true,
  },
  subType: {
    type: String,
    enum: [
      'minionbasic',        // if type is 'minion'
      'structurebasic',     // if type is 'structure'
      'field',              // if type is 'spell'
      'direct to hand',     // if type is 'spell'
      'direct to cell',     // if type is 'spell'
      'direct to 2 cells'   // if type is 'spell'
    ],
    required: true,
  }
}, {
  timestamps: true
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
