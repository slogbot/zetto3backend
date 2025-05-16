const mongoose = require('mongoose');

const cellSchema = new mongoose.Schema({
  x: { type: Number, required: true },
  y: { type: Number, required: true },

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

    // ✅ Effect system with source tracking
    activeEffects: {
      type: [
        {
          name: { type: String, required: true },
          appliedAt: { type: Number, required: true },
          duration: { type: Number, required: true },
          source: {
            type: {
              type: String,
              enum: ['spell', 'totem'],
              required: true
            },
            id: {
              type: mongoose.Schema.Types.ObjectId,
              required: true
            }
          }
        }
      ],
      default: []
    },

    // ✅ Optional totem aura info
    totemAura: {
      effectId: { type: String },
      range: { type: Number }
    },

    // ✅ New placement logic flags
    canPlaceMinion: { type: Boolean, default: false },
    canPlaceStructure: { type: Boolean, default: false }
  }
}, { _id: false });

const boardSchema = new mongoose.Schema({
  grid: { type: [[cellSchema]], required: true }
});

module.exports = boardSchema;
