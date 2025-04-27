const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Card = require('../models/Card');

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

async function populateCards() {
  try {
    const cards = [
      // Spells (one for each subtype)
      { name: 'Mystic Field', type: 'spell', subType: 'field' },
      { name: 'Hand Siphon', type: 'spell', subType: 'direct to hand' },
      { name: 'Cell Strike', type: 'spell', subType: 'direct to cell' },
      { name: 'Dual Blast', type: 'spell', subType: 'direct to 2 cells' },

      // Minions
      { name: 'Goblin Scout', type: 'minion', subType: 'minionbasic' },
      { name: 'Stone Golem', type: 'minion', subType: 'minionbasic' },
      { name: 'Elven Ranger', type: 'minion', subType: 'minionbasic' },

      // Structures
      { name: 'Watch Tower', type: 'structure', subType: 'structurebasic' },
      { name: 'Barricade', type: 'structure', subType: 'structurebasic' }
    ];

    // Insert cards
    await Card.insertMany(cards);
    console.log('✅ Cards populated successfully');
    process.exit();
  } catch (error) {
    console.error('❌ Error populating cards:', error.message);
    process.exit(1);
  }
}

populateCards();
