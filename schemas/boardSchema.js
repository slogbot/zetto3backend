const mongoose = require('mongoose');

const cellSchema = new mongoose.Schema({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  occupiedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Card', default: null },
  activeEffects: { type: [String], default: [] }
});

const boardSchema = new mongoose.Schema({
  grid: { type: [[cellSchema]], required: true }
});

module.exports = boardSchema;
