const mongoose = require('mongoose');

const cellSchema = new mongoose.Schema({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  activeEffects: { type: [String], default: [] },
  occupant: {
    cardId: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
    name: { type: String },
    type: { type: String },
    subType: { type: String },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    atk: { type: Number },
    def: { type: Number },
    mov: { type: Number },
    range: { type: Number },
    hp: { type: Number },
    sectorValue: { type: Number, default: 1 },


    // ✅ New placement logic flags
    canPlaceMinion: { type: Boolean, default: false },
    canPlaceStructure: { type: Boolean, default: false }
  }
}, { _id: false });

const boardSchema = new mongoose.Schema({
  grid: { type: [[cellSchema]], required: true }
});

module.exports = boardSchema;
