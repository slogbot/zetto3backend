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
  // Spells
  { name: 'Empty Effect', type: 'spell', subType: 'direct to occupant', effect: 'emptyEffect', manaCost: 1 },
  { name: 'Dark Pendant', type: 'spell', subType: 'direct to occupant', effect: 'boostAtk3', manaCost: 2 },
  { name: 'Mana Surge', type: 'spell', subType: 'global effect', effect: 'gainMana2', manaCost: 1 },

  // Minions
  { name: 'Goblin Scout', type: 'minion', subType: 'minionbasic', atk: 2, def: 1, mov: 3, range: 1, hp: 1, canPlaceStructure: true, sectorValue: 3, manaCost: 1 },
  { name: 'Stone Golem', type: 'minion', subType: 'minionbasic', atk: 1, def: 4, mov: 1, range: 1, hp: 5, canPlaceStructure: true, sectorValue: 3, manaCost: 3 },
  { name: 'Elven Ranger', type: 'minion', subType: 'minionbasic', atk: 3, def: 2, mov: 2, range: 3, hp: 2, canPlaceStructure: true, sectorValue: 3, manaCost: 2 },

  // Structures
  { name: 'Watch Tower', type: 'structure', subType: 'structurebasic', sectorValue: 3, manaCost: 2 },
  { name: 'Barricade', type: 'structure', subType: 'structurebasic', sectorValue: 3, manaCost: 1 },

  { name: 'Test Totem', type: 'structure', subType: 'structurebasic', sectorValue: 3, manaCost: 2,
    totemAura: { effectId: 'emptyEffect', range: 2 }
  },
  { name: 'Rage Totem', type: 'structure', subType: 'structurebasic', sectorValue: 3, manaCost: 3,
    totemAura: { effectId: 'boostAtk3', range: 2 }
  },
  { name: 'Wall Segment', type: 'structure', subType: 'structure3x', sectorValue: 3, manaCost: 3 },

  // Home
  { name: 'Castle Core', type: 'home', subType: 'homebasic', canPlaceMinion: true, manaCost: 0 }
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
