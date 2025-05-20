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

//Spells ---------------------------------------------------------

{ name: 'Spark Charm', type: 'spell', subType: 'direct to occupant', effect: 'boostAtk1', manaCost: 1 },
{ name: 'Claw Talisman', type: 'spell', subType: 'direct to occupant', effect: 'boostAtk2', manaCost: 2 },
{ name: 'Dark Pendant', type: 'spell', subType: 'direct to occupant', effect: 'boostAtk3', manaCost: 3 },
{ name: 'Scaly Rune', type: 'spell', subType: 'direct to occupant', effect: 'boostDef1', manaCost: 1 },
{ name: 'Iron Emblem', type: 'spell', subType: 'direct to occupant', effect: 'boostDef2', manaCost: 2 },
{ name: 'Wall Glyph', type: 'spell', subType: 'direct to occupant', effect: 'boostDef3', manaCost: 3 },
{ name: 'Wind Tag', type: 'spell', subType: 'direct to occupant', effect: 'boostMov1', manaCost: 3 },
{ name: 'Sight Scroll', type: 'spell', subType: 'direct to occupant', effect: 'boostRng1', manaCost: 3 },
{ name: 'Binding Chains', type: 'spell', subType: 'direct to occupant', effect: 'setMov1', manaCost: 4 },
{ name: 'Fog Bomb', type: 'spell', subType: 'direct to occupant', effect: 'setRng1', manaCost: 4 },
//Global 
  { name: 'Mana Surge', type: 'spell', subType: 'global effect', effect: 'gainMana2', manaCost: 0 },

// Structures ----------------------------------------------------

 // Tombstones
{ name: 'Tombstone', type: 'structure', subType: 'structurebasic', sectorValue: 1, manaCost: 2, def: 4, hp: 1, image: 'Tombstone.png' },

// Wall
{ name: 'Wall Segment', type: 'structure', subType: 'structure3x', sectorValue: 0, manaCost: 3, def: 3, hp: 1 },

// Castle Core (home, no changes as it's not a structure)
{ name: 'Castle Core', type: 'home', subType: 'homebasic', canPlaceMinion: true, manaCost: 0 },

// Totems
{ name: 'Totem of Sparks', type: 'structure', subType: 'structurebasic', sectorValue: 0, manaCost: 1, def: 1, hp: 1, totemAura: { effectId: 'boostAtk1', range: 1 }, image: 'Totem.png' },
{ name: 'Totem of Claws', type: 'structure', subType: 'structurebasic', sectorValue: 0, manaCost: 2, def: 1, hp: 1, totemAura: { effectId: 'boostAtk2', range: 1 }, image: 'Totem.png' },
{ name: 'Totem of Fury', type: 'structure', subType: 'structurebasic', sectorValue: 0, manaCost: 3, def: 1, hp: 1, totemAura: { effectId: 'boostAtk3', range: 1 }, image: 'Totem.png' },
{ name: 'Totem of Scales', type: 'structure', subType: 'structurebasic', sectorValue: 0, manaCost: 1, def: 1, hp: 1, totemAura: { effectId: 'boostDef1', range: 1 }, image: 'Totem.png' },
{ name: 'Totem of Iron', type: 'structure', subType: 'structurebasic', sectorValue: 0, manaCost: 2, def: 1, hp: 1, totemAura: { effectId: 'boostDef2', range: 1 }, image: 'Totem.png' },
{ name: 'Totem of Walls', type: 'structure', subType: 'structurebasic', sectorValue: 0, manaCost: 3, def: 1, hp: 1, totemAura: { effectId: 'boostDef3', range: 1 }, image: 'Totem.png' },
{ name: 'Totem of Wind', type: 'structure', subType: 'structurebasic', sectorValue: 0, manaCost: 3, def: 1, hp: 1, totemAura: { effectId: 'boostMov1', range: 1 }, image: 'Totem.png' },
{ name: 'Totem of Sight', type: 'structure', subType: 'structurebasic', sectorValue: 0, manaCost: 3, def: 1, hp: 1, totemAura: { effectId: 'boostRng1', range: 1 }, image: 'Totem.png' },
{ name: 'Totem of Mud', type: 'structure', subType: 'structurebasic', sectorValue: 0, manaCost: 2, def: 1, hp: 1, totemAura: { effectId: 'setMov1', range: 1 }, image: 'Totem.png' },
{ name: 'Totem of Blur', type: 'structure', subType: 'structurebasic', sectorValue: 0, manaCost: 2, def: 1, hp: 1, totemAura: { effectId: 'setRng1', range: 1 }, image: 'Totem.png' },





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
