const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

  type: {
    type: String,
    enum: ['minion', 'spell', 'structure', 'home'],
    required: true,
  },

  subType: {
    type: String,
    enum: [
      'minionbasic',
      'structurebasic',
      'field',
      'direct to hand',
      'direct to cell',
      'direct to 2 cells',
      'homebasic',
      'direct to occupant', 
    ],
    required: true,
  },
effect: { type: String }, // ✅ NEW — e.g. 'emptyEffect'
  atk: {
    type: Number,
    required: function () {
      return this.type === 'minion';
    }
  },
  def: {
    type: Number,
    required: function () {
      return this.type === 'minion';
    }
  },
  mov: {
    type: Number,
    required: function () {
      return this.type === 'minion';
    }
  },
  range: {
    type: Number,
    required: function () {
      return this.type === 'minion';
    }
  },
  hp: {
    type: Number,
    required: function () {
      return this.type === 'minion';
    }
  },

sectorValue: {
  type: Number,
  required: function () {
    return this.type === 'minion' || this.type === 'structure';
  }
},

  // ✅ New optional flags for gameplay mechanics
  canPlaceMinion: { type: Boolean, default: false },
  canPlaceStructure: { type: Boolean, default: false }

}, { timestamps: true });

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;
