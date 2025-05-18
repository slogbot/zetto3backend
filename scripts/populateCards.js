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

  //Tombstones
{ name: 'Tombstone', type: 'structure', subType: 'structurebasic', sectorValue: 1, manaCost: 2,image: 'Tombstone.png'},

//Wall
{ name: 'Wall Segment', type: 'structure', subType: 'structure3x', sectorValue: 1, manaCost: 3 },

//Totems
{ name: 'Castle Core', type: 'home', subType: 'homebasic', canPlaceMinion: true, manaCost: 0 },
{ name: 'Totem of Sparks', type: 'structure', subType: 'structurebasic', sectorValue: 0, manaCost: 1, totemAura: { effectId: 'boostAtk1', range: 1 },image: 'Totem.png'},
{ name: 'Totem of Claws', type: 'structure', subType: 'structurebasic', sectorValue: 0, manaCost: 2, totemAura: { effectId: 'boostAtk2', range: 1 },image: 'Totem.png' },
{ name: 'Totem of Fury', type: 'structure', subType: 'structurebasic', sectorValue: 0, manaCost: 3, totemAura: { effectId: 'boostAtk3', range: 1 } ,image: 'Totem.png'},
{ name: 'Totem of Scales', type: 'structure', subType: 'structurebasic', sectorValue: 0, manaCost: 1, totemAura: { effectId: 'boostDef1', range: 1 } ,image: 'Totem.png'},
{ name: 'Totem of Iron', type: 'structure', subType: 'structurebasic', sectorValue: 0, manaCost: 2, totemAura: { effectId: 'boostDef2', range: 1 } ,image: 'Totem.png'},
{ name: 'Totem of Walls', type: 'structure', subType: 'structurebasic', sectorValue: 0, manaCost: 3, totemAura: { effectId: 'boostDef3', range: 1 } ,image: 'Totem.png'},
{ name: 'Totem of Wind', type: 'structure', subType: 'structurebasic', sectorValue: 0, manaCost: 3, totemAura: { effectId: 'boostMov1', range: 1 } ,image: 'Totem.png'},
{ name: 'Totem of Sight', type: 'structure', subType: 'structurebasic', sectorValue: 0, manaCost: 3, totemAura: { effectId: 'boostRng1', range: 1 } ,image: 'Totem.png'},
{ name: 'Totem of Mud', type: 'structure', subType: 'structurebasic', sectorValue: 0, manaCost: 2, totemAura: { effectId: 'setMov1', range: 1 } ,image: 'Totem.png'},
{ name: 'Totem of Blur', type: 'structure', subType: 'structurebasic', sectorValue: 0, manaCost: 2, totemAura: { effectId: 'setRng1', range: 1 } ,image: 'Totem.png'},


  {
    name: 'Skeleton Bird',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 0,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 1, // ATK(0) + DEF(0) + HP(1) + MOV(0) + RNG(0)
    image: 'Skeleton Bird.png'
  },
  {
    name: 'Skeleton Bird',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 0,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 2, // ATK(0) + DEF(0) + HP(2) + MOV(0) + RNG(0)
    image: 'Skeleton Bird.png'
  },
  {
    name: 'Skeleton Bird',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 0,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 2, // ATK(0) + DEF(0) + HP(0) + MOV(0) + RNG(2)
    image: 'Skeleton Bird.png'
  },
  {
    name: 'Skeleton Bird',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 0,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 3, // ATK(0) + DEF(0) + HP(1) + MOV(0) + RNG(2)
    image: 'Skeleton Bird.png'
  },
  {
    name: 'Skeleton Bird',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 0,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(0) + DEF(0) + HP(2) + MOV(0) + RNG(2)
    image: 'Skeleton Bird.png'
  },
  {
    name: 'Skeleton Bird',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 0,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(0) + DEF(0) + HP(0) + MOV(0) + RNG(4)
    image: 'Skeleton Bird.png'
  },
  {
    name: 'Skeleton Bird',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 0,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(0) + DEF(0) + HP(1) + MOV(0) + RNG(4)
    image: 'Skeleton Bird.png'
  },
  {
    name: 'Skeleton Bird',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 0,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(0) + DEF(0) + HP(2) + MOV(0) + RNG(4)
    image: 'Skeleton Bird.png'
  },
  {
    name: 'Skeleton Bird',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 0,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 2, // ATK(0) + DEF(0) + HP(0) + MOV(2) + RNG(0)
    image: 'Skeleton Bird.png'
  },
  {
    name: 'Skeleton Bird',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 0,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 3, // ATK(0) + DEF(0) + HP(1) + MOV(2) + RNG(0)
    image: 'Skeleton Bird.png'
  },
  {
    name: 'Skeleton Bird',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 0,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(0) + DEF(0) + HP(2) + MOV(2) + RNG(0)
    image: 'Skeleton Bird.png'
  },
  {
    name: 'Skeleton Bird',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 0,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(0) + DEF(0) + HP(0) + MOV(2) + RNG(2)
    image: 'Skeleton Bird.png'
  },
  {
    name: 'Skeleton Bird',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 0,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(0) + DEF(0) + HP(1) + MOV(2) + RNG(2)
    image: 'Skeleton Bird.png'
  },
  {
    name: 'Skeleton Bird',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 0,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(0) + DEF(0) + HP(2) + MOV(2) + RNG(2)
    image: 'Skeleton Bird.png'
  },
  {
    name: 'Skeleton Bird',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 0,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(0) + DEF(0) + HP(0) + MOV(4) + RNG(0)
    image: 'Skeleton Bird.png'
  },
  {
    name: 'Skeleton Bird',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 0,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(0) + DEF(0) + HP(1) + MOV(4) + RNG(0)
    image: 'Skeleton Bird.png'
  },
  {
    name: 'Skeleton Bird',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 0,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(0) + DEF(0) + HP(2) + MOV(4) + RNG(0)
    image: 'Skeleton Bird.png'
  },
  // Name: Terror (ATK: 0, DEF: 1)
  {
    name: 'Terror',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 1,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 1, // ATK(0) + DEF(1) + HP(0) + MOV(0) + RNG(0)
    image: 'Terror.png'
  },
  {
    name: 'Terror',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 1,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 2, // ATK(0) + DEF(1) + HP(1) + MOV(0) + RNG(0)
    image: 'Terror.png'
  },
  {
    name: 'Terror',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 1,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 3, // ATK(0) + DEF(1) + HP(2) + MOV(0) + RNG(0)
    image: 'Terror.png'
  },
  {
    name: 'Terror',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 1,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 3, // ATK(0) + DEF(1) + HP(0) + MOV(0) + RNG(2)
    image: 'Terror.png'
  },
  {
    name: 'Terror',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 1,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(0) + DEF(1) + HP(1) + MOV(0) + RNG(2)
    image: 'Terror.png'
  },
  {
    name: 'Terror',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 1,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(0) + DEF(1) + HP(2) + MOV(0) + RNG(2)
    image: 'Terror.png'
  },
  {
    name: 'Terror',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 1,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(0) + DEF(1) + HP(0) + MOV(0) + RNG(4)
    image: 'Terror.png'
  },
  {
    name: 'Terror',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 1,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(0) + DEF(1) + HP(1) + MOV(0) + RNG(4)
    image: 'Terror.png'
  },
  {
    name: 'Terror',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 1,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(0) + DEF(1) + HP(2) + MOV(0) + RNG(4)
    image: 'Terror.png'
  },
  {
    name: 'Terror',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 1,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 3, // ATK(0) + DEF(1) + HP(0) + MOV(2) + RNG(0)
    image: 'Terror.png'
  },
  {
    name: 'Terror',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 1,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(0) + DEF(1) + HP(1) + MOV(2) + RNG(0)
    image: 'Terror.png'
  },
  {
    name: 'Terror',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 1,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(0) + DEF(1) + HP(2) + MOV(2) + RNG(0)
    image: 'Terror.png'
  },
  {
    name: 'Terror',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 1,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(0) + DEF(1) + HP(0) + MOV(2) + RNG(2)
    image: 'Terror.png'
  },
  {
    name: 'Terror',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 1,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(0) + DEF(1) + HP(1) + MOV(2) + RNG(2)
    image: 'Terror.png'
  },
  {
    name: 'Terror',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 1,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(0) + DEF(1) + HP(2) + MOV(2) + RNG(2)
    image: 'Terror.png'
  },
  {
    name: 'Terror',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 1,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(0) + DEF(1) + HP(0) + MOV(4) + RNG(0)
    image: 'Terror.png'
  },
  {
    name: 'Terror',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 1,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(0) + DEF(1) + HP(1) + MOV(4) + RNG(0)
    image: 'Terror.png'
  },
  {
    name: 'Terror',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 1,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(0) + DEF(1) + HP(2) + MOV(4) + RNG(0)
    image: 'Terror.png'
  },
  // Name: Griff (ATK: 0, DEF: 2)
  {
    name: 'Griff',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 2,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 2, // ATK(0) + DEF(2) + HP(0) + MOV(0) + RNG(0)
    image: 'Griff.png'
  },
  {
    name: 'Griff',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 2,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 3, // ATK(0) + DEF(2) + HP(1) + MOV(0) + RNG(0)
    image: 'Griff.png'
  },
  {
    name: 'Griff',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 2,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(0) + DEF(2) + HP(2) + MOV(0) + RNG(0)
    image: 'Griff.png'
  },
  {
    name: 'Griff',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 2,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(0) + DEF(2) + HP(0) + MOV(0) + RNG(2)
    image: 'Griff.png'
  },
  {
    name: 'Griff',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 2,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(0) + DEF(2) + HP(1) + MOV(0) + RNG(2)
    image: 'Griff.png'
  },
  {
    name: 'Griff',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 2,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(0) + DEF(2) + HP(2) + MOV(0) + RNG(2)
    image: 'Griff.png'
  },
  {
    name: 'Griff',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 2,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(0) + DEF(2) + HP(0) + MOV(0) + RNG(4)
    image: 'Griff.png'
  },
  {
    name: 'Griff',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 2,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(0) + DEF(2) + HP(1) + MOV(0) + RNG(4)
    image: 'Griff.png'
  },
  {
    name: 'Griff',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 2,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(0) + DEF(2) + HP(2) + MOV(0) + RNG(4)
    image: 'Griff.png'
  },
  {
    name: 'Griff',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 2,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(0) + DEF(2) + HP(0) + MOV(2) + RNG(0)
    image: 'Griff.png'
  },
  {
    name: 'Griff',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 2,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(0) + DEF(2) + HP(1) + MOV(2) + RNG(0)
    image: 'Griff.png'
  },
  {
    name: 'Griff',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 2,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(0) + DEF(2) + HP(2) + MOV(2) + RNG(0)
    image: 'Griff.png'
  },
  {
    name: 'Griff',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 2,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(0) + DEF(2) + HP(0) + MOV(2) + RNG(2)
    image: 'Griff.png'
  },
  {
    name: 'Griff',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 2,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(0) + DEF(2) + HP(1) + MOV(2) + RNG(2)
    image: 'Griff.png'
  },
  {
    name: 'Griff',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 2,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(0) + DEF(2) + HP(2) + MOV(2) + RNG(2)
    image: 'Griff.png'
  },
  {
    name: 'Griff',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 2,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(0) + DEF(2) + HP(0) + MOV(4) + RNG(0)
    image: 'Griff.png'
  },
  {
    name: 'Griff',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 2,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(0) + DEF(2) + HP(1) + MOV(4) + RNG(0)
    image: 'Griff.png'
  },
  {
    name: 'Griff',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 2,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(0) + DEF(2) + HP(2) + MOV(4) + RNG(0)
    image: 'Griff.png'
  },
  // Name: Abomination (ATK: 0, DEF: 3)
  {
    name: 'Abomination',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 3,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 3, // ATK(0) + DEF(3) + HP(0) + MOV(0) + RNG(0)
    image: 'Abomination.png'
  },
  {
    name: 'Abomination',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 3,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(0) + DEF(3) + HP(1) + MOV(0) + RNG(0)
    image: 'Abomination.png'
  },
  {
    name: 'Abomination',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 3,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(0) + DEF(3) + HP(2) + MOV(0) + RNG(0)
    image: 'Abomination.png'
  },
  {
    name: 'Abomination',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 3,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(0) + DEF(3) + HP(0) + MOV(0) + RNG(2)
    image: 'Abomination.png'
  },
  {
    name: 'Abomination',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 3,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(0) + DEF(3) + HP(1) + MOV(0) + RNG(2)
    image: 'Abomination.png'
  },
  {
    name: 'Abomination',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 3,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(0) + DEF(3) + HP(2) + MOV(0) + RNG(2)
    image: 'Abomination.png'
  },
  {
    name: 'Abomination',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 3,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(0) + DEF(3) + HP(0) + MOV(0) + RNG(4)
    image: 'Abomination.png'
  },
  {
    name: 'Abomination',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 3,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(0) + DEF(3) + HP(1) + MOV(0) + RNG(4)
    image: 'Abomination.png'
  },
  {
    name: 'Abomination',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 3,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(0) + DEF(3) + HP(2) + MOV(0) + RNG(4)
    image: 'Abomination.png'
  },
  {
    name: 'Abomination',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 3,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(0) + DEF(3) + HP(0) + MOV(2) + RNG(0)
    image: 'Abomination.png'
  },
  {
    name: 'Abomination',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 3,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(0) + DEF(3) + HP(1) + MOV(2) + RNG(0)
    image: 'Abomination.png'
  },
  {
    name: 'Abomination',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 3,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(0) + DEF(3) + HP(2) + MOV(2) + RNG(0)
    image: 'Abomination.png'
  },
  {
    name: 'Abomination',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 3,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(0) + DEF(3) + HP(0) + MOV(2) + RNG(2)
    image: 'Abomination.png'
  },
  {
    name: 'Abomination',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 3,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(0) + DEF(3) + HP(1) + MOV(2) + RNG(2)
    image: 'Abomination.png'
  },
  {
    name: 'Abomination',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 3,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(0) + DEF(3) + HP(2) + MOV(2) + RNG(2)
    image: 'Abomination.png'
  },
  {
    name: 'Abomination',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 3,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(0) + DEF(3) + HP(0) + MOV(4) + RNG(0)
    image: 'Abomination.png'
  },
  {
    name: 'Abomination',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 3,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(0) + DEF(3) + HP(1) + MOV(4) + RNG(0)
    image: 'Abomination.png'
  },
  {
    name: 'Abomination',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 3,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(0) + DEF(3) + HP(2) + MOV(4) + RNG(0)
    image: 'Abomination.png'
  },
  // Name: Ogre Chief (ATK: 0, DEF: 4)
  {
    name: 'Ogre Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 4,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(0) + DEF(4) + HP(0) + MOV(0) + RNG(0)
    image: 'Ogre Chief.png'
  },
  {
    name: 'Ogre Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 4,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(0) + DEF(4) + HP(1) + MOV(0) + RNG(0)
    image: 'Ogre Chief.png'
  },
  {
    name: 'Ogre Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 4,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(0) + DEF(4) + HP(2) + MOV(0) + RNG(0)
    image: 'Ogre Chief.png'
  },
  {
    name: 'Ogre Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 4,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(0) + DEF(4) + HP(0) + MOV(0) + RNG(2)
    image: 'Ogre Chief.png'
  },
  {
    name: 'Ogre Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 4,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(0) + DEF(4) + HP(1) + MOV(0) + RNG(2)
    image: 'Ogre Chief.png'
  },
  {
    name: 'Ogre Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 4,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(0) + DEF(4) + HP(2) + MOV(0) + RNG(2)
    image: 'Ogre Chief.png'
  },
  {
    name: 'Ogre Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 4,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(0) + DEF(4) + HP(0) + MOV(0) + RNG(4)
    image: 'Ogre Chief.png'
  },
  {
    name: 'Ogre Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 4,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(0) + DEF(4) + HP(1) + MOV(0) + RNG(4)
    image: 'Ogre Chief.png'
  },
  {
    name: 'Ogre Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 4,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(0) + DEF(4) + HP(2) + MOV(0) + RNG(4)
    image: 'Ogre Chief.png'
  },
  {
    name: 'Ogre Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 4,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(0) + DEF(4) + HP(0) + MOV(2) + RNG(0)
    image: 'Ogre Chief.png'
  },
  {
    name: 'Ogre Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 4,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(0) + DEF(4) + HP(1) + MOV(2) + RNG(0)
    image: 'Ogre Chief.png'
  },
  {
    name: 'Ogre Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 4,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(0) + DEF(4) + HP(2) + MOV(2) + RNG(0)
    image: 'Ogre Chief.png'
  },
  {
    name: 'Ogre Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 4,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(0) + DEF(4) + HP(0) + MOV(2) + RNG(2)
    image: 'Ogre Chief.png'
  },
  {
    name: 'Ogre Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 4,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(0) + DEF(4) + HP(1) + MOV(2) + RNG(2)
    image: 'Ogre Chief.png'
  },
  {
    name: 'Ogre Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 4,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(0) + DEF(4) + HP(2) + MOV(2) + RNG(2)
    image: 'Ogre Chief.png'
  },
  {
    name: 'Ogre Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 4,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(0) + DEF(4) + HP(0) + MOV(4) + RNG(0)
    image: 'Ogre Chief.png'
  },
  {
    name: 'Ogre Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 4,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(0) + DEF(4) + HP(1) + MOV(4) + RNG(0)
    image: 'Ogre Chief.png'
  },
  {
    name: 'Ogre Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 4,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(0) + DEF(4) + HP(2) + MOV(4) + RNG(0)
    image: 'Ogre Chief.png'
  },
  // Name: Lizard Chief (ATK: 0, DEF: 5)
  {
    name: 'Lizard Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 5,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(0) + DEF(5) + HP(0) + MOV(0) + RNG(0)
    image: 'Lizard Chief.png'
  },
  {
    name: 'Lizard Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 5,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(0) + DEF(5) + HP(1) + MOV(0) + RNG(0)
    image: 'Lizard Chief.png'
  },
  {
    name: 'Lizard Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 5,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(0) + DEF(5) + HP(2) + MOV(0) + RNG(0)
    image: 'Lizard Chief.png'
  },
  {
    name: 'Lizard Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 5,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(0) + DEF(5) + HP(0) + MOV(0) + RNG(2)
    image: 'Lizard Chief.png'
  },
  {
    name: 'Lizard Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 5,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(0) + DEF(5) + HP(1) + MOV(0) + RNG(2)
    image: 'Lizard Chief.png'
  },
  {
    name: 'Lizard Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 5,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(0) + DEF(5) + HP(2) + MOV(0) + RNG(2)
    image: 'Lizard Chief.png'
  },
  {
    name: 'Lizard Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 5,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(0) + DEF(5) + HP(0) + MOV(0) + RNG(4)
    image: 'Lizard Chief.png'
  },
  {
    name: 'Lizard Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 5,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(0) + DEF(5) + HP(1) + MOV(0) + RNG(4)
    image: 'Lizard Chief.png'
  },
  {
    name: 'Lizard Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 5,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(0) + DEF(5) + HP(2) + MOV(0) + RNG(4)
    image: 'Lizard Chief.png'
  },
  {
    name: 'Lizard Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 5,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(0) + DEF(5) + HP(0) + MOV(2) + RNG(0)
    image: 'Lizard Chief.png'
  },
  {
    name: 'Lizard Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 5,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(0) + DEF(5) + HP(1) + MOV(2) + RNG(0)
    image: 'Lizard Chief.png'
  },
  {
    name: 'Lizard Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 5,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(0) + DEF(5) + HP(2) + MOV(2) + RNG(0)
    image: 'Lizard Chief.png'
  },
  {
    name: 'Lizard Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 5,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(0) + DEF(5) + HP(0) + MOV(2) + RNG(2)
    image: 'Lizard Chief.png'
  },
  {
    name: 'Lizard Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 5,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(0) + DEF(5) + HP(1) + MOV(2) + RNG(2)
    image: 'Lizard Chief.png'
  },
  {
    name: 'Lizard Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 5,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(0) + DEF(5) + HP(2) + MOV(2) + RNG(2)
    image: 'Lizard Chief.png'
  },
  {
    name: 'Lizard Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 5,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(0) + DEF(5) + HP(0) + MOV(4) + RNG(0)
    image: 'Lizard Chief.png'
  },
  {
    name: 'Lizard Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 5,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(0) + DEF(5) + HP(1) + MOV(4) + RNG(0)
    image: 'Lizard Chief.png'
  },
  {
    name: 'Lizard Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 5,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(0) + DEF(5) + HP(2) + MOV(4) + RNG(0)
    image: 'Lizard Chief.png'
  },
  // Name: Fatty (ATK: 0, DEF: 6)
  {
    name: 'Fatty',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 6,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(0) + DEF(6) + HP(0) + MOV(0) + RNG(0)
    image: 'Fatty.png'
  },
  {
    name: 'Fatty',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 6,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(0) + DEF(6) + HP(1) + MOV(0) + RNG(0)
    image: 'Fatty.png'
  },
  {
    name: 'Fatty',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 6,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(0) + DEF(6) + HP(2) + MOV(0) + RNG(0)
    image: 'Fatty.png'
  },
  {
    name: 'Fatty',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 6,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(0) + DEF(6) + HP(0) + MOV(0) + RNG(2)
    image: 'Fatty.png'
  },
  {
    name: 'Fatty',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 6,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(0) + DEF(6) + HP(1) + MOV(0) + RNG(2)
    image: 'Fatty.png'
  },
  {
    name: 'Fatty',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 6,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(0) + DEF(6) + HP(2) + MOV(0) + RNG(2)
    image: 'Fatty.png'
  },
  {
    name: 'Fatty',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 6,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(0) + DEF(6) + HP(0) + MOV(0) + RNG(4)
    image: 'Fatty.png'
  },
  {
    name: 'Fatty',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 6,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(0) + DEF(6) + HP(1) + MOV(0) + RNG(4)
    image: 'Fatty.png'
  },
  {
    name: 'Fatty',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 6,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(0) + DEF(6) + HP(2) + MOV(0) + RNG(4)
    image: 'Fatty.png'
  },
  {
    name: 'Fatty',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 6,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(0) + DEF(6) + HP(0) + MOV(2) + RNG(0)
    image: 'Fatty.png'
  },
  {
    name: 'Fatty',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 6,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(0) + DEF(6) + HP(1) + MOV(2) + RNG(0)
    image: 'Fatty.png'
  },
  {
    name: 'Fatty',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 6,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(0) + DEF(6) + HP(2) + MOV(2) + RNG(0)
    image: 'Fatty.png'
  },
  {
    name: 'Fatty',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 6,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(0) + DEF(6) + HP(0) + MOV(2) + RNG(2)
    image: 'Fatty.png'
  },
  {
    name: 'Fatty',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 6,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(0) + DEF(6) + HP(1) + MOV(2) + RNG(2)
    image: 'Fatty.png'
  },
  {
    name: 'Fatty',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 6,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(0) + DEF(6) + HP(2) + MOV(2) + RNG(2)
    image: 'Fatty.png'
  },
  {
    name: 'Fatty',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 6,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(0) + DEF(6) + HP(0) + MOV(4) + RNG(0)
    image: 'Fatty.png'
  },
  {
    name: 'Fatty',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 6,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(0) + DEF(6) + HP(1) + MOV(4) + RNG(0)
    image: 'Fatty.png'
  },
  {
    name: 'Fatty',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 6,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(0) + DEF(6) + HP(2) + MOV(4) + RNG(0)
    image: 'Fatty.png'
  },
  // Name: Ice Chief (ATK: 0, DEF: 7)
  {
    name: 'Ice Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 7,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(0) + DEF(7) + HP(0) + MOV(0) + RNG(0)
    image: 'Ice Chief.png'
  },
  {
    name: 'Ice Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 7,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(0) + DEF(7) + HP(1) + MOV(0) + RNG(0)
    image: 'Ice Chief.png'
  },
  {
    name: 'Ice Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 7,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(0) + DEF(7) + HP(2) + MOV(0) + RNG(0)
    image: 'Ice Chief.png'
  },
  {
    name: 'Ice Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 7,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(0) + DEF(7) + HP(0) + MOV(0) + RNG(2)
    image: 'Ice Chief.png'
  },
  {
    name: 'Ice Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 7,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(0) + DEF(7) + HP(1) + MOV(0) + RNG(2)
    image: 'Ice Chief.png'
  },
  {
    name: 'Ice Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 7,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(0) + DEF(7) + HP(2) + MOV(0) + RNG(2)
    image: 'Ice Chief.png'
  },
  {
    name: 'Ice Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 7,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(0) + DEF(7) + HP(0) + MOV(0) + RNG(4)
    image: 'Ice Chief.png'
  },
  {
    name: 'Ice Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 7,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(0) + DEF(7) + HP(1) + MOV(0) + RNG(4)
    image: 'Ice Chief.png'
  },
  {
    name: 'Ice Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 7,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(0) + DEF(7) + HP(2) + MOV(0) + RNG(4)
    image: 'Ice Chief.png'
  },
  {
    name: 'Ice Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 7,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(0) + DEF(7) + HP(0) + MOV(2) + RNG(0)
    image: 'Ice Chief.png'
  },
  {
    name: 'Ice Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 7,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(0) + DEF(7) + HP(1) + MOV(2) + RNG(0)
    image: 'Ice Chief.png'
  },
  {
    name: 'Ice Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 7,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(0) + DEF(7) + HP(2) + MOV(2) + RNG(0)
    image: 'Ice Chief.png'
  },
  {
    name: 'Ice Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 7,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(0) + DEF(7) + HP(0) + MOV(2) + RNG(2)
    image: 'Ice Chief.png'
  },
  {
    name: 'Ice Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 7,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(0) + DEF(7) + HP(1) + MOV(2) + RNG(2)
    image: 'Ice Chief.png'
  },
  {
    name: 'Ice Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 7,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(0) + DEF(7) + HP(2) + MOV(2) + RNG(2)
    image: 'Ice Chief.png'
  },
  {
    name: 'Ice Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 7,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(0) + DEF(7) + HP(0) + MOV(4) + RNG(0)
    image: 'Ice Chief.png'
  },
  {
    name: 'Ice Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 7,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(0) + DEF(7) + HP(1) + MOV(4) + RNG(0)
    image: 'Ice Chief.png'
  },
  {
    name: 'Ice Chief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 7,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(0) + DEF(7) + HP(2) + MOV(4) + RNG(0)
    image: 'Ice Chief.png'
  },
  // Name: Warlord (ATK: 0, DEF: 8)
  {
    name: 'Warlord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 8,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(0) + DEF(8) + HP(0) + MOV(0) + RNG(0)
    image: 'Warlord.png'
  },
  {
    name: 'Warlord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 8,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(0) + DEF(8) + HP(1) + MOV(0) + RNG(0)
    image: 'Warlord.png'
  },
  {
    name: 'Warlord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 8,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(0) + DEF(8) + HP(2) + MOV(0) + RNG(0)
    image: 'Warlord.png'
  },
  {
    name: 'Warlord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 8,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(0) + DEF(8) + HP(0) + MOV(0) + RNG(2)
    image: 'Warlord.png'
  },
  {
    name: 'Warlord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 8,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(0) + DEF(8) + HP(1) + MOV(0) + RNG(2)
    image: 'Warlord.png'
  },
  {
    name: 'Warlord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 8,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(0) + DEF(8) + HP(2) + MOV(0) + RNG(2)
    image: 'Warlord.png'
  },
  {
    name: 'Warlord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 8,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(0) + DEF(8) + HP(0) + MOV(0) + RNG(4)
    image: 'Warlord.png'
  },
  {
    name: 'Warlord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 8,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(0) + DEF(8) + HP(1) + MOV(0) + RNG(4)
    image: 'Warlord.png'
  },
  {
    name: 'Warlord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 8,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(0) + DEF(8) + HP(2) + MOV(0) + RNG(4)
    image: 'Warlord.png'
  },
  {
    name: 'Warlord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 8,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(0) + DEF(8) + HP(0) + MOV(2) + RNG(0)
    image: 'Warlord.png'
  },
  {
    name: 'Warlord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 8,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(0) + DEF(8) + HP(1) + MOV(2) + RNG(0)
    image: 'Warlord.png'
  },
  {
    name: 'Warlord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 8,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(0) + DEF(8) + HP(2) + MOV(2) + RNG(0)
    image: 'Warlord.png'
  },
  {
    name: 'Warlord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 8,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(0) + DEF(8) + HP(0) + MOV(2) + RNG(2)
    image: 'Warlord.png'
  },
  {
    name: 'Warlord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 8,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(0) + DEF(8) + HP(1) + MOV(2) + RNG(2)
    image: 'Warlord.png'
  },
  {
    name: 'Warlord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 8,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(0) + DEF(8) + HP(2) + MOV(2) + RNG(2)
    image: 'Warlord.png'
  },
  {
    name: 'Warlord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 8,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(0) + DEF(8) + HP(0) + MOV(4) + RNG(0)
    image: 'Warlord.png'
  },
  {
    name: 'Warlord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 8,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(0) + DEF(8) + HP(1) + MOV(4) + RNG(0)
    image: 'Warlord.png'
  },
  {
    name: 'Warlord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 8,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(0) + DEF(8) + HP(2) + MOV(4) + RNG(0)
    image: 'Warlord.png'
  },
  // Name: Ogre (ATK: 0, DEF: 9)
  {
    name: 'Ogre',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 9,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(0) + DEF(9) + HP(0) + MOV(0) + RNG(0)
    image: 'Ogre.png'
  },
  {
    name: 'Ogre',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 9,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(0) + DEF(9) + HP(1) + MOV(0) + RNG(0)
    image: 'Ogre.png'
  },
  {
    name: 'Ogre',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 9,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(0) + DEF(9) + HP(2) + MOV(0) + RNG(0)
    image: 'Ogre.png'
  },
  {
    name: 'Ogre',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 9,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(0) + DEF(9) + HP(0) + MOV(0) + RNG(2)
    image: 'Ogre.png'
  },
  {
    name: 'Ogre',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 9,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(0) + DEF(9) + HP(1) + MOV(0) + RNG(2)
    image: 'Ogre.png'
  },
  {
    name: 'Ogre',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 9,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(0) + DEF(9) + HP(2) + MOV(0) + RNG(2)
    image: 'Ogre.png'
  },
  {
    name: 'Ogre',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 9,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(0) + DEF(9) + HP(0) + MOV(0) + RNG(4)
    image: 'Ogre.png'
  },
  {
    name: 'Ogre',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 9,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(0) + DEF(9) + HP(1) + MOV(0) + RNG(4)
    image: 'Ogre.png'
  },
  {
    name: 'Ogre',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 9,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(0) + DEF(9) + HP(2) + MOV(0) + RNG(4)
    image: 'Ogre.png'
  },
  {
    name: 'Ogre',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 9,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(0) + DEF(9) + HP(0) + MOV(2) + RNG(0)
    image: 'Ogre.png'
  },
  {
    name: 'Ogre',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 9,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(0) + DEF(9) + HP(1) + MOV(2) + RNG(0)
    image: 'Ogre.png'
  },
  {
    name: 'Ogre',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 9,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(0) + DEF(9) + HP(2) + MOV(2) + RNG(0)
    image: 'Ogre.png'
  },
  {
    name: 'Ogre',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 9,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(0) + DEF(9) + HP(0) + MOV(2) + RNG(2)
    image: 'Ogre.png'
  },
  {
    name: 'Ogre',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 9,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(0) + DEF(9) + HP(1) + MOV(2) + RNG(2)
    image: 'Ogre.png'
  },
  {
    name: 'Ogre',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 9,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(0) + DEF(9) + HP(2) + MOV(2) + RNG(2)
    image: 'Ogre.png'
  },
  {
    name: 'Ogre',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 9,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(0) + DEF(9) + HP(0) + MOV(4) + RNG(0)
    image: 'Ogre.png'
  },
  {
    name: 'Ogre',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 9,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(0) + DEF(9) + HP(1) + MOV(4) + RNG(0)
    image: 'Ogre.png'
  },
  {
    name: 'Ogre',
    type: 'minion',
    subType: 'minionbasic',
    atk: 0,
    def: 9,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(0) + DEF(9) + HP(2) + MOV(4) + RNG(0)
    image: 'Ogre.png'
  },
  // Name: Wolf Shaman (ATK: 1, DEF: 0)
  {
    name: 'Wolf Shaman',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 0,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 1, // ATK(1) + DEF(0) + HP(0) + MOV(0) + RNG(0)
    image: 'Wolf Shaman.png'
  },
  {
    name: 'Wolf Shaman',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 0,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 2, // ATK(1) + DEF(0) + HP(1) + MOV(0) + RNG(0)
    image: 'Wolf Shaman.png'
  },
  {
    name: 'Wolf Shaman',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 0,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 3, // ATK(1) + DEF(0) + HP(2) + MOV(0) + RNG(0)
    image: 'Wolf Shaman.png'
  },
  {
    name: 'Wolf Shaman',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 0,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 3, // ATK(1) + DEF(0) + HP(0) + MOV(0) + RNG(2)
    image: 'Wolf Shaman.png'
  },
  {
    name: 'Wolf Shaman',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 0,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(1) + DEF(0) + HP(1) + MOV(0) + RNG(2)
    image: 'Wolf Shaman.png'
  },
  {
    name: 'Wolf Shaman',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 0,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(1) + DEF(0) + HP(2) + MOV(0) + RNG(2)
    image: 'Wolf Shaman.png'
  },
  {
    name: 'Wolf Shaman',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 0,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(1) + DEF(0) + HP(0) + MOV(0) + RNG(4)
    image: 'Wolf Shaman.png'
  },
  {
    name: 'Wolf Shaman',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 0,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(1) + DEF(0) + HP(1) + MOV(0) + RNG(4)
    image: 'Wolf Shaman.png'
  },
  {
    name: 'Wolf Shaman',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 0,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(1) + DEF(0) + HP(2) + MOV(0) + RNG(4)
    image: 'Wolf Shaman.png'
  },
  {
    name: 'Wolf Shaman',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 0,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 3, // ATK(1) + DEF(0) + HP(0) + MOV(2) + RNG(0)
    image: 'Wolf Shaman.png'
  },
  {
    name: 'Wolf Shaman',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 0,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(1) + DEF(0) + HP(1) + MOV(2) + RNG(0)
    image: 'Wolf Shaman.png'
  },
  {
    name: 'Wolf Shaman',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 0,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(1) + DEF(0) + HP(2) + MOV(2) + RNG(0)
    image: 'Wolf Shaman.png'
  },
  {
    name: 'Wolf Shaman',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 0,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(1) + DEF(0) + HP(0) + MOV(2) + RNG(2)
    image: 'Wolf Shaman.png'
  },
  {
    name: 'Wolf Shaman',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 0,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(1) + DEF(0) + HP(1) + MOV(2) + RNG(2)
    image: 'Wolf Shaman.png'
  },
  {
    name: 'Wolf Shaman',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 0,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(1) + DEF(0) + HP(2) + MOV(2) + RNG(2)
    image: 'Wolf Shaman.png'
  },
  {
    name: 'Wolf Shaman',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 0,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(1) + DEF(0) + HP(0) + MOV(4) + RNG(0)
    image: 'Wolf Shaman.png'
  },
  {
    name: 'Wolf Shaman',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 0,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(1) + DEF(0) + HP(1) + MOV(4) + RNG(0)
    image: 'Wolf Shaman.png'
  },
  {
    name: 'Wolf Shaman',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 0,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(1) + DEF(0) + HP(2) + MOV(4) + RNG(0)
    image: 'Wolf Shaman.png'
  },
  // Name: Club Man (ATK: 1, DEF: 1)
  {
    name: 'Club Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 1,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 2, // ATK(1) + DEF(1) + HP(0) + MOV(0) + RNG(0)
    image: 'Club Man.png'
  },
  {
    name: 'Club Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 1,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 3, // ATK(1) + DEF(1) + HP(1) + MOV(0) + RNG(0)
    image: 'Club Man.png'
  },
  {
    name: 'Club Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 1,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(1) + DEF(1) + HP(2) + MOV(0) + RNG(0)
    image: 'Club Man.png'
  },
  {
    name: 'Club Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 1,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(1) + DEF(1) + HP(0) + MOV(0) + RNG(2)
    image: 'Club Man.png'
  },
  {
    name: 'Club Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 1,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(1) + DEF(1) + HP(1) + MOV(0) + RNG(2)
    image: 'Club Man.png'
  },
  {
    name: 'Club Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 1,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(1) + DEF(1) + HP(2) + MOV(0) + RNG(2)
    image: 'Club Man.png'
  },
  {
    name: 'Club Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 1,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(1) + DEF(1) + HP(0) + MOV(0) + RNG(4)
    image: 'Club Man.png'
  },
  {
    name: 'Club Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 1,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(1) + DEF(1) + HP(1) + MOV(0) + RNG(4)
    image: 'Club Man.png'
  },
  {
    name: 'Club Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 1,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(1) + DEF(1) + HP(2) + MOV(0) + RNG(4)
    image: 'Club Man.png'
  },
  {
    name: 'Club Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 1,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(1) + DEF(1) + HP(0) + MOV(2) + RNG(0)
    image: 'Club Man.png'
  },
  {
    name: 'Club Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 1,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(1) + DEF(1) + HP(1) + MOV(2) + RNG(0)
    image: 'Club Man.png'
  },
  {
    name: 'Club Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 1,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(1) + DEF(1) + HP(2) + MOV(2) + RNG(0)
    image: 'Club Man.png'
  },
  {
    name: 'Club Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 1,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(1) + DEF(1) + HP(0) + MOV(2) + RNG(2)
    image: 'Club Man.png'
  },
  {
    name: 'Club Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 1,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(1) + DEF(1) + HP(1) + MOV(2) + RNG(2)
    image: 'Club Man.png'
  },
  {
    name: 'Club Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 1,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(1) + DEF(1) + HP(2) + MOV(2) + RNG(2)
    image: 'Club Man.png'
  },
  {
    name: 'Club Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 1,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(1) + DEF(1) + HP(0) + MOV(4) + RNG(0)
    image: 'Club Man.png'
  },
  {
    name: 'Club Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 1,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(1) + DEF(1) + HP(1) + MOV(4) + RNG(0)
    image: 'Club Man.png'
  },
  {
    name: 'Club Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 1,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(1) + DEF(1) + HP(2) + MOV(4) + RNG(0)
    image: 'Club Man.png'
  },
  // Name: Nature Knight (ATK: 1, DEF: 2)
  {
    name: 'Nature Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 2,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 3, // ATK(1) + DEF(2) + HP(0) + MOV(0) + RNG(0)
    image: 'Nature Knight.png'
  },
  {
    name: 'Nature Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 2,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(1) + DEF(2) + HP(1) + MOV(0) + RNG(0)
    image: 'Nature Knight.png'
  },
  {
    name: 'Nature Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 2,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(1) + DEF(2) + HP(2) + MOV(0) + RNG(0)
    image: 'Nature Knight.png'
  },
  {
    name: 'Nature Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 2,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(1) + DEF(2) + HP(0) + MOV(0) + RNG(2)
    image: 'Nature Knight.png'
  },
  {
    name: 'Nature Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 2,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(1) + DEF(2) + HP(1) + MOV(0) + RNG(2)
    image: 'Nature Knight.png'
  },
  {
    name: 'Nature Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 2,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(1) + DEF(2) + HP(2) + MOV(0) + RNG(2)
    image: 'Nature Knight.png'
  },
  {
    name: 'Nature Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 2,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(1) + DEF(2) + HP(0) + MOV(0) + RNG(4)
    image: 'Nature Knight.png'
  },
  {
    name: 'Nature Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 2,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(1) + DEF(2) + HP(1) + MOV(0) + RNG(4)
    image: 'Nature Knight.png'
  },
  {
    name: 'Nature Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 2,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(1) + DEF(2) + HP(2) + MOV(0) + RNG(4)
    image: 'Nature Knight.png'
  },
  {
    name: 'Nature Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 2,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(1) + DEF(2) + HP(0) + MOV(2) + RNG(0)
    image: 'Nature Knight.png'
  },
  {
    name: 'Nature Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 2,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(1) + DEF(2) + HP(1) + MOV(2) + RNG(0)
    image: 'Nature Knight.png'
  },
  {
    name: 'Nature Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 2,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(1) + DEF(2) + HP(2) + MOV(2) + RNG(0)
    image: 'Nature Knight.png'
  },
  {
    name: 'Nature Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 2,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(1) + DEF(2) + HP(0) + MOV(2) + RNG(2)
    image: 'Nature Knight.png'
  },
  {
    name: 'Nature Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 2,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(1) + DEF(2) + HP(1) + MOV(2) + RNG(2)
    image: 'Nature Knight.png'
  },
  {
    name: 'Nature Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 2,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(1) + DEF(2) + HP(2) + MOV(2) + RNG(2)
    image: 'Nature Knight.png'
  },
  {
    name: 'Nature Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 2,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(1) + DEF(2) + HP(0) + MOV(4) + RNG(0)
    image: 'Nature Knight.png'
  },
  {
    name: 'Nature Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 2,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(1) + DEF(2) + HP(1) + MOV(4) + RNG(0)
    image: 'Nature Knight.png'
  },
  {
    name: 'Nature Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 2,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(1) + DEF(2) + HP(2) + MOV(4) + RNG(0)
    image: 'Nature Knight.png'
  },
  // Name: Valour Knight (ATK: 1, DEF: 3)
  {
    name: 'Valour Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 3,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(1) + DEF(3) + HP(0) + MOV(0) + RNG(0)
    image: 'Valour Knight.png'
  },
  {
    name: 'Valour Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 3,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(1) + DEF(3) + HP(1) + MOV(0) + RNG(0)
    image: 'Valour Knight.png'
  },
  {
    name: 'Valour Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 3,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(1) + DEF(3) + HP(2) + MOV(0) + RNG(0)
    image: 'Valour Knight.png'
  },
  {
    name: 'Valour Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 3,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(1) + DEF(3) + HP(0) + MOV(0) + RNG(2)
    image: 'Valour Knight.png'
  },
  {
    name: 'Valour Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 3,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(1) + DEF(3) + HP(1) + MOV(0) + RNG(2)
    image: 'Valour Knight.png'
  },
  {
    name: 'Valour Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 3,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(1) + DEF(3) + HP(2) + MOV(0) + RNG(2)
    image: 'Valour Knight.png'
  },
  {
    name: 'Valour Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 3,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(1) + DEF(3) + HP(0) + MOV(0) + RNG(4)
    image: 'Valour Knight.png'
  },
  {
    name: 'Valour Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 3,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(1) + DEF(3) + HP(1) + MOV(0) + RNG(4)
    image: 'Valour Knight.png'
  },
  {
    name: 'Valour Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 3,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(1) + DEF(3) + HP(2) + MOV(0) + RNG(4)
    image: 'Valour Knight.png'
  },
  {
    name: 'Valour Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 3,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(1) + DEF(3) + HP(0) + MOV(2) + RNG(0)
    image: 'Valour Knight.png'
  },
  {
    name: 'Valour Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 3,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(1) + DEF(3) + HP(1) + MOV(2) + RNG(0)
    image: 'Valour Knight.png'
  },
  {
    name: 'Valour Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 3,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(1) + DEF(3) + HP(2) + MOV(2) + RNG(0)
    image: 'Valour Knight.png'
  },
  {
    name: 'Valour Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 3,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(1) + DEF(3) + HP(0) + MOV(2) + RNG(2)
    image: 'Valour Knight.png'
  },
  {
    name: 'Valour Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 3,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(1) + DEF(3) + HP(1) + MOV(2) + RNG(2)
    image: 'Valour Knight.png'
  },
  {
    name: 'Valour Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 3,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(1) + DEF(3) + HP(2) + MOV(2) + RNG(2)
    image: 'Valour Knight.png'
  },
  {
    name: 'Valour Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 3,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(1) + DEF(3) + HP(0) + MOV(4) + RNG(0)
    image: 'Valour Knight.png'
  },
  {
    name: 'Valour Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 3,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(1) + DEF(3) + HP(1) + MOV(4) + RNG(0)
    image: 'Valour Knight.png'
  },
  {
    name: 'Valour Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 3,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(1) + DEF(3) + HP(2) + MOV(4) + RNG(0)
    image: 'Valour Knight.png'
  },
  // Name: Royale Knight (ATK: 1, DEF: 4)
  {
    name: 'Royale Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 4,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(1) + DEF(4) + HP(0) + MOV(0) + RNG(0)
    image: 'Royale Knight.png'
  },
  {
    name: 'Royale Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 4,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(1) + DEF(4) + HP(1) + MOV(0) + RNG(0)
    image: 'Royale Knight.png'
  },
  {
    name: 'Royale Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 4,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(1) + DEF(4) + HP(2) + MOV(0) + RNG(0)
    image: 'Royale Knight.png'
  },
  {
    name: 'Royale Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 4,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(1) + DEF(4) + HP(0) + MOV(0) + RNG(2)
    image: 'Royale Knight.png'
  },
  {
    name: 'Royale Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 4,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(1) + DEF(4) + HP(1) + MOV(0) + RNG(2)
    image: 'Royale Knight.png'
  },
  {
    name: 'Royale Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 4,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(1) + DEF(4) + HP(2) + MOV(0) + RNG(2)
    image: 'Royale Knight.png'
  },
  {
    name: 'Royale Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 4,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(1) + DEF(4) + HP(0) + MOV(0) + RNG(4)
    image: 'Royale Knight.png'
  },
  {
    name: 'Royale Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 4,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(1) + DEF(4) + HP(1) + MOV(0) + RNG(4)
    image: 'Royale Knight.png'
  },
  {
    name: 'Royale Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 4,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(1) + DEF(4) + HP(2) + MOV(0) + RNG(4)
    image: 'Royale Knight.png'
  },
  {
    name: 'Royale Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 4,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(1) + DEF(4) + HP(0) + MOV(2) + RNG(0)
    image: 'Royale Knight.png'
  },
  {
    name: 'Royale Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 4,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(1) + DEF(4) + HP(1) + MOV(2) + RNG(0)
    image: 'Royale Knight.png'
  },
  {
    name: 'Royale Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 4,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(1) + DEF(4) + HP(2) + MOV(2) + RNG(0)
    image: 'Royale Knight.png'
  },
  {
    name: 'Royale Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 4,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(1) + DEF(4) + HP(0) + MOV(2) + RNG(2)
    image: 'Royale Knight.png'
  },
  {
    name: 'Royale Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 4,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(1) + DEF(4) + HP(1) + MOV(2) + RNG(2)
    image: 'Royale Knight.png'
  },
  {
    name: 'Royale Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 4,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(1) + DEF(4) + HP(2) + MOV(2) + RNG(2)
    image: 'Royale Knight.png'
  },
  {
    name: 'Royale Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 4,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(1) + DEF(4) + HP(0) + MOV(4) + RNG(0)
    image: 'Royale Knight.png'
  },
  {
    name: 'Royale Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 4,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(1) + DEF(4) + HP(1) + MOV(4) + RNG(0)
    image: 'Royale Knight.png'
  },
  {
    name: 'Royale Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 4,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(1) + DEF(4) + HP(2) + MOV(4) + RNG(0)
    image: 'Royale Knight.png'
  },
  // Name: Blood Knight (ATK: 1, DEF: 5)
  {
    name: 'Blood Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 5,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(1) + DEF(5) + HP(0) + MOV(0) + RNG(0)
    image: 'Blood Knight.png'
  },
  {
    name: 'Blood Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 5,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(1) + DEF(5) + HP(1) + MOV(0) + RNG(0)
    image: 'Blood Knight.png'
  },
  {
    name: 'Blood Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 5,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(1) + DEF(5) + HP(2) + MOV(0) + RNG(0)
    image: 'Blood Knight.png'
  },
  {
    name: 'Blood Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 5,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(1) + DEF(5) + HP(0) + MOV(0) + RNG(2)
    image: 'Blood Knight.png'
  },
  {
    name: 'Blood Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 5,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(1) + DEF(5) + HP(1) + MOV(0) + RNG(2)
    image: 'Blood Knight.png'
  },
  {
    name: 'Blood Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 5,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(1) + DEF(5) + HP(2) + MOV(0) + RNG(2)
    image: 'Blood Knight.png'
  },
  {
    name: 'Blood Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 5,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(1) + DEF(5) + HP(0) + MOV(0) + RNG(4)
    image: 'Blood Knight.png'
  },
  {
    name: 'Blood Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 5,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(1) + DEF(5) + HP(1) + MOV(0) + RNG(4)
    image: 'Blood Knight.png'
  },
  {
    name: 'Blood Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 5,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(1) + DEF(5) + HP(2) + MOV(0) + RNG(4)
    image: 'Blood Knight.png'
  },
  {
    name: 'Blood Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 5,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(1) + DEF(5) + HP(0) + MOV(2) + RNG(0)
    image: 'Blood Knight.png'
  },
  {
    name: 'Blood Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 5,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(1) + DEF(5) + HP(1) + MOV(2) + RNG(0)
    image: 'Blood Knight.png'
  },
  {
    name: 'Blood Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 5,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(1) + DEF(5) + HP(2) + MOV(2) + RNG(0)
    image: 'Blood Knight.png'
  },
  {
    name: 'Blood Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 5,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(1) + DEF(5) + HP(0) + MOV(2) + RNG(2)
    image: 'Blood Knight.png'
  },
  {
    name: 'Blood Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 5,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(1) + DEF(5) + HP(1) + MOV(2) + RNG(2)
    image: 'Blood Knight.png'
  },
  {
    name: 'Blood Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 5,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(1) + DEF(5) + HP(2) + MOV(2) + RNG(2)
    image: 'Blood Knight.png'
  },
  {
    name: 'Blood Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 5,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(1) + DEF(5) + HP(0) + MOV(4) + RNG(0)
    image: 'Blood Knight.png'
  },
  {
    name: 'Blood Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 5,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(1) + DEF(5) + HP(1) + MOV(4) + RNG(0)
    image: 'Blood Knight.png'
  },
  {
    name: 'Blood Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 5,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(1) + DEF(5) + HP(2) + MOV(4) + RNG(0)
    image: 'Blood Knight.png'
  },
  // Name: Angel (ATK: 1, DEF: 6)
  {
    name: 'Angel',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 6,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(1) + DEF(6) + HP(0) + MOV(0) + RNG(0)
    image: 'Angel.png'
  },
  {
    name: 'Angel',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 6,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(1) + DEF(6) + HP(1) + MOV(0) + RNG(0)
    image: 'Angel.png'
  },
  {
    name: 'Angel',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 6,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(1) + DEF(6) + HP(2) + MOV(0) + RNG(0)
    image: 'Angel.png'
  },
  {
    name: 'Angel',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 6,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(1) + DEF(6) + HP(0) + MOV(0) + RNG(2)
    image: 'Angel.png'
  },
  {
    name: 'Angel',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 6,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(1) + DEF(6) + HP(1) + MOV(0) + RNG(2)
    image: 'Angel.png'
  },
  {
    name: 'Angel',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 6,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(1) + DEF(6) + HP(2) + MOV(0) + RNG(2)
    image: 'Angel.png'
  },
  {
    name: 'Angel',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 6,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(1) + DEF(6) + HP(0) + MOV(0) + RNG(4)
    image: 'Angel.png'
  },
  {
    name: 'Angel',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 6,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(1) + DEF(6) + HP(1) + MOV(0) + RNG(4)
    image: 'Angel.png'
  },
  {
    name: 'Angel',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 6,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(1) + DEF(6) + HP(2) + MOV(0) + RNG(4)
    image: 'Angel.png'
  },
  {
    name: 'Angel',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 6,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(1) + DEF(6) + HP(0) + MOV(2) + RNG(0)
    image: 'Angel.png'
  },
  {
    name: 'Angel',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 6,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(1) + DEF(6) + HP(1) + MOV(2) + RNG(0)
    image: 'Angel.png'
  },
  {
    name: 'Angel',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 6,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(1) + DEF(6) + HP(2) + MOV(2) + RNG(0)
    image: 'Angel.png'
  },
  {
    name: 'Angel',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 6,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(1) + DEF(6) + HP(0) + MOV(2) + RNG(2)
    image: 'Angel.png'
  },
  {
    name: 'Angel',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 6,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(1) + DEF(6) + HP(1) + MOV(2) + RNG(2)
    image: 'Angel.png'
  },
  {
    name: 'Angel',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 6,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(1) + DEF(6) + HP(2) + MOV(2) + RNG(2)
    image: 'Angel.png'
  },
  {
    name: 'Angel',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 6,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(1) + DEF(6) + HP(0) + MOV(4) + RNG(0)
    image: 'Angel.png'
  },
  {
    name: 'Angel',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 6,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(1) + DEF(6) + HP(1) + MOV(4) + RNG(0)
    image: 'Angel.png'
  },
  {
    name: 'Angel',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 6,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(1) + DEF(6) + HP(2) + MOV(4) + RNG(0)
    image: 'Angel.png'
  },
  // Name: Orc Warrior (ATK: 1, DEF: 7)
  {
    name: 'Orc Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 7,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(1) + DEF(7) + HP(0) + MOV(0) + RNG(0)
    image: 'Orc Warrior.png'
  },
  {
    name: 'Orc Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 7,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(1) + DEF(7) + HP(1) + MOV(0) + RNG(0)
    image: 'Orc Warrior.png'
  },
  {
    name: 'Orc Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 7,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(1) + DEF(7) + HP(2) + MOV(0) + RNG(0)
    image: 'Orc Warrior.png'
  },
  {
    name: 'Orc Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 7,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(1) + DEF(7) + HP(0) + MOV(0) + RNG(2)
    image: 'Orc Warrior.png'
  },
  {
    name: 'Orc Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 7,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(1) + DEF(7) + HP(1) + MOV(0) + RNG(2)
    image: 'Orc Warrior.png'
  },
  {
    name: 'Orc Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 7,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(1) + DEF(7) + HP(2) + MOV(0) + RNG(2)
    image: 'Orc Warrior.png'
  },
  {
    name: 'Orc Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 7,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(1) + DEF(7) + HP(0) + MOV(0) + RNG(4)
    image: 'Orc Warrior.png'
  },
  {
    name: 'Orc Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 7,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(1) + DEF(7) + HP(1) + MOV(0) + RNG(4)
    image: 'Orc Warrior.png'
  },
  {
    name: 'Orc Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 7,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(1) + DEF(7) + HP(2) + MOV(0) + RNG(4)
    image: 'Orc Warrior.png'
  },
  {
    name: 'Orc Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 7,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(1) + DEF(7) + HP(0) + MOV(2) + RNG(0)
    image: 'Orc Warrior.png'
  },
  {
    name: 'Orc Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 7,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(1) + DEF(7) + HP(1) + MOV(2) + RNG(0)
    image: 'Orc Warrior.png'
  },
  {
    name: 'Orc Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 7,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(1) + DEF(7) + HP(2) + MOV(2) + RNG(0)
    image: 'Orc Warrior.png'
  },
  {
    name: 'Orc Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 7,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(1) + DEF(7) + HP(0) + MOV(2) + RNG(2)
    image: 'Orc Warrior.png'
  },
  {
    name: 'Orc Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 7,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(1) + DEF(7) + HP(1) + MOV(2) + RNG(2)
    image: 'Orc Warrior.png'
  },
  {
    name: 'Orc Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 7,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(1) + DEF(7) + HP(2) + MOV(2) + RNG(2)
    image: 'Orc Warrior.png'
  },
  {
    name: 'Orc Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 7,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(1) + DEF(7) + HP(0) + MOV(4) + RNG(0)
    image: 'Orc Warrior.png'
  },
  {
    name: 'Orc Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 7,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(1) + DEF(7) + HP(1) + MOV(4) + RNG(0)
    image: 'Orc Warrior.png'
  },
  {
    name: 'Orc Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 7,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(1) + DEF(7) + HP(2) + MOV(4) + RNG(0)
    image: 'Orc Warrior.png'
  },
  // Name: Plague (ATK: 1, DEF: 8)
  {
    name: 'Plague',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 8,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(1) + DEF(8) + HP(0) + MOV(0) + RNG(0)
    image: 'Plague.png'
  },
  {
    name: 'Plague',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 8,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(1) + DEF(8) + HP(1) + MOV(0) + RNG(0)
    image: 'Plague.png'
  },
  {
    name: 'Plague',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 8,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(1) + DEF(8) + HP(2) + MOV(0) + RNG(0)
    image: 'Plague.png'
  },
  {
    name: 'Plague',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 8,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(1) + DEF(8) + HP(0) + MOV(0) + RNG(2)
    image: 'Plague.png'
  },
  {
    name: 'Plague',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 8,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(1) + DEF(8) + HP(1) + MOV(0) + RNG(2)
    image: 'Plague.png'
  },
  {
    name: 'Plague',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 8,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(1) + DEF(8) + HP(2) + MOV(0) + RNG(2)
    image: 'Plague.png'
  },
  {
    name: 'Plague',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 8,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(1) + DEF(8) + HP(0) + MOV(0) + RNG(4)
    image: 'Plague.png'
  },
  {
    name: 'Plague',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 8,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(1) + DEF(8) + HP(1) + MOV(0) + RNG(4)
    image: 'Plague.png'
  },
  {
    name: 'Plague',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 8,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(1) + DEF(8) + HP(2) + MOV(0) + RNG(4)
    image: 'Plague.png'
  },
  {
    name: 'Plague',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 8,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(1) + DEF(8) + HP(0) + MOV(2) + RNG(0)
    image: 'Plague.png'
  },
  {
    name: 'Plague',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 8,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(1) + DEF(8) + HP(1) + MOV(2) + RNG(0)
    image: 'Plague.png'
  },
  {
    name: 'Plague',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 8,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(1) + DEF(8) + HP(2) + MOV(2) + RNG(0)
    image: 'Plague.png'
  },
  {
    name: 'Plague',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 8,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(1) + DEF(8) + HP(0) + MOV(2) + RNG(2)
    image: 'Plague.png'
  },
  {
    name: 'Plague',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 8,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(1) + DEF(8) + HP(1) + MOV(2) + RNG(2)
    image: 'Plague.png'
  },
  {
    name: 'Plague',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 8,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(1) + DEF(8) + HP(2) + MOV(2) + RNG(2)
    image: 'Plague.png'
  },
  {
    name: 'Plague',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 8,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(1) + DEF(8) + HP(0) + MOV(4) + RNG(0)
    image: 'Plague.png'
  },
  {
    name: 'Plague',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 8,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(1) + DEF(8) + HP(1) + MOV(4) + RNG(0)
    image: 'Plague.png'
  },
  {
    name: 'Plague',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 8,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(1) + DEF(8) + HP(2) + MOV(4) + RNG(0)
    image: 'Plague.png'
  },
  // Name: Orc Brute (ATK: 1, DEF: 9)
  {
    name: 'Orc Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 9,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(1) + DEF(9) + HP(0) + MOV(0) + RNG(0)
    image: 'Orc Brute.png'
  },
  {
    name: 'Orc Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 9,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(1) + DEF(9) + HP(1) + MOV(0) + RNG(0)
    image: 'Orc Brute.png'
  },
  {
    name: 'Orc Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 9,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(1) + DEF(9) + HP(2) + MOV(0) + RNG(0)
    image: 'Orc Brute.png'
  },
  {
    name: 'Orc Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 9,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(1) + DEF(9) + HP(0) + MOV(0) + RNG(2)
    image: 'Orc Brute.png'
  },
  {
    name: 'Orc Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 9,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(1) + DEF(9) + HP(1) + MOV(0) + RNG(2)
    image: 'Orc Brute.png'
  },
  {
    name: 'Orc Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 9,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(1) + DEF(9) + HP(2) + MOV(0) + RNG(2)
    image: 'Orc Brute.png'
  },
  {
    name: 'Orc Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 9,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(1) + DEF(9) + HP(0) + MOV(0) + RNG(4)
    image: 'Orc Brute.png'
  },
  {
    name: 'Orc Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 9,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(1) + DEF(9) + HP(1) + MOV(0) + RNG(4)
    image: 'Orc Brute.png'
  },
  {
    name: 'Orc Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 9,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(1) + DEF(9) + HP(2) + MOV(0) + RNG(4)
    image: 'Orc Brute.png'
  },
  {
    name: 'Orc Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 9,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(1) + DEF(9) + HP(0) + MOV(2) + RNG(0)
    image: 'Orc Brute.png'
  },
  {
    name: 'Orc Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 9,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(1) + DEF(9) + HP(1) + MOV(2) + RNG(0)
    image: 'Orc Brute.png'
  },
  {
    name: 'Orc Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 9,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(1) + DEF(9) + HP(2) + MOV(2) + RNG(0)
    image: 'Orc Brute.png'
  },
  {
    name: 'Orc Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 9,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(1) + DEF(9) + HP(0) + MOV(2) + RNG(2)
    image: 'Orc Brute.png'
  },
  {
    name: 'Orc Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 9,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(1) + DEF(9) + HP(1) + MOV(2) + RNG(2)
    image: 'Orc Brute.png'
  },
  {
    name: 'Orc Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 9,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(1) + DEF(9) + HP(2) + MOV(2) + RNG(2)
    image: 'Orc Brute.png'
  },
  {
    name: 'Orc Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 9,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(1) + DEF(9) + HP(0) + MOV(4) + RNG(0)
    image: 'Orc Brute.png'
  },
  {
    name: 'Orc Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 9,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(1) + DEF(9) + HP(1) + MOV(4) + RNG(0)
    image: 'Orc Brute.png'
  },
  {
    name: 'Orc Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 1,
    def: 9,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(1) + DEF(9) + HP(2) + MOV(4) + RNG(0)
    image: 'Orc Brute.png'
  },

  // Name: Treant (ATK: 2, DEF: 0)
  {
    name: 'Treant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 0,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 2, // ATK(2) + DEF(0) + HP(0) + MOV(0) + RNG(0)
    image: 'Treant.png'
  },
  {
    name: 'Treant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 0,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 3, // ATK(2) + DEF(0) + HP(1) + MOV(0) + RNG(0)
    image: 'Treant.png'
  },
  {
    name: 'Treant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 0,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(2) + DEF(0) + HP(2) + MOV(0) + RNG(0)
    image: 'Treant.png'
  },
  {
    name: 'Treant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 0,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(2) + DEF(0) + HP(0) + MOV(0) + RNG(2)
    image: 'Treant.png'
  },
  {
    name: 'Treant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 0,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(2) + DEF(0) + HP(1) + MOV(0) + RNG(2)
    image: 'Treant.png'
  },
  {
    name: 'Treant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 0,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(2) + DEF(0) + HP(2) + MOV(0) + RNG(2)
    image: 'Treant.png'
  },
  {
    name: 'Treant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 0,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(2) + DEF(0) + HP(0) + MOV(0) + RNG(4)
    image: 'Treant.png'
  },
  {
    name: 'Treant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 0,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(2) + DEF(0) + HP(1) + MOV(0) + RNG(4)
    image: 'Treant.png'
  },
  {
    name: 'Treant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 0,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(2) + DEF(0) + HP(2) + MOV(0) + RNG(4)
    image: 'Treant.png'
  },
  {
    name: 'Treant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 0,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(2) + DEF(0) + HP(0) + MOV(2) + RNG(0)
    image: 'Treant.png'
  },
  {
    name: 'Treant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 0,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(2) + DEF(0) + HP(1) + MOV(2) + RNG(0)
    image: 'Treant.png'
  },
  {
    name: 'Treant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 0,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(2) + DEF(0) + HP(2) + MOV(2) + RNG(0)
    image: 'Treant.png'
  },
  {
    name: 'Treant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 0,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(2) + DEF(0) + HP(0) + MOV(2) + RNG(2)
    image: 'Treant.png'
  },
  {
    name: 'Treant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 0,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(2) + DEF(0) + HP(1) + MOV(2) + RNG(2)
    image: 'Treant.png'
  },
  {
    name: 'Treant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 0,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(2) + DEF(0) + HP(2) + MOV(2) + RNG(2)
    image: 'Treant.png'
  },
  {
    name: 'Treant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 0,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(2) + DEF(0) + HP(0) + MOV(4) + RNG(0)
    image: 'Treant.png'
  },
  {
    name: 'Treant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 0,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(2) + DEF(0) + HP(1) + MOV(4) + RNG(0)
    image: 'Treant.png'
  },
  {
    name: 'Treant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 0,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(2) + DEF(0) + HP(2) + MOV(4) + RNG(0)
    image: 'Treant.png'
  },
  // Name: Hydra (ATK: 2, DEF: 1)
  {
    name: 'Hydra',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 1,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 3, // ATK(2) + DEF(1) + HP(0) + MOV(0) + RNG(0)
    image: 'Hydra.png'
  },
  {
    name: 'Hydra',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 1,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(2) + DEF(1) + HP(1) + MOV(0) + RNG(0)
    image: 'Hydra.png'
  },
  {
    name: 'Hydra',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 1,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(2) + DEF(1) + HP(2) + MOV(0) + RNG(0)
    image: 'Hydra.png'
  },
  {
    name: 'Hydra',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 1,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(2) + DEF(1) + HP(0) + MOV(0) + RNG(2)
    image: 'Hydra.png'
  },
  {
    name: 'Hydra',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 1,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(2) + DEF(1) + HP(1) + MOV(0) + RNG(2)
    image: 'Hydra.png'
  },
  {
    name: 'Hydra',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 1,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(2) + DEF(1) + HP(2) + MOV(0) + RNG(2)
    image: 'Hydra.png'
  },
  {
    name: 'Hydra',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 1,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(2) + DEF(1) + HP(0) + MOV(0) + RNG(4)
    image: 'Hydra.png'
  },
  {
    name: 'Hydra',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 1,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(2) + DEF(1) + HP(1) + MOV(0) + RNG(4)
    image: 'Hydra.png'
  },
  {
    name: 'Hydra',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 1,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(2) + DEF(1) + HP(2) + MOV(0) + RNG(4)
    image: 'Hydra.png'
  },
  {
    name: 'Hydra',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 1,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(2) + DEF(1) + HP(0) + MOV(2) + RNG(0)
    image: 'Hydra.png'
  },
  {
    name: 'Hydra',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 1,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(2) + DEF(1) + HP(1) + MOV(2) + RNG(0)
    image: 'Hydra.png'
  },
  {
    name: 'Hydra',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 1,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(2) + DEF(1) + HP(2) + MOV(2) + RNG(0)
    image: 'Hydra.png'
  },
  {
    name: 'Hydra',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 1,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(2) + DEF(1) + HP(0) + MOV(2) + RNG(2)
    image: 'Hydra.png'
  },
  {
    name: 'Hydra',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 1,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(2) + DEF(1) + HP(1) + MOV(2) + RNG(2)
    image: 'Hydra.png'
  },
  {
    name: 'Hydra',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 1,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(2) + DEF(1) + HP(2) + MOV(2) + RNG(2)
    image: 'Hydra.png'
  },
  {
    name: 'Hydra',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 1,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(2) + DEF(1) + HP(0) + MOV(4) + RNG(0)
    image: 'Hydra.png'
  },
  {
    name: 'Hydra',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 1,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(2) + DEF(1) + HP(1) + MOV(4) + RNG(0)
    image: 'Hydra.png'
  },
  {
    name: 'Hydra',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 1,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(2) + DEF(1) + HP(2) + MOV(4) + RNG(0)
    image: 'Hydra.png'
  },
  // Name: Shroom (ATK: 2, DEF: 2)
  {
    name: 'Shroom',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 2,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(2) + DEF(2) + HP(0) + MOV(0) + RNG(0)
    image: 'Shroom.png'
  },
  {
    name: 'Shroom',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 2,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(2) + DEF(2) + HP(1) + MOV(0) + RNG(0)
    image: 'Shroom.png'
  },
  {
    name: 'Shroom',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 2,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(2) + DEF(2) + HP(2) + MOV(0) + RNG(0)
    image: 'Shroom.png'
  },
  {
    name: 'Shroom',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 2,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(2) + DEF(2) + HP(0) + MOV(0) + RNG(2)
    image: 'Shroom.png'
  },
  {
    name: 'Shroom',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 2,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(2) + DEF(2) + HP(1) + MOV(0) + RNG(2)
    image: 'Shroom.png'
  },
  {
    name: 'Shroom',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 2,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(2) + DEF(2) + HP(2) + MOV(0) + RNG(2)
    image: 'Shroom.png'
  },
  {
    name: 'Shroom',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 2,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(2) + DEF(2) + HP(0) + MOV(0) + RNG(4)
    image: 'Shroom.png'
  },
  {
    name: 'Shroom',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 2,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(2) + DEF(2) + HP(1) + MOV(0) + RNG(4)
    image: 'Shroom.png'
  },
  {
    name: 'Shroom',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 2,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(2) + DEF(2) + HP(2) + MOV(0) + RNG(4)
    image: 'Shroom.png'
  },
  {
    name: 'Shroom',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 2,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(2) + DEF(2) + HP(0) + MOV(2) + RNG(0)
    image: 'Shroom.png'
  },
  {
    name: 'Shroom',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 2,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(2) + DEF(2) + HP(1) + MOV(2) + RNG(0)
    image: 'Shroom.png'
  },
  {
    name: 'Shroom',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 2,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(2) + DEF(2) + HP(2) + MOV(2) + RNG(0)
    image: 'Shroom.png'
  },
  {
    name: 'Shroom',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 2,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(2) + DEF(2) + HP(0) + MOV(2) + RNG(2)
    image: 'Shroom.png'
  },
  {
    name: 'Shroom',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 2,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(2) + DEF(2) + HP(1) + MOV(2) + RNG(2)
    image: 'Shroom.png'
  },
  {
    name: 'Shroom',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 2,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(2) + DEF(2) + HP(2) + MOV(2) + RNG(2)
    image: 'Shroom.png'
  },
  {
    name: 'Shroom',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 2,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(2) + DEF(2) + HP(0) + MOV(4) + RNG(0)
    image: 'Shroom.png'
  },
  {
    name: 'Shroom',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 2,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(2) + DEF(2) + HP(1) + MOV(4) + RNG(0)
    image: 'Shroom.png'
  },
  {
    name: 'Shroom',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 2,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(2) + DEF(2) + HP(2) + MOV(4) + RNG(0)
    image: 'Shroom.png'
  },
  // Name: Fungi Lord (ATK: 2, DEF: 3)
  {
    name: 'Fungi Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 3,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(2) + DEF(3) + HP(0) + MOV(0) + RNG(0)
    image: 'Fungi Lord.png'
  },
  {
    name: 'Fungi Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 3,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(2) + DEF(3) + HP(1) + MOV(0) + RNG(0)
    image: 'Fungi Lord.png'
  },
  {
    name: 'Fungi Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 3,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(2) + DEF(3) + HP(2) + MOV(0) + RNG(0)
    image: 'Fungi Lord.png'
  },
  {
    name: 'Fungi Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 3,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(2) + DEF(3) + HP(0) + MOV(0) + RNG(2)
    image: 'Fungi Lord.png'
  },
  {
    name: 'Fungi Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 3,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(2) + DEF(3) + HP(1) + MOV(0) + RNG(2)
    image: 'Fungi Lord.png'
  },
  {
    name: 'Fungi Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 3,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(2) + DEF(3) + HP(2) + MOV(0) + RNG(2)
    image: 'Fungi Lord.png'
  },
  {
    name: 'Fungi Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 3,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(2) + DEF(3) + HP(0) + MOV(0) + RNG(4)
    image: 'Fungi Lord.png'
  },
  {
    name: 'Fungi Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 3,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(2) + DEF(3) + HP(1) + MOV(0) + RNG(4)
    image: 'Fungi Lord.png'
  },
  {
    name: 'Fungi Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 3,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(2) + DEF(3) + HP(2) + MOV(0) + RNG(4)
    image: 'Fungi Lord.png'
  },
  {
    name: 'Fungi Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 3,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(2) + DEF(3) + HP(0) + MOV(2) + RNG(0)
    image: 'Fungi Lord.png'
  },
  {
    name: 'Fungi Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 3,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(2) + DEF(3) + HP(1) + MOV(2) + RNG(0)
    image: 'Fungi Lord.png'
  },
  {
    name: 'Fungi Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 3,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(2) + DEF(3) + HP(2) + MOV(2) + RNG(0)
    image: 'Fungi Lord.png'
  },
  {
    name: 'Fungi Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 3,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(2) + DEF(3) + HP(0) + MOV(2) + RNG(2)
    image: 'Fungi Lord.png'
  },
  {
    name: 'Fungi Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 3,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(2) + DEF(3) + HP(1) + MOV(2) + RNG(2)
    image: 'Fungi Lord.png'
  },
  {
    name: 'Fungi Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 3,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(2) + DEF(3) + HP(2) + MOV(2) + RNG(2)
    image: 'Fungi Lord.png'
  },
  {
    name: 'Fungi Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 3,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(2) + DEF(3) + HP(0) + MOV(4) + RNG(0)
    image: 'Fungi Lord.png'
  },
  {
    name: 'Fungi Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 3,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(2) + DEF(3) + HP(1) + MOV(4) + RNG(0)
    image: 'Fungi Lord.png'
  },
  {
    name: 'Fungi Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 3,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(2) + DEF(3) + HP(2) + MOV(4) + RNG(0)
    image: 'Fungi Lord.png'
  },
  // Name: Wisdom Tree (ATK: 2, DEF: 4)
  {
    name: 'Wisdom Tree',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 4,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(2) + DEF(4) + HP(0) + MOV(0) + RNG(0)
    image: 'Wisdom Tree.png'
  },
  {
    name: 'Wisdom Tree',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 4,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(2) + DEF(4) + HP(1) + MOV(0) + RNG(0)
    image: 'Wisdom Tree.png'
  },
  {
    name: 'Wisdom Tree',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 4,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(2) + DEF(4) + HP(2) + MOV(0) + RNG(0)
    image: 'Wisdom Tree.png'
  },
  {
    name: 'Wisdom Tree',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 4,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(2) + DEF(4) + HP(0) + MOV(0) + RNG(2)
    image: 'Wisdom Tree.png'
  },
  {
    name: 'Wisdom Tree',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 4,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(2) + DEF(4) + HP(1) + MOV(0) + RNG(2)
    image: 'Wisdom Tree.png'
  },
  {
    name: 'Wisdom Tree',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 4,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(2) + DEF(4) + HP(2) + MOV(0) + RNG(2)
    image: 'Wisdom Tree.png'
  },
  {
    name: 'Wisdom Tree',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 4,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(2) + DEF(4) + HP(0) + MOV(0) + RNG(4)
    image: 'Wisdom Tree.png'
  },
  {
    name: 'Wisdom Tree',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 4,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(2) + DEF(4) + HP(1) + MOV(0) + RNG(4)
    image: 'Wisdom Tree.png'
  },
  {
    name: 'Wisdom Tree',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 4,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(2) + DEF(4) + HP(2) + MOV(0) + RNG(4)
    image: 'Wisdom Tree.png'
  },
  {
    name: 'Wisdom Tree',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 4,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(2) + DEF(4) + HP(0) + MOV(2) + RNG(0)
    image: 'Wisdom Tree.png'
  },
  {
    name: 'Wisdom Tree',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 4,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(2) + DEF(4) + HP(1) + MOV(2) + RNG(0)
    image: 'Wisdom Tree.png'
  },
  {
    name: 'Wisdom Tree',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 4,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(2) + DEF(4) + HP(2) + MOV(2) + RNG(0)
    image: 'Wisdom Tree.png'
  },
  {
    name: 'Wisdom Tree',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 4,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(2) + DEF(4) + HP(0) + MOV(2) + RNG(2)
    image: 'Wisdom Tree.png'
  },
  {
    name: 'Wisdom Tree',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 4,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(2) + DEF(4) + HP(1) + MOV(2) + RNG(2)
    image: 'Wisdom Tree.png'
  },
  {
    name: 'Wisdom Tree',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 4,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(2) + DEF(4) + HP(2) + MOV(2) + RNG(2)
    image: 'Wisdom Tree.png'
  },
  {
    name: 'Wisdom Tree',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 4,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(2) + DEF(4) + HP(0) + MOV(4) + RNG(0)
    image: 'Wisdom Tree.png'
  },
  {
    name: 'Wisdom Tree',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 4,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(2) + DEF(4) + HP(1) + MOV(4) + RNG(0)
    image: 'Wisdom Tree.png'
  },
  {
    name: 'Wisdom Tree',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 4,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(2) + DEF(4) + HP(2) + MOV(4) + RNG(0)
    image: 'Wisdom Tree.png'
  },
  // Name: Sludge (ATK: 2, DEF: 5)
  {
    name: 'Sludge',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 5,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(2) + DEF(5) + HP(0) + MOV(0) + RNG(0)
    image: 'Sludge.png'
  },
  {
    name: 'Sludge',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 5,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(2) + DEF(5) + HP(1) + MOV(0) + RNG(0)
    image: 'Sludge.png'
  },
  {
    name: 'Sludge',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 5,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(2) + DEF(5) + HP(2) + MOV(0) + RNG(0)
    image: 'Sludge.png'
  },
  {
    name: 'Sludge',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 5,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(2) + DEF(5) + HP(0) + MOV(0) + RNG(2)
    image: 'Sludge.png'
  },
  {
    name: 'Sludge',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 5,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(2) + DEF(5) + HP(1) + MOV(0) + RNG(2)
    image: 'Sludge.png'
  },
  {
    name: 'Sludge',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 5,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(2) + DEF(5) + HP(2) + MOV(0) + RNG(2)
    image: 'Sludge.png'
  },
  {
    name: 'Sludge',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 5,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(2) + DEF(5) + HP(0) + MOV(0) + RNG(4)
    image: 'Sludge.png'
  },
  {
    name: 'Sludge',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 5,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(2) + DEF(5) + HP(1) + MOV(0) + RNG(4)
    image: 'Sludge.png'
  },
  {
    name: 'Sludge',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 5,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(2) + DEF(5) + HP(2) + MOV(0) + RNG(4)
    image: 'Sludge.png'
  },
  {
    name: 'Sludge',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 5,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(2) + DEF(5) + HP(0) + MOV(2) + RNG(0)
    image: 'Sludge.png'
  },
  {
    name: 'Sludge',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 5,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(2) + DEF(5) + HP(1) + MOV(2) + RNG(0)
    image: 'Sludge.png'
  },
  {
    name: 'Sludge',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 5,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(2) + DEF(5) + HP(2) + MOV(2) + RNG(0)
    image: 'Sludge.png'
  },
  {
    name: 'Sludge',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 5,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(2) + DEF(5) + HP(0) + MOV(2) + RNG(2)
    image: 'Sludge.png'
  },
  {
    name: 'Sludge',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 5,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(2) + DEF(5) + HP(1) + MOV(2) + RNG(2)
    image: 'Sludge.png'
  },
  {
    name: 'Sludge',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 5,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(2) + DEF(5) + HP(2) + MOV(2) + RNG(2)
    image: 'Sludge.png'
  },
  {
    name: 'Sludge',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 5,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(2) + DEF(5) + HP(0) + MOV(4) + RNG(0)
    image: 'Sludge.png'
  },
  {
    name: 'Sludge',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 5,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(2) + DEF(5) + HP(1) + MOV(4) + RNG(0)
    image: 'Sludge.png'
  },
  {
    name: 'Sludge',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 5,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(2) + DEF(5) + HP(2) + MOV(4) + RNG(0)
    image: 'Sludge.png'
  },
  // Name: Staff Man (ATK: 2, DEF: 6)
  {
    name: 'Staff Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 6,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(2) + DEF(6) + HP(0) + MOV(0) + RNG(0)
    image: 'Staff Man.png'
  },
  {
    name: 'Staff Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 6,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(2) + DEF(6) + HP(1) + MOV(0) + RNG(0)
    image: 'Staff Man.png'
  },
  {
    name: 'Staff Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 6,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(2) + DEF(6) + HP(2) + MOV(0) + RNG(0)
    image: 'Staff Man.png'
  },
  {
    name: 'Staff Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 6,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(2) + DEF(6) + HP(0) + MOV(0) + RNG(2)
    image: 'Staff Man.png'
  },
  {
    name: 'Staff Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 6,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(2) + DEF(6) + HP(1) + MOV(0) + RNG(2)
    image: 'Staff Man.png'
  },
  {
    name: 'Staff Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 6,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(2) + DEF(6) + HP(2) + MOV(0) + RNG(2)
    image: 'Staff Man.png'
  },
  {
    name: 'Staff Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 6,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(2) + DEF(6) + HP(0) + MOV(0) + RNG(4)
    image: 'Staff Man.png'
  },
  {
    name: 'Staff Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 6,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(2) + DEF(6) + HP(1) + MOV(0) + RNG(4)
    image: 'Staff Man.png'
  },
  {
    name: 'Staff Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 6,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(2) + DEF(6) + HP(2) + MOV(0) + RNG(4)
    image: 'Staff Man.png'
  },
  {
    name: 'Staff Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 6,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(2) + DEF(6) + HP(0) + MOV(2) + RNG(0)
    image: 'Staff Man.png'
  },
  {
    name: 'Staff Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 6,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(2) + DEF(6) + HP(1) + MOV(2) + RNG(0)
    image: 'Staff Man.png'
  },
  {
    name: 'Staff Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 6,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(2) + DEF(6) + HP(2) + MOV(2) + RNG(0)
    image: 'Staff Man.png'
  },
  {
    name: 'Staff Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 6,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(2) + DEF(6) + HP(0) + MOV(2) + RNG(2)
    image: 'Staff Man.png'
  },
  {
    name: 'Staff Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 6,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(2) + DEF(6) + HP(1) + MOV(2) + RNG(2)
    image: 'Staff Man.png'
  },
  {
    name: 'Staff Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 6,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(2) + DEF(6) + HP(2) + MOV(2) + RNG(2)
    image: 'Staff Man.png'
  },
  {
    name: 'Staff Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 6,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(2) + DEF(6) + HP(0) + MOV(4) + RNG(0)
    image: 'Staff Man.png'
  },
  {
    name: 'Staff Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 6,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(2) + DEF(6) + HP(1) + MOV(4) + RNG(0)
    image: 'Staff Man.png'
  },
  {
    name: 'Staff Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 6,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(2) + DEF(6) + HP(2) + MOV(4) + RNG(0)
    image: 'Staff Man.png'
  },
  // Name: Hunter (ATK: 2, DEF: 7)
  {
    name: 'Hunter',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 7,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(2) + DEF(7) + HP(0) + MOV(0) + RNG(0)
    image: 'Hunter.png'
  },
  {
    name: 'Hunter',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 7,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(2) + DEF(7) + HP(1) + MOV(0) + RNG(0)
    image: 'Hunter.png'
  },
  {
    name: 'Hunter',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 7,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(2) + DEF(7) + HP(2) + MOV(0) + RNG(0)
    image: 'Hunter.png'
  },
  {
    name: 'Hunter',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 7,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(2) + DEF(7) + HP(0) + MOV(0) + RNG(2)
    image: 'Hunter.png'
  },
  {
    name: 'Hunter',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 7,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(2) + DEF(7) + HP(1) + MOV(0) + RNG(2)
    image: 'Hunter.png'
  },
  {
    name: 'Hunter',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 7,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(2) + DEF(7) + HP(2) + MOV(0) + RNG(2)
    image: 'Hunter.png'
  },
  {
    name: 'Hunter',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 7,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(2) + DEF(7) + HP(0) + MOV(0) + RNG(4)
    image: 'Hunter.png'
  },
  {
    name: 'Hunter',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 7,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(2) + DEF(7) + HP(1) + MOV(0) + RNG(4)
    image: 'Hunter.png'
  },
  {
    name: 'Hunter',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 7,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(2) + DEF(7) + HP(2) + MOV(0) + RNG(4)
    image: 'Hunter.png'
  },
  {
    name: 'Hunter',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 7,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(2) + DEF(7) + HP(0) + MOV(2) + RNG(0)
    image: 'Hunter.png'
  },
  {
    name: 'Hunter',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 7,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(2) + DEF(7) + HP(1) + MOV(2) + RNG(0)
    image: 'Hunter.png'
  },
  {
    name: 'Hunter',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 7,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(2) + DEF(7) + HP(2) + MOV(2) + RNG(0)
    image: 'Hunter.png'
  },
  {
    name: 'Hunter',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 7,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(2) + DEF(7) + HP(0) + MOV(2) + RNG(2)
    image: 'Hunter.png'
  },
  {
    name: 'Hunter',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 7,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(2) + DEF(7) + HP(1) + MOV(2) + RNG(2)
    image: 'Hunter.png'
  },
  {
    name: 'Hunter',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 7,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(2) + DEF(7) + HP(2) + MOV(2) + RNG(2)
    image: 'Hunter.png'
  },
  {
    name: 'Hunter',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 7,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(2) + DEF(7) + HP(0) + MOV(4) + RNG(0)
    image: 'Hunter.png'
  },
  {
    name: 'Hunter',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 7,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(2) + DEF(7) + HP(1) + MOV(4) + RNG(0)
    image: 'Hunter.png'
  },
  {
    name: 'Hunter',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 7,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(2) + DEF(7) + HP(2) + MOV(4) + RNG(0)
    image: 'Hunter.png'
  },
  // Name: Sneak (ATK: 2, DEF: 8)
  {
    name: 'Sneak',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 8,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(2) + DEF(8) + HP(0) + MOV(0) + RNG(0)
    image: 'Sneak.png'
  },
  {
    name: 'Sneak',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 8,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(2) + DEF(8) + HP(1) + MOV(0) + RNG(0)
    image: 'Sneak.png'
  },
  {
    name: 'Sneak',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 8,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(2) + DEF(8) + HP(2) + MOV(0) + RNG(0)
    image: 'Sneak.png'
  },
  {
    name: 'Sneak',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 8,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(2) + DEF(8) + HP(0) + MOV(0) + RNG(2)
    image: 'Sneak.png'
  },
  {
    name: 'Sneak',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 8,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(2) + DEF(8) + HP(1) + MOV(0) + RNG(2)
    image: 'Sneak.png'
  },
  {
    name: 'Sneak',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 8,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(2) + DEF(8) + HP(2) + MOV(0) + RNG(2)
    image: 'Sneak.png'
  },
  {
    name: 'Sneak',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 8,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(2) + DEF(8) + HP(0) + MOV(0) + RNG(4)
    image: 'Sneak.png'
  },
  {
    name: 'Sneak',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 8,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(2) + DEF(8) + HP(1) + MOV(0) + RNG(4)
    image: 'Sneak.png'
  },
  {
    name: 'Sneak',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 8,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(2) + DEF(8) + HP(2) + MOV(0) + RNG(4)
    image: 'Sneak.png'
  },
  {
    name: 'Sneak',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 8,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(2) + DEF(8) + HP(0) + MOV(2) + RNG(0)
    image: 'Sneak.png'
  },
  {
    name: 'Sneak',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 8,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(2) + DEF(8) + HP(1) + MOV(2) + RNG(0)
    image: 'Sneak.png'
  },
  {
    name: 'Sneak',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 8,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(2) + DEF(8) + HP(2) + MOV(2) + RNG(0)
    image: 'Sneak.png'
  },
  {
    name: 'Sneak',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 8,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(2) + DEF(8) + HP(0) + MOV(2) + RNG(2)
    image: 'Sneak.png'
  },
  {
    name: 'Sneak',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 8,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(2) + DEF(8) + HP(1) + MOV(2) + RNG(2)
    image: 'Sneak.png'
  },
  {
    name: 'Sneak',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 8,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(2) + DEF(8) + HP(2) + MOV(2) + RNG(2)
    image: 'Sneak.png'
  },
  {
    name: 'Sneak',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 8,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(2) + DEF(8) + HP(0) + MOV(4) + RNG(0)
    image: 'Sneak.png'
  },
  {
    name: 'Sneak',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 8,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(2) + DEF(8) + HP(1) + MOV(4) + RNG(0)
    image: 'Sneak.png'
  },
  {
    name: 'Sneak',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 8,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(2) + DEF(8) + HP(2) + MOV(4) + RNG(0)
    image: 'Sneak.png'
  },
  // Name: Flower (ATK: 2, DEF: 9)
  {
    name: 'Flower',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 9,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(2) + DEF(9) + HP(0) + MOV(0) + RNG(0)
    image: 'Flower.png'
  },
  {
    name: 'Flower',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 9,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(2) + DEF(9) + HP(1) + MOV(0) + RNG(0)
    image: 'Flower.png'
  },
  {
    name: 'Flower',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 9,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(2) + DEF(9) + HP(2) + MOV(0) + RNG(0)
    image: 'Flower.png'
  },
  {
    name: 'Flower',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 9,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(2) + DEF(9) + HP(0) + MOV(0) + RNG(2)
    image: 'Flower.png'
  },
  {
    name: 'Flower',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 9,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(2) + DEF(9) + HP(1) + MOV(0) + RNG(2)
    image: 'Flower.png'
  },
  {
    name: 'Flower',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 9,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(2) + DEF(9) + HP(2) + MOV(0) + RNG(2)
    image: 'Flower.png'
  },
  {
    name: 'Flower',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 9,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(2) + DEF(9) + HP(0) + MOV(0) + RNG(4)
    image: 'Flower.png'
  },
  {
    name: 'Flower',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 9,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(2) + DEF(9) + HP(1) + MOV(0) + RNG(4)
    image: 'Flower.png'
  },
  {
    name: 'Flower',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 9,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(2) + DEF(9) + HP(2) + MOV(0) + RNG(4)
    image: 'Flower.png'
  },
  {
    name: 'Flower',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 9,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(2) + DEF(9) + HP(0) + MOV(2) + RNG(0)
    image: 'Flower.png'
  },
  {
    name: 'Flower',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 9,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(2) + DEF(9) + HP(1) + MOV(2) + RNG(0)
    image: 'Flower.png'
  },
  {
    name: 'Flower',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 9,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(2) + DEF(9) + HP(2) + MOV(2) + RNG(0)
    image: 'Flower.png'
  },
  {
    name: 'Flower',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 9,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(2) + DEF(9) + HP(0) + MOV(2) + RNG(2)
    image: 'Flower.png'
  },
  {
    name: 'Flower',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 9,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(2) + DEF(9) + HP(1) + MOV(2) + RNG(2)
    image: 'Flower.png'
  },
  {
    name: 'Flower',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 9,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(2) + DEF(9) + HP(2) + MOV(2) + RNG(2)
    image: 'Flower.png'
  },
  {
    name: 'Flower',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 9,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(2) + DEF(9) + HP(0) + MOV(4) + RNG(0)
    image: 'Flower.png'
  },
  {
    name: 'Flower',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 9,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(2) + DEF(9) + HP(1) + MOV(4) + RNG(0)
    image: 'Flower.png'
  },
  {
    name: 'Flower',
    type: 'minion',
    subType: 'minionbasic',
    atk: 2,
    def: 9,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(2) + DEF(9) + HP(2) + MOV(4) + RNG(0)
    image: 'Flower.png'
  },
  // Name: Boar (ATK: 3, DEF: 0)
  {
    name: 'Boar',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 0,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 3, // ATK(3) + DEF(0) + HP(0) + MOV(0) + RNG(0)
    image: 'Boar.png'
  },
  {
    name: 'Boar',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 0,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(3) + DEF(0) + HP(1) + MOV(0) + RNG(0)
    image: 'Boar.png'
  },
  {
    name: 'Boar',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 0,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(3) + DEF(0) + HP(2) + MOV(0) + RNG(0)
    image: 'Boar.png'
  },
  {
    name: 'Boar',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 0,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(3) + DEF(0) + HP(0) + MOV(0) + RNG(2)
    image: 'Boar.png'
  },
  {
    name: 'Boar',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 0,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(3) + DEF(0) + HP(1) + MOV(0) + RNG(2)
    image: 'Boar.png'
  },
  {
    name: 'Boar',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 0,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(3) + DEF(0) + HP(2) + MOV(0) + RNG(2)
    image: 'Boar.png'
  },
  {
    name: 'Boar',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 0,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(3) + DEF(0) + HP(0) + MOV(0) + RNG(4)
    image: 'Boar.png'
  },
  {
    name: 'Boar',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 0,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(3) + DEF(0) + HP(1) + MOV(0) + RNG(4)
    image: 'Boar.png'
  },
  {
    name: 'Boar',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 0,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(3) + DEF(0) + HP(2) + MOV(0) + RNG(4)
    image: 'Boar.png'
  },
  {
    name: 'Boar',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 0,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(3) + DEF(0) + HP(0) + MOV(2) + RNG(0)
    image: 'Boar.png'
  },
  {
    name: 'Boar',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 0,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(3) + DEF(0) + HP(1) + MOV(2) + RNG(0)
    image: 'Boar.png'
  },
  {
    name: 'Boar',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 0,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(3) + DEF(0) + HP(2) + MOV(2) + RNG(0)
    image: 'Boar.png'
  },
  {
    name: 'Boar',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 0,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(3) + DEF(0) + HP(0) + MOV(2) + RNG(2)
    image: 'Boar.png'
  },
  {
    name: 'Boar',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 0,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(3) + DEF(0) + HP(1) + MOV(2) + RNG(2)
    image: 'Boar.png'
  },
  {
    name: 'Boar',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 0,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(3) + DEF(0) + HP(2) + MOV(2) + RNG(2)
    image: 'Boar.png'
  },
  {
    name: 'Boar',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 0,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(3) + DEF(0) + HP(0) + MOV(4) + RNG(0)
    image: 'Boar.png'
  },
  {
    name: 'Boar',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 0,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(3) + DEF(0) + HP(1) + MOV(4) + RNG(0)
    image: 'Boar.png'
  },
  {
    name: 'Boar',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 0,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(3) + DEF(0) + HP(2) + MOV(4) + RNG(0)
    image: 'Boar.png'
  },
  // Name: Pyromaniac (ATK: 3, DEF: 1)
  {
    name: 'Pyromaniac',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 1,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(3) + DEF(1) + HP(0) + MOV(0) + RNG(0)
    image: 'Pyromaniac.png'
  },
  {
    name: 'Pyromaniac',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 1,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(3) + DEF(1) + HP(1) + MOV(0) + RNG(0)
    image: 'Pyromaniac.png'
  },
  {
    name: 'Pyromaniac',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 1,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(3) + DEF(1) + HP(2) + MOV(0) + RNG(0)
    image: 'Pyromaniac.png'
  },
  {
    name: 'Pyromaniac',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 1,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(3) + DEF(1) + HP(0) + MOV(0) + RNG(2)
    image: 'Pyromaniac.png'
  },
  {
    name: 'Pyromaniac',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 1,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(3) + DEF(1) + HP(1) + MOV(0) + RNG(2)
    image: 'Pyromaniac.png'
  },
  {
    name: 'Pyromaniac',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 1,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(3) + DEF(1) + HP(2) + MOV(0) + RNG(2)
    image: 'Pyromaniac.png'
  },
  {
    name: 'Pyromaniac',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 1,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(3) + DEF(1) + HP(0) + MOV(0) + RNG(4)
    image: 'Pyromaniac.png'
  },
  {
    name: 'Pyromaniac',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 1,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(3) + DEF(1) + HP(1) + MOV(0) + RNG(4)
    image: 'Pyromaniac.png'
  },
  {
    name: 'Pyromaniac',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 1,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(3) + DEF(1) + HP(2) + MOV(0) + RNG(4)
    image: 'Pyromaniac.png'
  },
  {
    name: 'Pyromaniac',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 1,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(3) + DEF(1) + HP(0) + MOV(2) + RNG(0)
    image: 'Pyromaniac.png'
  },
  {
    name: 'Pyromaniac',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 1,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(3) + DEF(1) + HP(1) + MOV(2) + RNG(0)
    image: 'Pyromaniac.png'
  },
  {
    name: 'Pyromaniac',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 1,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(3) + DEF(1) + HP(2) + MOV(2) + RNG(0)
    image: 'Pyromaniac.png'
  },
  {
    name: 'Pyromaniac',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 1,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(3) + DEF(1) + HP(0) + MOV(2) + RNG(2)
    image: 'Pyromaniac.png'
  },
  {
    name: 'Pyromaniac',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 1,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(3) + DEF(1) + HP(1) + MOV(2) + RNG(2)
    image: 'Pyromaniac.png'
  },
  {
    name: 'Pyromaniac',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 1,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(3) + DEF(1) + HP(2) + MOV(2) + RNG(2)
    image: 'Pyromaniac.png'
  },
  {
    name: 'Pyromaniac',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 1,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(3) + DEF(1) + HP(0) + MOV(4) + RNG(0)
    image: 'Pyromaniac.png'
  },
  {
    name: 'Pyromaniac',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 1,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(3) + DEF(1) + HP(1) + MOV(4) + RNG(0)
    image: 'Pyromaniac.png'
  },
  {
    name: 'Pyromaniac',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 1,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(3) + DEF(1) + HP(2) + MOV(4) + RNG(0)
    image: 'Pyromaniac.png'
  },
  // Name: Chomper (ATK: 3, DEF: 2)
  {
    name: 'Chomper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 2,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(3) + DEF(2) + HP(0) + MOV(0) + RNG(0)
    image: 'Chomper.png'
  },
  {
    name: 'Chomper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 2,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(3) + DEF(2) + HP(1) + MOV(0) + RNG(0)
    image: 'Chomper.png'
  },
  {
    name: 'Chomper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 2,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(3) + DEF(2) + HP(2) + MOV(0) + RNG(0)
    image: 'Chomper.png'
  },
  {
    name: 'Chomper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 2,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(3) + DEF(2) + HP(0) + MOV(0) + RNG(2)
    image: 'Chomper.png'
  },
  {
    name: 'Chomper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 2,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(3) + DEF(2) + HP(1) + MOV(0) + RNG(2)
    image: 'Chomper.png'
  },
  {
    name: 'Chomper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 2,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(3) + DEF(2) + HP(2) + MOV(0) + RNG(2)
    image: 'Chomper.png'
  },
  {
    name: 'Chomper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 2,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(3) + DEF(2) + HP(0) + MOV(0) + RNG(4)
    image: 'Chomper.png'
  },
  {
    name: 'Chomper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 2,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(3) + DEF(2) + HP(1) + MOV(0) + RNG(4)
    image: 'Chomper.png'
  },
  {
    name: 'Chomper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 2,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(3) + DEF(2) + HP(2) + MOV(0) + RNG(4)
    image: 'Chomper.png'
  },
  {
    name: 'Chomper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 2,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(3) + DEF(2) + HP(0) + MOV(2) + RNG(0)
    image: 'Chomper.png'
  },
  {
    name: 'Chomper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 2,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(3) + DEF(2) + HP(1) + MOV(2) + RNG(0)
    image: 'Chomper.png'
  },
  {
    name: 'Chomper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 2,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(3) + DEF(2) + HP(2) + MOV(2) + RNG(0)
    image: 'Chomper.png'
  },
  {
    name: 'Chomper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 2,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(3) + DEF(2) + HP(0) + MOV(2) + RNG(2)
    image: 'Chomper.png'
  },
  {
    name: 'Chomper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 2,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(3) + DEF(2) + HP(1) + MOV(2) + RNG(2)
    image: 'Chomper.png'
  },
  {
    name: 'Chomper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 2,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(3) + DEF(2) + HP(2) + MOV(2) + RNG(2)
    image: 'Chomper.png'
  },
  {
    name: 'Chomper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 2,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(3) + DEF(2) + HP(0) + MOV(4) + RNG(0)
    image: 'Chomper.png'
  },
  {
    name: 'Chomper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 2,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(3) + DEF(2) + HP(1) + MOV(4) + RNG(0)
    image: 'Chomper.png'
  },
  {
    name: 'Chomper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 2,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(3) + DEF(2) + HP(2) + MOV(4) + RNG(0)
    image: 'Chomper.png'
  },
  // Name: Frog (ATK: 3, DEF: 3)
  {
    name: 'Frog',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 3,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(3) + DEF(3) + HP(0) + MOV(0) + RNG(0)
    image: 'Frog.png'
  },
  {
    name: 'Frog',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 3,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(3) + DEF(3) + HP(1) + MOV(0) + RNG(0)
    image: 'Frog.png'
  },
  {
    name: 'Frog',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 3,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(3) + DEF(3) + HP(2) + MOV(0) + RNG(0)
    image: 'Frog.png'
  },
  {
    name: 'Frog',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 3,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(3) + DEF(3) + HP(0) + MOV(0) + RNG(2)
    image: 'Frog.png'
  },
  {
    name: 'Frog',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 3,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(3) + DEF(3) + HP(1) + MOV(0) + RNG(2)
    image: 'Frog.png'
  },
  {
    name: 'Frog',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 3,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(3) + DEF(3) + HP(2) + MOV(0) + RNG(2)
    image: 'Frog.png'
  },
  {
    name: 'Frog',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 3,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(3) + DEF(3) + HP(0) + MOV(0) + RNG(4)
    image: 'Frog.png'
  },
  {
    name: 'Frog',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 3,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(3) + DEF(3) + HP(1) + MOV(0) + RNG(4)
    image: 'Frog.png'
  },
  {
    name: 'Frog',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 3,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(3) + DEF(3) + HP(2) + MOV(0) + RNG(4)
    image: 'Frog.png'
  },
  {
    name: 'Frog',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 3,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(3) + DEF(3) + HP(0) + MOV(2) + RNG(0)
    image: 'Frog.png'
  },
  {
    name: 'Frog',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 3,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(3) + DEF(3) + HP(1) + MOV(2) + RNG(0)
    image: 'Frog.png'
  },
  {
    name: 'Frog',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 3,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(3) + DEF(3) + HP(2) + MOV(2) + RNG(0)
    image: 'Frog.png'
  },
  {
    name: 'Frog',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 3,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(3) + DEF(3) + HP(0) + MOV(2) + RNG(2)
    image: 'Frog.png'
  },
  {
    name: 'Frog',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 3,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(3) + DEF(3) + HP(1) + MOV(2) + RNG(2)
    image: 'Frog.png'
  },
  {
    name: 'Frog',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 3,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(3) + DEF(3) + HP(2) + MOV(2) + RNG(2)
    image: 'Frog.png'
  },
  {
    name: 'Frog',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 3,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(3) + DEF(3) + HP(0) + MOV(4) + RNG(0)
    image: 'Frog.png'
  },
  {
    name: 'Frog',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 3,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(3) + DEF(3) + HP(1) + MOV(4) + RNG(0)
    image: 'Frog.png'
  },
  {
    name: 'Frog',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 3,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(3) + DEF(3) + HP(2) + MOV(4) + RNG(0)
    image: 'Frog.png'
  },
  // Name: Gremlin Teacher (ATK: 3, DEF: 4)
  {
    name: 'Gremlin Teacher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 4,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(3) + DEF(4) + HP(0) + MOV(0) + RNG(0)
    image: 'Gremlin Teacher.png'
  },
  {
    name: 'Gremlin Teacher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 4,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(3) + DEF(4) + HP(1) + MOV(0) + RNG(0)
    image: 'Gremlin Teacher.png'
  },
  {
    name: 'Gremlin Teacher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 4,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(3) + DEF(4) + HP(2) + MOV(0) + RNG(0)
    image: 'Gremlin Teacher.png'
  },
  {
    name: 'Gremlin Teacher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 4,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(3) + DEF(4) + HP(0) + MOV(0) + RNG(2)
    image: 'Gremlin Teacher.png'
  },
  {
    name: 'Gremlin Teacher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 4,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(3) + DEF(4) + HP(1) + MOV(0) + RNG(2)
    image: 'Gremlin Teacher.png'
  },
  {
    name: 'Gremlin Teacher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 4,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(3) + DEF(4) + HP(2) + MOV(0) + RNG(2)
    image: 'Gremlin Teacher.png'
  },
  {
    name: 'Gremlin Teacher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 4,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(3) + DEF(4) + HP(0) + MOV(0) + RNG(4)
    image: 'Gremlin Teacher.png'
  },
  {
    name: 'Gremlin Teacher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 4,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(3) + DEF(4) + HP(1) + MOV(0) + RNG(4)
    image: 'Gremlin Teacher.png'
  },
  {
    name: 'Gremlin Teacher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 4,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(3) + DEF(4) + HP(2) + MOV(0) + RNG(4)
    image: 'Gremlin Teacher.png'
  },
  {
    name: 'Gremlin Teacher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 4,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(3) + DEF(4) + HP(0) + MOV(2) + RNG(0)
    image: 'Gremlin Teacher.png'
  },
  {
    name: 'Gremlin Teacher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 4,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(3) + DEF(4) + HP(1) + MOV(2) + RNG(0)
    image: 'Gremlin Teacher.png'
  },
  {
    name: 'Gremlin Teacher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 4,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(3) + DEF(4) + HP(2) + MOV(2) + RNG(0)
    image: 'Gremlin Teacher.png'
  },
  {
    name: 'Gremlin Teacher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 4,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(3) + DEF(4) + HP(0) + MOV(2) + RNG(2)
    image: 'Gremlin Teacher.png'
  },
  {
    name: 'Gremlin Teacher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 4,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(3) + DEF(4) + HP(1) + MOV(2) + RNG(2)
    image: 'Gremlin Teacher.png'
  },
  {
    name: 'Gremlin Teacher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 4,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(3) + DEF(4) + HP(2) + MOV(2) + RNG(2)
    image: 'Gremlin Teacher.png'
  },
  {
    name: 'Gremlin Teacher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 4,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(3) + DEF(4) + HP(0) + MOV(4) + RNG(0)
    image: 'Gremlin Teacher.png'
  },
  {
    name: 'Gremlin Teacher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 4,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(3) + DEF(4) + HP(1) + MOV(4) + RNG(0)
    image: 'Gremlin Teacher.png'
  },
  {
    name: 'Gremlin Teacher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 4,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(3) + DEF(4) + HP(2) + MOV(4) + RNG(0)
    image: 'Gremlin Teacher.png'
  },
  // Name: Gremlin (ATK: 3, DEF: 5)
  {
    name: 'Gremlin',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 5,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(3) + DEF(5) + HP(0) + MOV(0) + RNG(0)
    image: 'Gremlin.png'
  },
  {
    name: 'Gremlin',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 5,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(3) + DEF(5) + HP(1) + MOV(0) + RNG(0)
    image: 'Gremlin.png'
  },
  {
    name: 'Gremlin',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 5,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(3) + DEF(5) + HP(2) + MOV(0) + RNG(0)
    image: 'Gremlin.png'
  },
  {
    name: 'Gremlin',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 5,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(3) + DEF(5) + HP(0) + MOV(0) + RNG(2)
    image: 'Gremlin.png'
  },
  {
    name: 'Gremlin',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 5,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(3) + DEF(5) + HP(1) + MOV(0) + RNG(2)
    image: 'Gremlin.png'
  },
  {
    name: 'Gremlin',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 5,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(3) + DEF(5) + HP(2) + MOV(0) + RNG(2)
    image: 'Gremlin.png'
  },
  {
    name: 'Gremlin',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 5,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(3) + DEF(5) + HP(0) + MOV(0) + RNG(4)
    image: 'Gremlin.png'
  },
  {
    name: 'Gremlin',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 5,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(3) + DEF(5) + HP(1) + MOV(0) + RNG(4)
    image: 'Gremlin.png'
  },
  {
    name: 'Gremlin',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 5,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(3) + DEF(5) + HP(2) + MOV(0) + RNG(4)
    image: 'Gremlin.png'
  },
  {
    name: 'Gremlin',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 5,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(3) + DEF(5) + HP(0) + MOV(2) + RNG(0)
    image: 'Gremlin.png'
  },
  {
    name: 'Gremlin',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 5,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(3) + DEF(5) + HP(1) + MOV(2) + RNG(0)
    image: 'Gremlin.png'
  },
  {
    name: 'Gremlin',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 5,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(3) + DEF(5) + HP(2) + MOV(2) + RNG(0)
    image: 'Gremlin.png'
  },
  {
    name: 'Gremlin',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 5,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(3) + DEF(5) + HP(0) + MOV(2) + RNG(2)
    image: 'Gremlin.png'
  },
  {
    name: 'Gremlin',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 5,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(3) + DEF(5) + HP(1) + MOV(2) + RNG(2)
    image: 'Gremlin.png'
  },
  {
    name: 'Gremlin',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 5,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(3) + DEF(5) + HP(2) + MOV(2) + RNG(2)
    image: 'Gremlin.png'
  },
  {
    name: 'Gremlin',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 5,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(3) + DEF(5) + HP(0) + MOV(4) + RNG(0)
    image: 'Gremlin.png'
  },
  {
    name: 'Gremlin',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 5,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(3) + DEF(5) + HP(1) + MOV(4) + RNG(0)
    image: 'Gremlin.png'
  },
  {
    name: 'Gremlin',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 5,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(3) + DEF(5) + HP(2) + MOV(4) + RNG(0)
    image: 'Gremlin.png'
  },
  // Name: Gremlin Warrior (ATK: 3, DEF: 6)
  {
    name: 'Gremlin Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 6,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(3) + DEF(6) + HP(0) + MOV(0) + RNG(0)
    image: 'Gremlin Warrior.png'
  },
  {
    name: 'Gremlin Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 6,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(3) + DEF(6) + HP(1) + MOV(0) + RNG(0)
    image: 'Gremlin Warrior.png'
  },
  {
    name: 'Gremlin Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 6,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(3) + DEF(6) + HP(2) + MOV(0) + RNG(0)
    image: 'Gremlin Warrior.png'
  },
  {
    name: 'Gremlin Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 6,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(3) + DEF(6) + HP(0) + MOV(0) + RNG(2)
    image: 'Gremlin Warrior.png'
  },
  {
    name: 'Gremlin Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 6,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(3) + DEF(6) + HP(1) + MOV(0) + RNG(2)
    image: 'Gremlin Warrior.png'
  },
  {
    name: 'Gremlin Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 6,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(3) + DEF(6) + HP(2) + MOV(0) + RNG(2)
    image: 'Gremlin Warrior.png'
  },
  {
    name: 'Gremlin Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 6,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(3) + DEF(6) + HP(0) + MOV(0) + RNG(4)
    image: 'Gremlin Warrior.png'
  },
  {
    name: 'Gremlin Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 6,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(3) + DEF(6) + HP(1) + MOV(0) + RNG(4)
    image: 'Gremlin Warrior.png'
  },
  {
    name: 'Gremlin Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 6,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(3) + DEF(6) + HP(2) + MOV(0) + RNG(4)
    image: 'Gremlin Warrior.png'
  },
  {
    name: 'Gremlin Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 6,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(3) + DEF(6) + HP(0) + MOV(2) + RNG(0)
    image: 'Gremlin Warrior.png'
  },
  {
    name: 'Gremlin Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 6,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(3) + DEF(6) + HP(1) + MOV(2) + RNG(0)
    image: 'Gremlin Warrior.png'
  },
  {
    name: 'Gremlin Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 6,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(3) + DEF(6) + HP(2) + MOV(2) + RNG(0)
    image: 'Gremlin Warrior.png'
  },
  {
    name: 'Gremlin Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 6,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(3) + DEF(6) + HP(0) + MOV(2) + RNG(2)
    image: 'Gremlin Warrior.png'
  },
  {
    name: 'Gremlin Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 6,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(3) + DEF(6) + HP(1) + MOV(2) + RNG(2)
    image: 'Gremlin Warrior.png'
  },
  {
    name: 'Gremlin Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 6,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(3) + DEF(6) + HP(2) + MOV(2) + RNG(2)
    image: 'Gremlin Warrior.png'
  },
  {
    name: 'Gremlin Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 6,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(3) + DEF(6) + HP(0) + MOV(4) + RNG(0)
    image: 'Gremlin Warrior.png'
  },
  {
    name: 'Gremlin Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 6,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(3) + DEF(6) + HP(1) + MOV(4) + RNG(0)
    image: 'Gremlin Warrior.png'
  },
  {
    name: 'Gremlin Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 6,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(3) + DEF(6) + HP(2) + MOV(4) + RNG(0)
    image: 'Gremlin Warrior.png'
  },
  // Name: Cyclops (ATK: 3, DEF: 7)
  {
    name: 'Cyclops',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 7,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(3) + DEF(7) + HP(0) + MOV(0) + RNG(0)
    image: 'Cyclops.png'
  },
  {
    name: 'Cyclops',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 7,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(3) + DEF(7) + HP(1) + MOV(0) + RNG(0)
    image: 'Cyclops.png'
  },
  {
    name: 'Cyclops',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 7,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(3) + DEF(7) + HP(2) + MOV(0) + RNG(0)
    image: 'Cyclops.png'
  },
  {
    name: 'Cyclops',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 7,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(3) + DEF(7) + HP(0) + MOV(0) + RNG(2)
    image: 'Cyclops.png'
  },
  {
    name: 'Cyclops',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 7,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(3) + DEF(7) + HP(1) + MOV(0) + RNG(2)
    image: 'Cyclops.png'
  },
  {
    name: 'Cyclops',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 7,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(3) + DEF(7) + HP(2) + MOV(0) + RNG(2)
    image: 'Cyclops.png'
  },
  {
    name: 'Cyclops',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 7,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(3) + DEF(7) + HP(0) + MOV(0) + RNG(4)
    image: 'Cyclops.png'
  },
  {
    name: 'Cyclops',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 7,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(3) + DEF(7) + HP(1) + MOV(0) + RNG(4)
    image: 'Cyclops.png'
  },
  {
    name: 'Cyclops',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 7,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(3) + DEF(7) + HP(2) + MOV(0) + RNG(4)
    image: 'Cyclops.png'
  },
  {
    name: 'Cyclops',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 7,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(3) + DEF(7) + HP(0) + MOV(2) + RNG(0)
    image: 'Cyclops.png'
  },
  {
    name: 'Cyclops',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 7,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(3) + DEF(7) + HP(1) + MOV(2) + RNG(0)
    image: 'Cyclops.png'
  },
  {
    name: 'Cyclops',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 7,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(3) + DEF(7) + HP(2) + MOV(2) + RNG(0)
    image: 'Cyclops.png'
  },
  {
    name: 'Cyclops',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 7,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(3) + DEF(7) + HP(0) + MOV(2) + RNG(2)
    image: 'Cyclops.png'
  },
  {
    name: 'Cyclops',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 7,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(3) + DEF(7) + HP(1) + MOV(2) + RNG(2)
    image: 'Cyclops.png'
  },
  {
    name: 'Cyclops',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 7,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(3) + DEF(7) + HP(2) + MOV(2) + RNG(2)
    image: 'Cyclops.png'
  },
  {
    name: 'Cyclops',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 7,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(3) + DEF(7) + HP(0) + MOV(4) + RNG(0)
    image: 'Cyclops.png'
  },
  {
    name: 'Cyclops',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 7,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(3) + DEF(7) + HP(1) + MOV(4) + RNG(0)
    image: 'Cyclops.png'
  },
  {
    name: 'Cyclops',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 7,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(3) + DEF(7) + HP(2) + MOV(4) + RNG(0)
    image: 'Cyclops.png'
  },
  // Name: Gremlin Thief (ATK: 3, DEF: 8)
  {
    name: 'Gremlin Thief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 8,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(3) + DEF(8) + HP(0) + MOV(0) + RNG(0)
    image: 'Gremlin Thief.png'
  },
  {
    name: 'Gremlin Thief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 8,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(3) + DEF(8) + HP(1) + MOV(0) + RNG(0)
    image: 'Gremlin Thief.png'
  },
  {
    name: 'Gremlin Thief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 8,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(3) + DEF(8) + HP(2) + MOV(0) + RNG(0)
    image: 'Gremlin Thief.png'
  },
  {
    name: 'Gremlin Thief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 8,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(3) + DEF(8) + HP(0) + MOV(0) + RNG(2)
    image: 'Gremlin Thief.png'
  },
  {
    name: 'Gremlin Thief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 8,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(3) + DEF(8) + HP(1) + MOV(0) + RNG(2)
    image: 'Gremlin Thief.png'
  },
  {
    name: 'Gremlin Thief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 8,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(3) + DEF(8) + HP(2) + MOV(0) + RNG(2)
    image: 'Gremlin Thief.png'
  },
  {
    name: 'Gremlin Thief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 8,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(3) + DEF(8) + HP(0) + MOV(0) + RNG(4)
    image: 'Gremlin Thief.png'
  },
  {
    name: 'Gremlin Thief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 8,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(3) + DEF(8) + HP(1) + MOV(0) + RNG(4)
    image: 'Gremlin Thief.png'
  },
  {
    name: 'Gremlin Thief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 8,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(3) + DEF(8) + HP(2) + MOV(0) + RNG(4)
    image: 'Gremlin Thief.png'
  },
  {
    name: 'Gremlin Thief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 8,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(3) + DEF(8) + HP(0) + MOV(2) + RNG(0)
    image: 'Gremlin Thief.png'
  },
  {
    name: 'Gremlin Thief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 8,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(3) + DEF(8) + HP(1) + MOV(2) + RNG(0)
    image: 'Gremlin Thief.png'
  },
  {
    name: 'Gremlin Thief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 8,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(3) + DEF(8) + HP(2) + MOV(2) + RNG(0)
    image: 'Gremlin Thief.png'
  },
  {
    name: 'Gremlin Thief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 8,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(3) + DEF(8) + HP(0) + MOV(2) + RNG(2)
    image: 'Gremlin Thief.png'
  },
  {
    name: 'Gremlin Thief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 8,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(3) + DEF(8) + HP(1) + MOV(2) + RNG(2)
    image: 'Gremlin Thief.png'
  },
  {
    name: 'Gremlin Thief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 8,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(3) + DEF(8) + HP(2) + MOV(2) + RNG(2)
    image: 'Gremlin Thief.png'
  },
  {
    name: 'Gremlin Thief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 8,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(3) + DEF(8) + HP(0) + MOV(4) + RNG(0)
    image: 'Gremlin Thief.png'
  },
  {
    name: 'Gremlin Thief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 8,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(3) + DEF(8) + HP(1) + MOV(4) + RNG(0)
    image: 'Gremlin Thief.png'
  },
  {
    name: 'Gremlin Thief',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 8,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(3) + DEF(8) + HP(2) + MOV(4) + RNG(0)
    image: 'Gremlin Thief.png'
  },
  // Name: Gremlin Mage (ATK: 3, DEF: 9)
  {
    name: 'Gremlin Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 9,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(3) + DEF(9) + HP(0) + MOV(0) + RNG(0)
    image: 'Gremlin Mage.png'
  },
  {
    name: 'Gremlin Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 9,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(3) + DEF(9) + HP(1) + MOV(0) + RNG(0)
    image: 'Gremlin Mage.png'
  },
  {
    name: 'Gremlin Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 9,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(3) + DEF(9) + HP(2) + MOV(0) + RNG(0)
    image: 'Gremlin Mage.png'
  },
  {
    name: 'Gremlin Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 9,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(3) + DEF(9) + HP(0) + MOV(0) + RNG(2)
    image: 'Gremlin Mage.png'
  },
  {
    name: 'Gremlin Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 9,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(3) + DEF(9) + HP(1) + MOV(0) + RNG(2)
    image: 'Gremlin Mage.png'
  },
  {
    name: 'Gremlin Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 9,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(3) + DEF(9) + HP(2) + MOV(0) + RNG(2)
    image: 'Gremlin Mage.png'
  },
  {
    name: 'Gremlin Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 9,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(3) + DEF(9) + HP(0) + MOV(0) + RNG(4)
    image: 'Gremlin Mage.png'
  },
  {
    name: 'Gremlin Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 9,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(3) + DEF(9) + HP(1) + MOV(0) + RNG(4)
    image: 'Gremlin Mage.png'
  },
  {
    name: 'Gremlin Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 9,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(3) + DEF(9) + HP(2) + MOV(0) + RNG(4)
    image: 'Gremlin Mage.png'
  },
  {
    name: 'Gremlin Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 9,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(3) + DEF(9) + HP(0) + MOV(2) + RNG(0)
    image: 'Gremlin Mage.png'
  },
  {
    name: 'Gremlin Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 9,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(3) + DEF(9) + HP(1) + MOV(2) + RNG(0)
    image: 'Gremlin Mage.png'
  },
  {
    name: 'Gremlin Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 9,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(3) + DEF(9) + HP(2) + MOV(2) + RNG(0)
    image: 'Gremlin Mage.png'
  },
  {
    name: 'Gremlin Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 9,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(3) + DEF(9) + HP(0) + MOV(2) + RNG(2)
    image: 'Gremlin Mage.png'
  },
  {
    name: 'Gremlin Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 9,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(3) + DEF(9) + HP(1) + MOV(2) + RNG(2)
    image: 'Gremlin Mage.png'
  },
  {
    name: 'Gremlin Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 9,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(3) + DEF(9) + HP(2) + MOV(2) + RNG(2)
    image: 'Gremlin Mage.png'
  },
  {
    name: 'Gremlin Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 9,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(3) + DEF(9) + HP(0) + MOV(4) + RNG(0)
    image: 'Gremlin Mage.png'
  },
  {
    name: 'Gremlin Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 9,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(3) + DEF(9) + HP(1) + MOV(4) + RNG(0)
    image: 'Gremlin Mage.png'
  },
  {
    name: 'Gremlin Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 3,
    def: 9,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(3) + DEF(9) + HP(2) + MOV(4) + RNG(0)
    image: 'Gremlin Mage.png'
  },
  // Name: Rat (ATK: 4, DEF: 0)
  {
    name: 'Rat',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 0,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 4, // ATK(4) + DEF(0) + HP(0) + MOV(0) + RNG(0)
    image: 'Rat.png'
  },
  {
    name: 'Rat',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 0,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(4) + DEF(0) + HP(1) + MOV(0) + RNG(0)
    image: 'Rat.png'
  },
  {
    name: 'Rat',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 0,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(4) + DEF(0) + HP(2) + MOV(0) + RNG(0)
    image: 'Rat.png'
  },
  {
    name: 'Rat',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 0,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(4) + DEF(0) + HP(0) + MOV(0) + RNG(2)
    image: 'Rat.png'
  },
  {
    name: 'Rat',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 0,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(4) + DEF(0) + HP(1) + MOV(0) + RNG(2)
    image: 'Rat.png'
  },
  {
    name: 'Rat',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 0,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(4) + DEF(0) + HP(2) + MOV(0) + RNG(2)
    image: 'Rat.png'
  },
  {
    name: 'Rat',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 0,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(4) + DEF(0) + HP(0) + MOV(0) + RNG(4)
    image: 'Rat.png'
  },
  {
    name: 'Rat',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 0,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(4) + DEF(0) + HP(1) + MOV(0) + RNG(4)
    image: 'Rat.png'
  },
  {
    name: 'Rat',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 0,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(4) + DEF(0) + HP(2) + MOV(0) + RNG(4)
    image: 'Rat.png'
  },
  {
    name: 'Rat',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 0,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(4) + DEF(0) + HP(0) + MOV(2) + RNG(0)
    image: 'Rat.png'
  },
  {
    name: 'Rat',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 0,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(4) + DEF(0) + HP(1) + MOV(2) + RNG(0)
    image: 'Rat.png'
  },
  {
    name: 'Rat',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 0,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(4) + DEF(0) + HP(2) + MOV(2) + RNG(0)
    image: 'Rat.png'
  },
  {
    name: 'Rat',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 0,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(4) + DEF(0) + HP(0) + MOV(2) + RNG(2)
    image: 'Rat.png'
  },
  {
    name: 'Rat',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 0,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(4) + DEF(0) + HP(1) + MOV(2) + RNG(2)
    image: 'Rat.png'
  },
  {
    name: 'Rat',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 0,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(4) + DEF(0) + HP(2) + MOV(2) + RNG(2)
    image: 'Rat.png'
  },
  {
    name: 'Rat',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 0,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(4) + DEF(0) + HP(0) + MOV(4) + RNG(0)
    image: 'Rat.png'
  },
  {
    name: 'Rat',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 0,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(4) + DEF(0) + HP(1) + MOV(4) + RNG(0)
    image: 'Rat.png'
  },
  {
    name: 'Rat',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 0,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(4) + DEF(0) + HP(2) + MOV(4) + RNG(0)
    image: 'Rat.png'
  },
  // Name: Minotaur (ATK: 4, DEF: 1)
  {
    name: 'Minotaur',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 1,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(4) + DEF(1) + HP(0) + MOV(0) + RNG(0)
    image: 'Minotaur.png'
  },
  {
    name: 'Minotaur',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 1,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(4) + DEF(1) + HP(1) + MOV(0) + RNG(0)
    image: 'Minotaur.png'
  },
  {
    name: 'Minotaur',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 1,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(4) + DEF(1) + HP(2) + MOV(0) + RNG(0)
    image: 'Minotaur.png'
  },
  {
    name: 'Minotaur',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 1,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(4) + DEF(1) + HP(0) + MOV(0) + RNG(2)
    image: 'Minotaur.png'
  },
  {
    name: 'Minotaur',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 1,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(4) + DEF(1) + HP(1) + MOV(0) + RNG(2)
    image: 'Minotaur.png'
  },
  {
    name: 'Minotaur',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 1,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(4) + DEF(1) + HP(2) + MOV(0) + RNG(2)
    image: 'Minotaur.png'
  },
  {
    name: 'Minotaur',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 1,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(4) + DEF(1) + HP(0) + MOV(0) + RNG(4)
    image: 'Minotaur.png'
  },
  {
    name: 'Minotaur',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 1,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(4) + DEF(1) + HP(1) + MOV(0) + RNG(4)
    image: 'Minotaur.png'
  },
  {
    name: 'Minotaur',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 1,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(4) + DEF(1) + HP(2) + MOV(0) + RNG(4)
    image: 'Minotaur.png'
  },
  {
    name: 'Minotaur',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 1,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(4) + DEF(1) + HP(0) + MOV(2) + RNG(0)
    image: 'Minotaur.png'
  },
  {
    name: 'Minotaur',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 1,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(4) + DEF(1) + HP(1) + MOV(2) + RNG(0)
    image: 'Minotaur.png'
  },
  {
    name: 'Minotaur',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 1,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(4) + DEF(1) + HP(2) + MOV(2) + RNG(0)
    image: 'Minotaur.png'
  },
  {
    name: 'Minotaur',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 1,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(4) + DEF(1) + HP(0) + MOV(2) + RNG(2)
    image: 'Minotaur.png'
  },
  {
    name: 'Minotaur',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 1,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(4) + DEF(1) + HP(1) + MOV(2) + RNG(2)
    image: 'Minotaur.png'
  },
  {
    name: 'Minotaur',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 1,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(4) + DEF(1) + HP(2) + MOV(2) + RNG(2)
    image: 'Minotaur.png'
  },
  {
    name: 'Minotaur',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 1,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(4) + DEF(1) + HP(0) + MOV(4) + RNG(0)
    image: 'Minotaur.png'
  },
  {
    name: 'Minotaur',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 1,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(4) + DEF(1) + HP(1) + MOV(4) + RNG(0)
    image: 'Minotaur.png'
  },
  {
    name: 'Minotaur',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 1,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(4) + DEF(1) + HP(2) + MOV(4) + RNG(0)
    image: 'Minotaur.png'
  },
  // Name: Little Flame (ATK: 4, DEF: 2)
  {
    name: 'Little Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 2,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(4) + DEF(2) + HP(0) + MOV(0) + RNG(0)
    image: 'Little Flame.png'
  },
  {
    name: 'Little Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 2,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(4) + DEF(2) + HP(1) + MOV(0) + RNG(0)
    image: 'Little Flame.png'
  },
  {
    name: 'Little Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 2,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(4) + DEF(2) + HP(2) + MOV(0) + RNG(0)
    image: 'Little Flame.png'
  },
  {
    name: 'Little Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 2,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(4) + DEF(2) + HP(0) + MOV(0) + RNG(2)
    image: 'Little Flame.png'
  },
  {
    name: 'Little Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 2,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(4) + DEF(2) + HP(1) + MOV(0) + RNG(2)
    image: 'Little Flame.png'
  },
  {
    name: 'Little Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 2,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(4) + DEF(2) + HP(2) + MOV(0) + RNG(2)
    image: 'Little Flame.png'
  },
  {
    name: 'Little Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 2,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(4) + DEF(2) + HP(0) + MOV(0) + RNG(4)
    image: 'Little Flame.png'
  },
  {
    name: 'Little Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 2,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(4) + DEF(2) + HP(1) + MOV(0) + RNG(4)
    image: 'Little Flame.png'
  },
  {
    name: 'Little Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 2,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(4) + DEF(2) + HP(2) + MOV(0) + RNG(4)
    image: 'Little Flame.png'
  },
  {
    name: 'Little Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 2,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(4) + DEF(2) + HP(0) + MOV(2) + RNG(0)
    image: 'Little Flame.png'
  },
  {
    name: 'Little Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 2,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(4) + DEF(2) + HP(1) + MOV(2) + RNG(0)
    image: 'Little Flame.png'
  },
  {
    name: 'Little Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 2,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(4) + DEF(2) + HP(2) + MOV(2) + RNG(0)
    image: 'Little Flame.png'
  },
  {
    name: 'Little Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 2,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(4) + DEF(2) + HP(0) + MOV(2) + RNG(2)
    image: 'Little Flame.png'
  },
  {
    name: 'Little Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 2,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(4) + DEF(2) + HP(1) + MOV(2) + RNG(2)
    image: 'Little Flame.png'
  },
  {
    name: 'Little Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 2,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(4) + DEF(2) + HP(2) + MOV(2) + RNG(2)
    image: 'Little Flame.png'
  },
  {
    name: 'Little Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 2,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(4) + DEF(2) + HP(0) + MOV(4) + RNG(0)
    image: 'Little Flame.png'
  },
  {
    name: 'Little Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 2,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(4) + DEF(2) + HP(1) + MOV(4) + RNG(0)
    image: 'Little Flame.png'
  },
  {
    name: 'Little Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 2,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(4) + DEF(2) + HP(2) + MOV(4) + RNG(0)
    image: 'Little Flame.png'
  },
  // Name: Samurai (ATK: 4, DEF: 3)
  {
    name: 'Samurai',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 3,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(4) + DEF(3) + HP(0) + MOV(0) + RNG(0)
    image: 'Samurai.png'
  },
  {
    name: 'Samurai',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 3,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(4) + DEF(3) + HP(1) + MOV(0) + RNG(0)
    image: 'Samurai.png'
  },
  {
    name: 'Samurai',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 3,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(4) + DEF(3) + HP(2) + MOV(0) + RNG(0)
    image: 'Samurai.png'
  },
  {
    name: 'Samurai',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 3,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(4) + DEF(3) + HP(0) + MOV(0) + RNG(2)
    image: 'Samurai.png'
  },
  {
    name: 'Samurai',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 3,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(4) + DEF(3) + HP(1) + MOV(0) + RNG(2)
    image: 'Samurai.png'
  },
  {
    name: 'Samurai',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 3,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(4) + DEF(3) + HP(2) + MOV(0) + RNG(2)
    image: 'Samurai.png'
  },
  {
    name: 'Samurai',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 3,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(4) + DEF(3) + HP(0) + MOV(0) + RNG(4)
    image: 'Samurai.png'
  },
  {
    name: 'Samurai',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 3,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(4) + DEF(3) + HP(1) + MOV(0) + RNG(4)
    image: 'Samurai.png'
  },
  {
    name: 'Samurai',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 3,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(4) + DEF(3) + HP(2) + MOV(0) + RNG(4)
    image: 'Samurai.png'
  },
  {
    name: 'Samurai',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 3,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(4) + DEF(3) + HP(0) + MOV(2) + RNG(0)
    image: 'Samurai.png'
  },
  {
    name: 'Samurai',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 3,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(4) + DEF(3) + HP(1) + MOV(2) + RNG(0)
    image: 'Samurai.png'
  },
  {
    name: 'Samurai',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 3,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(4) + DEF(3) + HP(2) + MOV(2) + RNG(0)
    image: 'Samurai.png'
  },
  {
    name: 'Samurai',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 3,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(4) + DEF(3) + HP(0) + MOV(2) + RNG(2)
    image: 'Samurai.png'
  },
  {
    name: 'Samurai',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 3,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(4) + DEF(3) + HP(1) + MOV(2) + RNG(2)
    image: 'Samurai.png'
  },
  {
    name: 'Samurai',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 3,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(4) + DEF(3) + HP(2) + MOV(2) + RNG(2)
    image: 'Samurai.png'
  },
  {
    name: 'Samurai',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 3,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(4) + DEF(3) + HP(0) + MOV(4) + RNG(0)
    image: 'Samurai.png'
  },
  {
    name: 'Samurai',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 3,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(4) + DEF(3) + HP(1) + MOV(4) + RNG(0)
    image: 'Samurai.png'
  },
  {
    name: 'Samurai',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 3,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(4) + DEF(3) + HP(2) + MOV(4) + RNG(0)
    image: 'Samurai.png'
  },
  // Name: Berserker (ATK: 4, DEF: 4)
  {
    name: 'Berserker',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 4,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(4) + DEF(4) + HP(0) + MOV(0) + RNG(0)
    image: 'Berserker.png'
  },
  {
    name: 'Berserker',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 4,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(4) + DEF(4) + HP(1) + MOV(0) + RNG(0)
    image: 'Berserker.png'
  },
  {
    name: 'Berserker',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 4,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(4) + DEF(4) + HP(2) + MOV(0) + RNG(0)
    image: 'Berserker.png'
  },
  {
    name: 'Berserker',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 4,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(4) + DEF(4) + HP(0) + MOV(0) + RNG(2)
    image: 'Berserker.png'
  },
  {
    name: 'Berserker',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 4,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(4) + DEF(4) + HP(1) + MOV(0) + RNG(2)
    image: 'Berserker.png'
  },
  {
    name: 'Berserker',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 4,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(4) + DEF(4) + HP(2) + MOV(0) + RNG(2)
    image: 'Berserker.png'
  },
  {
    name: 'Berserker',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 4,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(4) + DEF(4) + HP(0) + MOV(0) + RNG(4)
    image: 'Berserker.png'
  },
  {
    name: 'Berserker',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 4,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(4) + DEF(4) + HP(1) + MOV(0) + RNG(4)
    image: 'Berserker.png'
  },
  {
    name: 'Berserker',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 4,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(4) + DEF(4) + HP(2) + MOV(0) + RNG(4)
    image: 'Berserker.png'
  },
  {
    name: 'Berserker',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 4,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(4) + DEF(4) + HP(0) + MOV(2) + RNG(0)
    image: 'Berserker.png'
  },
  {
    name: 'Berserker',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 4,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(4) + DEF(4) + HP(1) + MOV(2) + RNG(0)
    image: 'Berserker.png'
  },
  {
    name: 'Berserker',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 4,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(4) + DEF(4) + HP(2) + MOV(2) + RNG(0)
    image: 'Berserker.png'
  },
  {
    name: 'Berserker',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 4,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(4) + DEF(4) + HP(0) + MOV(2) + RNG(2)
    image: 'Berserker.png'
  },
  {
    name: 'Berserker',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 4,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(4) + DEF(4) + HP(1) + MOV(2) + RNG(2)
    image: 'Berserker.png'
  },
  {
    name: 'Berserker',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 4,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(4) + DEF(4) + HP(2) + MOV(2) + RNG(2)
    image: 'Berserker.png'
  },
  {
    name: 'Berserker',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 4,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(4) + DEF(4) + HP(0) + MOV(4) + RNG(0)
    image: 'Berserker.png'
  },
  {
    name: 'Berserker',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 4,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(4) + DEF(4) + HP(1) + MOV(4) + RNG(0)
    image: 'Berserker.png'
  },
  {
    name: 'Berserker',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 4,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(4) + DEF(4) + HP(2) + MOV(4) + RNG(0)
    image: 'Berserker.png'
  },
  // Name: Champion (ATK: 4, DEF: 5)
  {
    name: 'Champion',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 5,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(4) + DEF(5) + HP(0) + MOV(0) + RNG(0)
    image: 'Champion.png'
  },
  {
    name: 'Champion',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 5,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(4) + DEF(5) + HP(1) + MOV(0) + RNG(0)
    image: 'Champion.png'
  },
  {
    name: 'Champion',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 5,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(4) + DEF(5) + HP(2) + MOV(0) + RNG(0)
    image: 'Champion.png'
  },
  {
    name: 'Champion',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 5,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(4) + DEF(5) + HP(0) + MOV(0) + RNG(2)
    image: 'Champion.png'
  },
  {
    name: 'Champion',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 5,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(4) + DEF(5) + HP(1) + MOV(0) + RNG(2)
    image: 'Champion.png'
  },
  {
    name: 'Champion',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 5,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(4) + DEF(5) + HP(2) + MOV(0) + RNG(2)
    image: 'Champion.png'
  },
  {
    name: 'Champion',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 5,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(4) + DEF(5) + HP(0) + MOV(0) + RNG(4)
    image: 'Champion.png'
  },
  {
    name: 'Champion',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 5,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(4) + DEF(5) + HP(1) + MOV(0) + RNG(4)
    image: 'Champion.png'
  },
  {
    name: 'Champion',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 5,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(4) + DEF(5) + HP(2) + MOV(0) + RNG(4)
    image: 'Champion.png'
  },
  {
    name: 'Champion',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 5,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(4) + DEF(5) + HP(0) + MOV(2) + RNG(0)
    image: 'Champion.png'
  },
  {
    name: 'Champion',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 5,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(4) + DEF(5) + HP(1) + MOV(2) + RNG(0)
    image: 'Champion.png'
  },
  {
    name: 'Champion',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 5,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(4) + DEF(5) + HP(2) + MOV(2) + RNG(0)
    image: 'Champion.png'
  },
  {
    name: 'Champion',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 5,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(4) + DEF(5) + HP(0) + MOV(2) + RNG(2)
    image: 'Champion.png'
  },
  {
    name: 'Champion',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 5,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(4) + DEF(5) + HP(1) + MOV(2) + RNG(2)
    image: 'Champion.png'
  },
  {
    name: 'Champion',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 5,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(4) + DEF(5) + HP(2) + MOV(2) + RNG(2)
    image: 'Champion.png'
  },
  {
    name: 'Champion',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 5,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(4) + DEF(5) + HP(0) + MOV(4) + RNG(0)
    image: 'Champion.png'
  },
  {
    name: 'Champion',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 5,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(4) + DEF(5) + HP(1) + MOV(4) + RNG(0)
    image: 'Champion.png'
  },
  {
    name: 'Champion',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 5,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(4) + DEF(5) + HP(2) + MOV(4) + RNG(0)
    image: 'Champion.png'
  },
  // Name: Hag (ATK: 4, DEF: 6)
  {
    name: 'Hag',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 6,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(4) + DEF(6) + HP(0) + MOV(0) + RNG(0)
    image: 'Hag.png'
  },
  {
    name: 'Hag',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 6,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(4) + DEF(6) + HP(1) + MOV(0) + RNG(0)
    image: 'Hag.png'
  },
  {
    name: 'Hag',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 6,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(4) + DEF(6) + HP(2) + MOV(0) + RNG(0)
    image: 'Hag.png'
  },
  {
    name: 'Hag',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 6,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(4) + DEF(6) + HP(0) + MOV(0) + RNG(2)
    image: 'Hag.png'
  },
  {
    name: 'Hag',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 6,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(4) + DEF(6) + HP(1) + MOV(0) + RNG(2)
    image: 'Hag.png'
  },
  {
    name: 'Hag',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 6,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(4) + DEF(6) + HP(2) + MOV(0) + RNG(2)
    image: 'Hag.png'
  },
  {
    name: 'Hag',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 6,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(4) + DEF(6) + HP(0) + MOV(0) + RNG(4)
    image: 'Hag.png'
  },
  {
    name: 'Hag',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 6,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(4) + DEF(6) + HP(1) + MOV(0) + RNG(4)
    image: 'Hag.png'
  },
  {
    name: 'Hag',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 6,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(4) + DEF(6) + HP(2) + MOV(0) + RNG(4)
    image: 'Hag.png'
  },
  {
    name: 'Hag',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 6,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(4) + DEF(6) + HP(0) + MOV(2) + RNG(0)
    image: 'Hag.png'
  },
  {
    name: 'Hag',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 6,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(4) + DEF(6) + HP(1) + MOV(2) + RNG(0)
    image: 'Hag.png'
  },
  {
    name: 'Hag',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 6,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(4) + DEF(6) + HP(2) + MOV(2) + RNG(0)
    image: 'Hag.png'
  },
  {
    name: 'Hag',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 6,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(4) + DEF(6) + HP(0) + MOV(2) + RNG(2)
    image: 'Hag.png'
  },
  {
    name: 'Hag',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 6,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(4) + DEF(6) + HP(1) + MOV(2) + RNG(2)
    image: 'Hag.png'
  },
  {
    name: 'Hag',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 6,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(4) + DEF(6) + HP(2) + MOV(2) + RNG(2)
    image: 'Hag.png'
  },
  {
    name: 'Hag',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 6,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(4) + DEF(6) + HP(0) + MOV(4) + RNG(0)
    image: 'Hag.png'
  },
  {
    name: 'Hag',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 6,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(4) + DEF(6) + HP(1) + MOV(4) + RNG(0)
    image: 'Hag.png'
  },
  {
    name: 'Hag',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 6,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(4) + DEF(6) + HP(2) + MOV(4) + RNG(0)
    image: 'Hag.png'
  },
  // Name: Fallen Knight (ATK: 4, DEF: 7)
  {
    name: 'Fallen Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 7,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(4) + DEF(7) + HP(0) + MOV(0) + RNG(0)
    image: 'Fallen Knight.png'
  },
  {
    name: 'Fallen Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 7,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(4) + DEF(7) + HP(1) + MOV(0) + RNG(0)
    image: 'Fallen Knight.png'
  },
  {
    name: 'Fallen Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 7,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(4) + DEF(7) + HP(2) + MOV(0) + RNG(0)
    image: 'Fallen Knight.png'
  },
  {
    name: 'Fallen Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 7,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(4) + DEF(7) + HP(0) + MOV(0) + RNG(2)
    image: 'Fallen Knight.png'
  },
  {
    name: 'Fallen Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 7,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(4) + DEF(7) + HP(1) + MOV(0) + RNG(2)
    image: 'Fallen Knight.png'
  },
  {
    name: 'Fallen Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 7,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(4) + DEF(7) + HP(2) + MOV(0) + RNG(2)
    image: 'Fallen Knight.png'
  },
  {
    name: 'Fallen Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 7,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(4) + DEF(7) + HP(0) + MOV(0) + RNG(4)
    image: 'Fallen Knight.png'
  },
  {
    name: 'Fallen Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 7,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(4) + DEF(7) + HP(1) + MOV(0) + RNG(4)
    image: 'Fallen Knight.png'
  },
  {
    name: 'Fallen Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 7,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(4) + DEF(7) + HP(2) + MOV(0) + RNG(4)
    image: 'Fallen Knight.png'
  },
  {
    name: 'Fallen Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 7,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(4) + DEF(7) + HP(0) + MOV(2) + RNG(0)
    image: 'Fallen Knight.png'
  },
  {
    name: 'Fallen Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 7,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(4) + DEF(7) + HP(1) + MOV(2) + RNG(0)
    image: 'Fallen Knight.png'
  },
  {
    name: 'Fallen Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 7,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(4) + DEF(7) + HP(2) + MOV(2) + RNG(0)
    image: 'Fallen Knight.png'
  },
  {
    name: 'Fallen Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 7,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(4) + DEF(7) + HP(0) + MOV(2) + RNG(2)
    image: 'Fallen Knight.png'
  },
  {
    name: 'Fallen Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 7,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(4) + DEF(7) + HP(1) + MOV(2) + RNG(2)
    image: 'Fallen Knight.png'
  },
  {
    name: 'Fallen Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 7,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(4) + DEF(7) + HP(2) + MOV(2) + RNG(2)
    image: 'Fallen Knight.png'
  },
  {
    name: 'Fallen Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 7,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(4) + DEF(7) + HP(0) + MOV(4) + RNG(0)
    image: 'Fallen Knight.png'
  },
  {
    name: 'Fallen Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 7,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(4) + DEF(7) + HP(1) + MOV(4) + RNG(0)
    image: 'Fallen Knight.png'
  },
  {
    name: 'Fallen Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 7,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(4) + DEF(7) + HP(2) + MOV(4) + RNG(0)
    image: 'Fallen Knight.png'
  },
  // Name: Butcher (ATK: 4, DEF: 8)
  {
    name: 'Butcher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 8,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(4) + DEF(8) + HP(0) + MOV(0) + RNG(0)
    image: 'Butcher.png'
  },
  {
    name: 'Butcher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 8,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(4) + DEF(8) + HP(1) + MOV(0) + RNG(0)
    image: 'Butcher.png'
  },
  {
    name: 'Butcher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 8,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(4) + DEF(8) + HP(2) + MOV(0) + RNG(0)
    image: 'Butcher.png'
  },
  {
    name: 'Butcher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 8,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(4) + DEF(8) + HP(0) + MOV(0) + RNG(2)
    image: 'Butcher.png'
  },
  {
    name: 'Butcher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 8,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(4) + DEF(8) + HP(1) + MOV(0) + RNG(2)
    image: 'Butcher.png'
  },
  {
    name: 'Butcher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 8,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(4) + DEF(8) + HP(2) + MOV(0) + RNG(2)
    image: 'Butcher.png'
  },
  {
    name: 'Butcher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 8,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(4) + DEF(8) + HP(0) + MOV(0) + RNG(4)
    image: 'Butcher.png'
  },
  {
    name: 'Butcher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 8,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(4) + DEF(8) + HP(1) + MOV(0) + RNG(4)
    image: 'Butcher.png'
  },
  {
    name: 'Butcher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 8,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(4) + DEF(8) + HP(2) + MOV(0) + RNG(4)
    image: 'Butcher.png'
  },
  {
    name: 'Butcher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 8,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(4) + DEF(8) + HP(0) + MOV(2) + RNG(0)
    image: 'Butcher.png'
  },
  {
    name: 'Butcher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 8,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(4) + DEF(8) + HP(1) + MOV(2) + RNG(0)
    image: 'Butcher.png'
  },
  {
    name: 'Butcher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 8,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(4) + DEF(8) + HP(2) + MOV(2) + RNG(0)
    image: 'Butcher.png'
  },
  {
    name: 'Butcher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 8,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(4) + DEF(8) + HP(0) + MOV(2) + RNG(2)
    image: 'Butcher.png'
  },
  {
    name: 'Butcher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 8,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(4) + DEF(8) + HP(1) + MOV(2) + RNG(2)
    image: 'Butcher.png'
  },
  {
    name: 'Butcher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 8,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(4) + DEF(8) + HP(2) + MOV(2) + RNG(2)
    image: 'Butcher.png'
  },
  {
    name: 'Butcher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 8,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(4) + DEF(8) + HP(0) + MOV(4) + RNG(0)
    image: 'Butcher.png'
  },
  {
    name: 'Butcher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 8,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(4) + DEF(8) + HP(1) + MOV(4) + RNG(0)
    image: 'Butcher.png'
  },
  {
    name: 'Butcher',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 8,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(4) + DEF(8) + HP(2) + MOV(4) + RNG(0)
    image: 'Butcher.png'
  },
  // Name: Golem (ATK: 4, DEF: 9)
  {
    name: 'Golem',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 9,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(4) + DEF(9) + HP(0) + MOV(0) + RNG(0)
    image: 'Golem.png'
  },
  {
    name: 'Golem',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 9,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(4) + DEF(9) + HP(1) + MOV(0) + RNG(0)
    image: 'Golem.png'
  },
  {
    name: 'Golem',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 9,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(4) + DEF(9) + HP(2) + MOV(0) + RNG(0)
    image: 'Golem.png'
  },
  {
    name: 'Golem',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 9,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(4) + DEF(9) + HP(0) + MOV(0) + RNG(2)
    image: 'Golem.png'
  },
  {
    name: 'Golem',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 9,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(4) + DEF(9) + HP(1) + MOV(0) + RNG(2)
    image: 'Golem.png'
  },
  {
    name: 'Golem',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 9,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(4) + DEF(9) + HP(2) + MOV(0) + RNG(2)
    image: 'Golem.png'
  },
  {
    name: 'Golem',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 9,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(4) + DEF(9) + HP(0) + MOV(0) + RNG(4)
    image: 'Golem.png'
  },
  {
    name: 'Golem',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 9,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(4) + DEF(9) + HP(1) + MOV(0) + RNG(4)
    image: 'Golem.png'
  },
  {
    name: 'Golem',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 9,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(4) + DEF(9) + HP(2) + MOV(0) + RNG(4)
    image: 'Golem.png'
  },
  {
    name: 'Golem',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 9,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(4) + DEF(9) + HP(0) + MOV(2) + RNG(0)
    image: 'Golem.png'
  },
  {
    name: 'Golem',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 9,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(4) + DEF(9) + HP(1) + MOV(2) + RNG(0)
    image: 'Golem.png'
  },
  {
    name: 'Golem',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 9,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(4) + DEF(9) + HP(2) + MOV(2) + RNG(0)
    image: 'Golem.png'
  },
  {
    name: 'Golem',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 9,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(4) + DEF(9) + HP(0) + MOV(2) + RNG(2)
    image: 'Golem.png'
  },
  {
    name: 'Golem',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 9,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(4) + DEF(9) + HP(1) + MOV(2) + RNG(2)
    image: 'Golem.png'
  },
  {
    name: 'Golem',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 9,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(4) + DEF(9) + HP(2) + MOV(2) + RNG(2)
    image: 'Golem.png'
  },
  {
    name: 'Golem',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 9,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(4) + DEF(9) + HP(0) + MOV(4) + RNG(0)
    image: 'Golem.png'
  },
  {
    name: 'Golem',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 9,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(4) + DEF(9) + HP(1) + MOV(4) + RNG(0)
    image: 'Golem.png'
  },
  {
    name: 'Golem',
    type: 'minion',
    subType: 'minionbasic',
    atk: 4,
    def: 9,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(4) + DEF(9) + HP(2) + MOV(4) + RNG(0)
    image: 'Golem.png'
  },
  // Name: Water Dragon (ATK: 5, DEF: 0)
  {
    name: 'Water Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 0,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 5, // ATK(5) + DEF(0) + HP(0) + MOV(0) + RNG(0)
    image: 'Water Dragon.png'
  },
  {
    name: 'Water Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 0,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(5) + DEF(0) + HP(1) + MOV(0) + RNG(0)
    image: 'Water Dragon.png'
  },
  {
    name: 'Water Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 0,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(5) + DEF(0) + HP(2) + MOV(0) + RNG(0)
    image: 'Water Dragon.png'
  },
  {
    name: 'Water Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 0,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(5) + DEF(0) + HP(0) + MOV(0) + RNG(2)
    image: 'Water Dragon.png'
  },
  {
    name: 'Water Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 0,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(5) + DEF(0) + HP(1) + MOV(0) + RNG(2)
    image: 'Water Dragon.png'
  },
  {
    name: 'Water Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 0,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(5) + DEF(0) + HP(2) + MOV(0) + RNG(2)
    image: 'Water Dragon.png'
  },
  {
    name: 'Water Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 0,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(5) + DEF(0) + HP(0) + MOV(0) + RNG(4)
    image: 'Water Dragon.png'
  },
  {
    name: 'Water Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 0,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(5) + DEF(0) + HP(1) + MOV(0) + RNG(4)
    image: 'Water Dragon.png'
  },
  {
    name: 'Water Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 0,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(5) + DEF(0) + HP(2) + MOV(0) + RNG(4)
    image: 'Water Dragon.png'
  },
  {
    name: 'Water Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 0,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(5) + DEF(0) + HP(0) + MOV(2) + RNG(0)
    image: 'Water Dragon.png'
  },
  {
    name: 'Water Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 0,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(5) + DEF(0) + HP(1) + MOV(2) + RNG(0)
    image: 'Water Dragon.png'
  },
  {
    name: 'Water Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 0,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(5) + DEF(0) + HP(2) + MOV(2) + RNG(0)
    image: 'Water Dragon.png'
  },
  {
    name: 'Water Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 0,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(5) + DEF(0) + HP(0) + MOV(2) + RNG(2)
    image: 'Water Dragon.png'
  },
  {
    name: 'Water Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 0,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(5) + DEF(0) + HP(1) + MOV(2) + RNG(2)
    image: 'Water Dragon.png'
  },
  {
    name: 'Water Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 0,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(5) + DEF(0) + HP(2) + MOV(2) + RNG(2)
    image: 'Water Dragon.png'
  },
  {
    name: 'Water Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 0,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(5) + DEF(0) + HP(0) + MOV(4) + RNG(0)
    image: 'Water Dragon.png'
  },
  {
    name: 'Water Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 0,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(5) + DEF(0) + HP(1) + MOV(4) + RNG(0)
    image: 'Water Dragon.png'
  },
  {
    name: 'Water Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 0,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(5) + DEF(0) + HP(2) + MOV(4) + RNG(0)
    image: 'Water Dragon.png'
  },
  // Name: Ice Wisp (ATK: 5, DEF: 1)
  {
    name: 'Ice Wisp',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 1,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(5) + DEF(1) + HP(0) + MOV(0) + RNG(0)
    image: 'Ice Wisp.png'
  },
  {
    name: 'Ice Wisp',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 1,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(5) + DEF(1) + HP(1) + MOV(0) + RNG(0)
    image: 'Ice Wisp.png'
  },
  {
    name: 'Ice Wisp',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 1,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(5) + DEF(1) + HP(2) + MOV(0) + RNG(0)
    image: 'Ice Wisp.png'
  },
  {
    name: 'Ice Wisp',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 1,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(5) + DEF(1) + HP(0) + MOV(0) + RNG(2)
    image: 'Ice Wisp.png'
  },
  {
    name: 'Ice Wisp',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 1,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(5) + DEF(1) + HP(1) + MOV(0) + RNG(2)
    image: 'Ice Wisp.png'
  },
  {
    name: 'Ice Wisp',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 1,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(5) + DEF(1) + HP(2) + MOV(0) + RNG(2)
    image: 'Ice Wisp.png'
  },
  {
    name: 'Ice Wisp',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 1,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(5) + DEF(1) + HP(0) + MOV(0) + RNG(4)
    image: 'Ice Wisp.png'
  },
  {
    name: 'Ice Wisp',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 1,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(5) + DEF(1) + HP(1) + MOV(0) + RNG(4)
    image: 'Ice Wisp.png'
  },
  {
    name: 'Ice Wisp',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 1,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(5) + DEF(1) + HP(2) + MOV(0) + RNG(4)
    image: 'Ice Wisp.png'
  },
  {
    name: 'Ice Wisp',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 1,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(5) + DEF(1) + HP(0) + MOV(2) + RNG(0)
    image: 'Ice Wisp.png'
  },
  {
    name: 'Ice Wisp',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 1,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(5) + DEF(1) + HP(1) + MOV(2) + RNG(0)
    image: 'Ice Wisp.png'
  },
  {
    name: 'Ice Wisp',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 1,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(5) + DEF(1) + HP(2) + MOV(2) + RNG(0)
    image: 'Ice Wisp.png'
  },
  {
    name: 'Ice Wisp',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 1,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(5) + DEF(1) + HP(0) + MOV(2) + RNG(2)
    image: 'Ice Wisp.png'
  },
  {
    name: 'Ice Wisp',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 1,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(5) + DEF(1) + HP(1) + MOV(2) + RNG(2)
    image: 'Ice Wisp.png'
  },
  {
    name: 'Ice Wisp',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 1,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(5) + DEF(1) + HP(2) + MOV(2) + RNG(2)
    image: 'Ice Wisp.png'
  },
  {
    name: 'Ice Wisp',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 1,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(5) + DEF(1) + HP(0) + MOV(4) + RNG(0)
    image: 'Ice Wisp.png'
  },
  {
    name: 'Ice Wisp',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 1,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(5) + DEF(1) + HP(1) + MOV(4) + RNG(0)
    image: 'Ice Wisp.png'
  },
  {
    name: 'Ice Wisp',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 1,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(5) + DEF(1) + HP(2) + MOV(4) + RNG(0)
    image: 'Ice Wisp.png'
  },
  // Name: Wizard (ATK: 5, DEF: 2)
  {
    name: 'Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 2,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(5) + DEF(2) + HP(0) + MOV(0) + RNG(0)
    image: 'Wizard.png'
  },
  {
    name: 'Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 2,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(5) + DEF(2) + HP(1) + MOV(0) + RNG(0)
    image: 'Wizard.png'
  },
  {
    name: 'Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 2,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(5) + DEF(2) + HP(2) + MOV(0) + RNG(0)
    image: 'Wizard.png'
  },
  {
    name: 'Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 2,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(5) + DEF(2) + HP(0) + MOV(0) + RNG(2)
    image: 'Wizard.png'
  },
  {
    name: 'Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 2,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(5) + DEF(2) + HP(1) + MOV(0) + RNG(2)
    image: 'Wizard.png'
  },
  {
    name: 'Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 2,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(5) + DEF(2) + HP(2) + MOV(0) + RNG(2)
    image: 'Wizard.png'
  },
  {
    name: 'Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 2,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(5) + DEF(2) + HP(0) + MOV(0) + RNG(4)
    image: 'Wizard.png'
  },
  {
    name: 'Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 2,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(5) + DEF(2) + HP(1) + MOV(0) + RNG(4)
    image: 'Wizard.png'
  },
  {
    name: 'Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 2,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(5) + DEF(2) + HP(2) + MOV(0) + RNG(4)
    image: 'Wizard.png'
  },
  {
    name: 'Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 2,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(5) + DEF(2) + HP(0) + MOV(2) + RNG(0)
    image: 'Wizard.png'
  },
  {
    name: 'Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 2,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(5) + DEF(2) + HP(1) + MOV(2) + RNG(0)
    image: 'Wizard.png'
  },
  {
    name: 'Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 2,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(5) + DEF(2) + HP(2) + MOV(2) + RNG(0)
    image: 'Wizard.png'
  },
  {
    name: 'Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 2,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(5) + DEF(2) + HP(0) + MOV(2) + RNG(2)
    image: 'Wizard.png'
  },
  {
    name: 'Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 2,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(5) + DEF(2) + HP(1) + MOV(2) + RNG(2)
    image: 'Wizard.png'
  },
  {
    name: 'Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 2,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(5) + DEF(2) + HP(2) + MOV(2) + RNG(2)
    image: 'Wizard.png'
  },
  {
    name: 'Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 2,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(5) + DEF(2) + HP(0) + MOV(4) + RNG(0)
    image: 'Wizard.png'
  },
  {
    name: 'Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 2,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(5) + DEF(2) + HP(1) + MOV(4) + RNG(0)
    image: 'Wizard.png'
  },
  {
    name: 'Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 2,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(5) + DEF(2) + HP(2) + MOV(4) + RNG(0)
    image: 'Wizard.png'
  },
  // Name: Elephant (ATK: 5, DEF: 3)
  {
    name: 'Elephant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 3,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(5) + DEF(3) + HP(0) + MOV(0) + RNG(0)
    image: 'Elephant.png'
  },
  {
    name: 'Elephant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 3,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(5) + DEF(3) + HP(1) + MOV(0) + RNG(0)
    image: 'Elephant.png'
  },
  {
    name: 'Elephant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 3,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(5) + DEF(3) + HP(2) + MOV(0) + RNG(0)
    image: 'Elephant.png'
  },
  {
    name: 'Elephant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 3,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(5) + DEF(3) + HP(0) + MOV(0) + RNG(2)
    image: 'Elephant.png'
  },
  {
    name: 'Elephant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 3,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(5) + DEF(3) + HP(1) + MOV(0) + RNG(2)
    image: 'Elephant.png'
  },
  {
    name: 'Elephant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 3,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(5) + DEF(3) + HP(2) + MOV(0) + RNG(2)
    image: 'Elephant.png'
  },
  {
    name: 'Elephant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 3,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(5) + DEF(3) + HP(0) + MOV(0) + RNG(4)
    image: 'Elephant.png'
  },
  {
    name: 'Elephant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 3,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(5) + DEF(3) + HP(1) + MOV(0) + RNG(4)
    image: 'Elephant.png'
  },
  {
    name: 'Elephant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 3,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(5) + DEF(3) + HP(2) + MOV(0) + RNG(4)
    image: 'Elephant.png'
  },
  {
    name: 'Elephant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 3,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(5) + DEF(3) + HP(0) + MOV(2) + RNG(0)
    image: 'Elephant.png'
  },
  {
    name: 'Elephant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 3,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(5) + DEF(3) + HP(1) + MOV(2) + RNG(0)
    image: 'Elephant.png'
  },
  {
    name: 'Elephant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 3,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(5) + DEF(3) + HP(2) + MOV(2) + RNG(0)
    image: 'Elephant.png'
  },
  {
    name: 'Elephant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 3,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(5) + DEF(3) + HP(0) + MOV(2) + RNG(2)
    image: 'Elephant.png'
  },
  {
    name: 'Elephant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 3,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(5) + DEF(3) + HP(1) + MOV(2) + RNG(2)
    image: 'Elephant.png'
  },
  {
    name: 'Elephant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 3,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(5) + DEF(3) + HP(2) + MOV(2) + RNG(2)
    image: 'Elephant.png'
  },
  {
    name: 'Elephant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 3,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(5) + DEF(3) + HP(0) + MOV(4) + RNG(0)
    image: 'Elephant.png'
  },
  {
    name: 'Elephant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 3,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(5) + DEF(3) + HP(1) + MOV(4) + RNG(0)
    image: 'Elephant.png'
  },
  {
    name: 'Elephant',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 3,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(5) + DEF(3) + HP(2) + MOV(4) + RNG(0)
    image: 'Elephant.png'
  },
  // Name: Genie (ATK: 5, DEF: 4)
  {
    name: 'Genie',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 4,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(5) + DEF(4) + HP(0) + MOV(0) + RNG(0)
    image: 'Genie.png'
  },
  {
    name: 'Genie',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 4,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(5) + DEF(4) + HP(1) + MOV(0) + RNG(0)
    image: 'Genie.png'
  },
  {
    name: 'Genie',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 4,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(5) + DEF(4) + HP(2) + MOV(0) + RNG(0)
    image: 'Genie.png'
  },
  {
    name: 'Genie',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 4,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(5) + DEF(4) + HP(0) + MOV(0) + RNG(2)
    image: 'Genie.png'
  },
  {
    name: 'Genie',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 4,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(5) + DEF(4) + HP(1) + MOV(0) + RNG(2)
    image: 'Genie.png'
  },
  {
    name: 'Genie',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 4,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(5) + DEF(4) + HP(2) + MOV(0) + RNG(2)
    image: 'Genie.png'
  },
  {
    name: 'Genie',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 4,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(5) + DEF(4) + HP(0) + MOV(0) + RNG(4)
    image: 'Genie.png'
  },
  {
    name: 'Genie',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 4,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(5) + DEF(4) + HP(1) + MOV(0) + RNG(4)
    image: 'Genie.png'
  },
  {
    name: 'Genie',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 4,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(5) + DEF(4) + HP(2) + MOV(0) + RNG(4)
    image: 'Genie.png'
  },
  {
    name: 'Genie',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 4,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(5) + DEF(4) + HP(0) + MOV(2) + RNG(0)
    image: 'Genie.png'
  },
  {
    name: 'Genie',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 4,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(5) + DEF(4) + HP(1) + MOV(2) + RNG(0)
    image: 'Genie.png'
  },
  {
    name: 'Genie',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 4,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(5) + DEF(4) + HP(2) + MOV(2) + RNG(0)
    image: 'Genie.png'
  },
  {
    name: 'Genie',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 4,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(5) + DEF(4) + HP(0) + MOV(2) + RNG(2)
    image: 'Genie.png'
  },
  {
    name: 'Genie',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 4,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(5) + DEF(4) + HP(1) + MOV(2) + RNG(2)
    image: 'Genie.png'
  },
  {
    name: 'Genie',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 4,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(5) + DEF(4) + HP(2) + MOV(2) + RNG(2)
    image: 'Genie.png'
  },
  {
    name: 'Genie',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 4,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(5) + DEF(4) + HP(0) + MOV(4) + RNG(0)
    image: 'Genie.png'
  },
  {
    name: 'Genie',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 4,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(5) + DEF(4) + HP(1) + MOV(4) + RNG(0)
    image: 'Genie.png'
  },
  {
    name: 'Genie',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 4,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(5) + DEF(4) + HP(2) + MOV(4) + RNG(0)
    image: 'Genie.png'
  },
  // Name: Water Serpent (ATK: 5, DEF: 5)
  {
    name: 'Water Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 5,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(5) + DEF(5) + HP(0) + MOV(0) + RNG(0)
    image: 'Water Serpent.png'
  },
  {
    name: 'Water Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 5,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(5) + DEF(5) + HP(1) + MOV(0) + RNG(0)
    image: 'Water Serpent.png'
  },
  {
    name: 'Water Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 5,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(5) + DEF(5) + HP(2) + MOV(0) + RNG(0)
    image: 'Water Serpent.png'
  },
  {
    name: 'Water Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 5,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(5) + DEF(5) + HP(0) + MOV(0) + RNG(2)
    image: 'Water Serpent.png'
  },
  {
    name: 'Water Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 5,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(5) + DEF(5) + HP(1) + MOV(0) + RNG(2)
    image: 'Water Serpent.png'
  },
  {
    name: 'Water Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 5,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(5) + DEF(5) + HP(2) + MOV(0) + RNG(2)
    image: 'Water Serpent.png'
  },
  {
    name: 'Water Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 5,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(5) + DEF(5) + HP(0) + MOV(0) + RNG(4)
    image: 'Water Serpent.png'
  },
  {
    name: 'Water Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 5,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(5) + DEF(5) + HP(1) + MOV(0) + RNG(4)
    image: 'Water Serpent.png'
  },
  {
    name: 'Water Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 5,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(5) + DEF(5) + HP(2) + MOV(0) + RNG(4)
    image: 'Water Serpent.png'
  },
  {
    name: 'Water Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 5,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(5) + DEF(5) + HP(0) + MOV(2) + RNG(0)
    image: 'Water Serpent.png'
  },
  {
    name: 'Water Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 5,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(5) + DEF(5) + HP(1) + MOV(2) + RNG(0)
    image: 'Water Serpent.png'
  },
  {
    name: 'Water Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 5,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(5) + DEF(5) + HP(2) + MOV(2) + RNG(0)
    image: 'Water Serpent.png'
  },
  {
    name: 'Water Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 5,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(5) + DEF(5) + HP(0) + MOV(2) + RNG(2)
    image: 'Water Serpent.png'
  },
  {
    name: 'Water Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 5,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(5) + DEF(5) + HP(1) + MOV(2) + RNG(2)
    image: 'Water Serpent.png'
  },
  {
    name: 'Water Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 5,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(5) + DEF(5) + HP(2) + MOV(2) + RNG(2)
    image: 'Water Serpent.png'
  },
  {
    name: 'Water Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 5,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(5) + DEF(5) + HP(0) + MOV(4) + RNG(0)
    image: 'Water Serpent.png'
  },
  {
    name: 'Water Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 5,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(5) + DEF(5) + HP(1) + MOV(4) + RNG(0)
    image: 'Water Serpent.png'
  },
  {
    name: 'Water Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 5,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(5) + DEF(5) + HP(2) + MOV(4) + RNG(0)
    image: 'Water Serpent.png'
  },
  // Name: Water Demon (ATK: 5, DEF: 6)
  {
    name: 'Water Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 6,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(5) + DEF(6) + HP(0) + MOV(0) + RNG(0)
    image: 'Water Demon.png'
  },
  {
    name: 'Water Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 6,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(5) + DEF(6) + HP(1) + MOV(0) + RNG(0)
    image: 'Water Demon.png'
  },
  {
    name: 'Water Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 6,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(5) + DEF(6) + HP(2) + MOV(0) + RNG(0)
    image: 'Water Demon.png'
  },
  {
    name: 'Water Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 6,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(5) + DEF(6) + HP(0) + MOV(0) + RNG(2)
    image: 'Water Demon.png'
  },
  {
    name: 'Water Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 6,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(5) + DEF(6) + HP(1) + MOV(0) + RNG(2)
    image: 'Water Demon.png'
  },
  {
    name: 'Water Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 6,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(5) + DEF(6) + HP(2) + MOV(0) + RNG(2)
    image: 'Water Demon.png'
  },
  {
    name: 'Water Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 6,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(5) + DEF(6) + HP(0) + MOV(0) + RNG(4)
    image: 'Water Demon.png'
  },
  {
    name: 'Water Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 6,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(5) + DEF(6) + HP(1) + MOV(0) + RNG(4)
    image: 'Water Demon.png'
  },
  {
    name: 'Water Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 6,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(5) + DEF(6) + HP(2) + MOV(0) + RNG(4)
    image: 'Water Demon.png'
  },
  {
    name: 'Water Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 6,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(5) + DEF(6) + HP(0) + MOV(2) + RNG(0)
    image: 'Water Demon.png'
  },
  {
    name: 'Water Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 6,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(5) + DEF(6) + HP(1) + MOV(2) + RNG(0)
    image: 'Water Demon.png'
  },
  {
    name: 'Water Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 6,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(5) + DEF(6) + HP(2) + MOV(2) + RNG(0)
    image: 'Water Demon.png'
  },
  {
    name: 'Water Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 6,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(5) + DEF(6) + HP(0) + MOV(2) + RNG(2)
    image: 'Water Demon.png'
  },
  {
    name: 'Water Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 6,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(5) + DEF(6) + HP(1) + MOV(2) + RNG(2)
    image: 'Water Demon.png'
  },
  {
    name: 'Water Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 6,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(5) + DEF(6) + HP(2) + MOV(2) + RNG(2)
    image: 'Water Demon.png'
  },
  {
    name: 'Water Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 6,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(5) + DEF(6) + HP(0) + MOV(4) + RNG(0)
    image: 'Water Demon.png'
  },
  {
    name: 'Water Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 6,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(5) + DEF(6) + HP(1) + MOV(4) + RNG(0)
    image: 'Water Demon.png'
  },
  {
    name: 'Water Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 6,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(5) + DEF(6) + HP(2) + MOV(4) + RNG(0)
    image: 'Water Demon.png'
  },
  // Name: Magician (ATK: 5, DEF: 7)
  {
    name: 'Magician',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 7,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(5) + DEF(7) + HP(0) + MOV(0) + RNG(0)
    image: 'Magician.png'
  },
  {
    name: 'Magician',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 7,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(5) + DEF(7) + HP(1) + MOV(0) + RNG(0)
    image: 'Magician.png'
  },
  {
    name: 'Magician',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 7,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(5) + DEF(7) + HP(2) + MOV(0) + RNG(0)
    image: 'Magician.png'
  },
  {
    name: 'Magician',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 7,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(5) + DEF(7) + HP(0) + MOV(0) + RNG(2)
    image: 'Magician.png'
  },
  {
    name: 'Magician',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 7,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(5) + DEF(7) + HP(1) + MOV(0) + RNG(2)
    image: 'Magician.png'
  },
  {
    name: 'Magician',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 7,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(5) + DEF(7) + HP(2) + MOV(0) + RNG(2)
    image: 'Magician.png'
  },
  {
    name: 'Magician',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 7,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(5) + DEF(7) + HP(0) + MOV(0) + RNG(4)
    image: 'Magician.png'
  },
  {
    name: 'Magician',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 7,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(5) + DEF(7) + HP(1) + MOV(0) + RNG(4)
    image: 'Magician.png'
  },
  {
    name: 'Magician',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 7,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(5) + DEF(7) + HP(2) + MOV(0) + RNG(4)
    image: 'Magician.png'
  },
  {
    name: 'Magician',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 7,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(5) + DEF(7) + HP(0) + MOV(2) + RNG(0)
    image: 'Magician.png'
  },
  {
    name: 'Magician',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 7,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(5) + DEF(7) + HP(1) + MOV(2) + RNG(0)
    image: 'Magician.png'
  },
  {
    name: 'Magician',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 7,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(5) + DEF(7) + HP(2) + MOV(2) + RNG(0)
    image: 'Magician.png'
  },
  {
    name: 'Magician',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 7,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(5) + DEF(7) + HP(0) + MOV(2) + RNG(2)
    image: 'Magician.png'
  },
  {
    name: 'Magician',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 7,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(5) + DEF(7) + HP(1) + MOV(2) + RNG(2)
    image: 'Magician.png'
  },
  {
    name: 'Magician',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 7,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(5) + DEF(7) + HP(2) + MOV(2) + RNG(2)
    image: 'Magician.png'
  },
  {
    name: 'Magician',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 7,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(5) + DEF(7) + HP(0) + MOV(4) + RNG(0)
    image: 'Magician.png'
  },
  {
    name: 'Magician',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 7,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(5) + DEF(7) + HP(1) + MOV(4) + RNG(0)
    image: 'Magician.png'
  },
  {
    name: 'Magician',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 7,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(5) + DEF(7) + HP(2) + MOV(4) + RNG(0)
    image: 'Magician.png'
  },
  // Name: Gasoline Man (ATK: 5, DEF: 8)
  {
    name: 'Gasoline Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 8,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(5) + DEF(8) + HP(0) + MOV(0) + RNG(0)
    image: 'Gasoline Man.png'
  },
  {
    name: 'Gasoline Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 8,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(5) + DEF(8) + HP(1) + MOV(0) + RNG(0)
    image: 'Gasoline Man.png'
  },
  {
    name: 'Gasoline Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 8,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(5) + DEF(8) + HP(2) + MOV(0) + RNG(0)
    image: 'Gasoline Man.png'
  },
  {
    name: 'Gasoline Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 8,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(5) + DEF(8) + HP(0) + MOV(0) + RNG(2)
    image: 'Gasoline Man.png'
  },
  {
    name: 'Gasoline Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 8,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(5) + DEF(8) + HP(1) + MOV(0) + RNG(2)
    image: 'Gasoline Man.png'
  },
  {
    name: 'Gasoline Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 8,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(5) + DEF(8) + HP(2) + MOV(0) + RNG(2)
    image: 'Gasoline Man.png'
  },
  {
    name: 'Gasoline Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 8,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(5) + DEF(8) + HP(0) + MOV(0) + RNG(4)
    image: 'Gasoline Man.png'
  },
  {
    name: 'Gasoline Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 8,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(5) + DEF(8) + HP(1) + MOV(0) + RNG(4)
    image: 'Gasoline Man.png'
  },
  {
    name: 'Gasoline Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 8,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(5) + DEF(8) + HP(2) + MOV(0) + RNG(4)
    image: 'Gasoline Man.png'
  },
  {
    name: 'Gasoline Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 8,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(5) + DEF(8) + HP(0) + MOV(2) + RNG(0)
    image: 'Gasoline Man.png'
  },
  {
    name: 'Gasoline Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 8,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(5) + DEF(8) + HP(1) + MOV(2) + RNG(0)
    image: 'Gasoline Man.png'
  },
  {
    name: 'Gasoline Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 8,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(5) + DEF(8) + HP(2) + MOV(2) + RNG(0)
    image: 'Gasoline Man.png'
  },
  {
    name: 'Gasoline Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 8,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(5) + DEF(8) + HP(0) + MOV(2) + RNG(2)
    image: 'Gasoline Man.png'
  },
  {
    name: 'Gasoline Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 8,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(5) + DEF(8) + HP(1) + MOV(2) + RNG(2)
    image: 'Gasoline Man.png'
  },
  {
    name: 'Gasoline Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 8,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(5) + DEF(8) + HP(2) + MOV(2) + RNG(2)
    image: 'Gasoline Man.png'
  },
  {
    name: 'Gasoline Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 8,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(5) + DEF(8) + HP(0) + MOV(4) + RNG(0)
    image: 'Gasoline Man.png'
  },
  {
    name: 'Gasoline Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 8,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(5) + DEF(8) + HP(1) + MOV(4) + RNG(0)
    image: 'Gasoline Man.png'
  },
  {
    name: 'Gasoline Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 8,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(5) + DEF(8) + HP(2) + MOV(4) + RNG(0)
    image: 'Gasoline Man.png'
  },
  // Name: Tentacle Sorcerer (ATK: 5, DEF: 9)
  {
    name: 'Tentacle Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 9,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(5) + DEF(9) + HP(0) + MOV(0) + RNG(0)
    image: 'Tentacle Sorcerer.png'
  },
  {
    name: 'Tentacle Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 9,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(5) + DEF(9) + HP(1) + MOV(0) + RNG(0)
    image: 'Tentacle Sorcerer.png'
  },
  {
    name: 'Tentacle Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 9,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(5) + DEF(9) + HP(2) + MOV(0) + RNG(0)
    image: 'Tentacle Sorcerer.png'
  },
  {
    name: 'Tentacle Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 9,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(5) + DEF(9) + HP(0) + MOV(0) + RNG(2)
    image: 'Tentacle Sorcerer.png'
  },
  {
    name: 'Tentacle Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 9,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(5) + DEF(9) + HP(1) + MOV(0) + RNG(2)
    image: 'Tentacle Sorcerer.png'
  },
  {
    name: 'Tentacle Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 9,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(5) + DEF(9) + HP(2) + MOV(0) + RNG(2)
    image: 'Tentacle Sorcerer.png'
  },
  {
    name: 'Tentacle Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 9,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(5) + DEF(9) + HP(0) + MOV(0) + RNG(4)
    image: 'Tentacle Sorcerer.png'
  },
  {
    name: 'Tentacle Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 9,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(5) + DEF(9) + HP(1) + MOV(0) + RNG(4)
    image: 'Tentacle Sorcerer.png'
  },
  {
    name: 'Tentacle Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 9,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(5) + DEF(9) + HP(2) + MOV(0) + RNG(4)
    image: 'Tentacle Sorcerer.png'
  },
  {
    name: 'Tentacle Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 9,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(5) + DEF(9) + HP(0) + MOV(2) + RNG(0)
    image: 'Tentacle Sorcerer.png'
  },
  {
    name: 'Tentacle Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 9,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(5) + DEF(9) + HP(1) + MOV(2) + RNG(0)
    image: 'Tentacle Sorcerer.png'
  },
  {
    name: 'Tentacle Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 9,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(5) + DEF(9) + HP(2) + MOV(2) + RNG(0)
    image: 'Tentacle Sorcerer.png'
  },
  {
    name: 'Tentacle Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 9,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(5) + DEF(9) + HP(0) + MOV(2) + RNG(2)
    image: 'Tentacle Sorcerer.png'
  },
  {
    name: 'Tentacle Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 9,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(5) + DEF(9) + HP(1) + MOV(2) + RNG(2)
    image: 'Tentacle Sorcerer.png'
  },
  {
    name: 'Tentacle Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 9,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(5) + DEF(9) + HP(2) + MOV(2) + RNG(2)
    image: 'Tentacle Sorcerer.png'
  },
  {
    name: 'Tentacle Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 9,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(5) + DEF(9) + HP(0) + MOV(4) + RNG(0)
    image: 'Tentacle Sorcerer.png'
  },
  {
    name: 'Tentacle Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 9,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(5) + DEF(9) + HP(1) + MOV(4) + RNG(0)
    image: 'Tentacle Sorcerer.png'
  },
  {
    name: 'Tentacle Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 5,
    def: 9,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(5) + DEF(9) + HP(2) + MOV(4) + RNG(0)
    image: 'Tentacle Sorcerer.png'
  },

  // Name: Bone Sorcerer (ATK: 6, DEF: 0)
  {
    name: 'Bone Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 0,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 6, // ATK(6) + DEF(0) + HP(0) + MOV(0) + RNG(0)
    image: 'Bone Sorcerer.png'
  },
  {
    name: 'Bone Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 0,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(6) + DEF(0) + HP(1) + MOV(0) + RNG(0)
    image: 'Bone Sorcerer.png'
  },
  {
    name: 'Bone Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 0,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(6) + DEF(0) + HP(2) + MOV(0) + RNG(0)
    image: 'Bone Sorcerer.png'
  },
  {
    name: 'Bone Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 0,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(6) + DEF(0) + HP(0) + MOV(0) + RNG(2)
    image: 'Bone Sorcerer.png'
  },
  {
    name: 'Bone Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 0,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(6) + DEF(0) + HP(1) + MOV(0) + RNG(2)
    image: 'Bone Sorcerer.png'
  },
  {
    name: 'Bone Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 0,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(6) + DEF(0) + HP(2) + MOV(0) + RNG(2)
    image: 'Bone Sorcerer.png'
  },
  {
    name: 'Bone Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 0,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(6) + DEF(0) + HP(0) + MOV(0) + RNG(4)
    image: 'Bone Sorcerer.png'
  },
  {
    name: 'Bone Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 0,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(6) + DEF(0) + HP(1) + MOV(0) + RNG(4)
    image: 'Bone Sorcerer.png'
  },
  {
    name: 'Bone Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 0,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(6) + DEF(0) + HP(2) + MOV(0) + RNG(4)
    image: 'Bone Sorcerer.png'
  },
  {
    name: 'Bone Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 0,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(6) + DEF(0) + HP(0) + MOV(2) + RNG(0)
    image: 'Bone Sorcerer.png'
  },
  {
    name: 'Bone Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 0,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(6) + DEF(0) + HP(1) + MOV(2) + RNG(0)
    image: 'Bone Sorcerer.png'
  },
  {
    name: 'Bone Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 0,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(6) + DEF(0) + HP(2) + MOV(2) + RNG(0)
    image: 'Bone Sorcerer.png'
  },
  {
    name: 'Bone Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 0,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(6) + DEF(0) + HP(0) + MOV(2) + RNG(2)
    image: 'Bone Sorcerer.png'
  },
  {
    name: 'Bone Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 0,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(6) + DEF(0) + HP(1) + MOV(2) + RNG(2)
    image: 'Bone Sorcerer.png'
  },
  {
    name: 'Bone Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 0,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(6) + DEF(0) + HP(2) + MOV(2) + RNG(2)
    image: 'Bone Sorcerer.png'
  },
  {
    name: 'Bone Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 0,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(6) + DEF(0) + HP(0) + MOV(4) + RNG(0)
    image: 'Bone Sorcerer.png'
  },
  {
    name: 'Bone Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 0,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(6) + DEF(0) + HP(1) + MOV(4) + RNG(0)
    image: 'Bone Sorcerer.png'
  },
  {
    name: 'Bone Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 0,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(6) + DEF(0) + HP(2) + MOV(4) + RNG(0)
    image: 'Bone Sorcerer.png'
  },
  // Name: Magic Dragon (ATK: 6, DEF: 1)
  {
    name: 'Magic Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 1,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(6) + DEF(1) + HP(0) + MOV(0) + RNG(0)
    image: 'Magic Dragon.png'
  },
  {
    name: 'Magic Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 1,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(6) + DEF(1) + HP(1) + MOV(0) + RNG(0)
    image: 'Magic Dragon.png'
  },
  {
    name: 'Magic Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 1,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(6) + DEF(1) + HP(2) + MOV(0) + RNG(0)
    image: 'Magic Dragon.png'
  },
  {
    name: 'Magic Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 1,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(6) + DEF(1) + HP(0) + MOV(0) + RNG(2)
    image: 'Magic Dragon.png'
  },
  {
    name: 'Magic Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 1,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(6) + DEF(1) + HP(1) + MOV(0) + RNG(2)
    image: 'Magic Dragon.png'
  },
  {
    name: 'Magic Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 1,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(6) + DEF(1) + HP(2) + MOV(0) + RNG(2)
    image: 'Magic Dragon.png'
  },
  {
    name: 'Magic Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 1,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(6) + DEF(1) + HP(0) + MOV(0) + RNG(4)
    image: 'Magic Dragon.png'
  },
  {
    name: 'Magic Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 1,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(6) + DEF(1) + HP(1) + MOV(0) + RNG(4)
    image: 'Magic Dragon.png'
  },
  {
    name: 'Magic Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 1,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(6) + DEF(1) + HP(2) + MOV(0) + RNG(4)
    image: 'Magic Dragon.png'
  },
  {
    name: 'Magic Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 1,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(6) + DEF(1) + HP(0) + MOV(2) + RNG(0)
    image: 'Magic Dragon.png'
  },
  {
    name: 'Magic Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 1,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(6) + DEF(1) + HP(1) + MOV(2) + RNG(0)
    image: 'Magic Dragon.png'
  },
  {
    name: 'Magic Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 1,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(6) + DEF(1) + HP(2) + MOV(2) + RNG(0)
    image: 'Magic Dragon.png'
  },
  {
    name: 'Magic Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 1,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(6) + DEF(1) + HP(0) + MOV(2) + RNG(2)
    image: 'Magic Dragon.png'
  },
  {
    name: 'Magic Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 1,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(6) + DEF(1) + HP(1) + MOV(2) + RNG(2)
    image: 'Magic Dragon.png'
  },
  {
    name: 'Magic Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 1,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(6) + DEF(1) + HP(2) + MOV(2) + RNG(2)
    image: 'Magic Dragon.png'
  },
  {
    name: 'Magic Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 1,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(6) + DEF(1) + HP(0) + MOV(4) + RNG(0)
    image: 'Magic Dragon.png'
  },
  {
    name: 'Magic Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 1,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(6) + DEF(1) + HP(1) + MOV(4) + RNG(0)
    image: 'Magic Dragon.png'
  },
  {
    name: 'Magic Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 1,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(6) + DEF(1) + HP(2) + MOV(4) + RNG(0)
    image: 'Magic Dragon.png'
  },
  // Name: Vampire (ATK: 6, DEF: 2)
  {
    name: 'Vampire',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 2,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(6) + DEF(2) + HP(0) + MOV(0) + RNG(0)
    image: 'Vampire.png'
  },
  {
    name: 'Vampire',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 2,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(6) + DEF(2) + HP(1) + MOV(0) + RNG(0)
    image: 'Vampire.png'
  },
  {
    name: 'Vampire',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 2,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(6) + DEF(2) + HP(2) + MOV(0) + RNG(0)
    image: 'Vampire.png'
  },
  {
    name: 'Vampire',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 2,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(6) + DEF(2) + HP(0) + MOV(0) + RNG(2)
    image: 'Vampire.png'
  },
  {
    name: 'Vampire',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 2,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(6) + DEF(2) + HP(1) + MOV(0) + RNG(2)
    image: 'Vampire.png'
  },
  {
    name: 'Vampire',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 2,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(6) + DEF(2) + HP(2) + MOV(0) + RNG(2)
    image: 'Vampire.png'
  },
  {
    name: 'Vampire',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 2,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(6) + DEF(2) + HP(0) + MOV(0) + RNG(4)
    image: 'Vampire.png'
  },
  {
    name: 'Vampire',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 2,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(6) + DEF(2) + HP(1) + MOV(0) + RNG(4)
    image: 'Vampire.png'
  },
  {
    name: 'Vampire',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 2,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(6) + DEF(2) + HP(2) + MOV(0) + RNG(4)
    image: 'Vampire.png'
  },
  {
    name: 'Vampire',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 2,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(6) + DEF(2) + HP(0) + MOV(2) + RNG(0)
    image: 'Vampire.png'
  },
  {
    name: 'Vampire',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 2,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(6) + DEF(2) + HP(1) + MOV(2) + RNG(0)
    image: 'Vampire.png'
  },
  {
    name: 'Vampire',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 2,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(6) + DEF(2) + HP(2) + MOV(2) + RNG(0)
    image: 'Vampire.png'
  },
  {
    name: 'Vampire',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 2,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(6) + DEF(2) + HP(0) + MOV(2) + RNG(2)
    image: 'Vampire.png'
  },
  {
    name: 'Vampire',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 2,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(6) + DEF(2) + HP(1) + MOV(2) + RNG(2)
    image: 'Vampire.png'
  },
  {
    name: 'Vampire',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 2,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(6) + DEF(2) + HP(2) + MOV(2) + RNG(2)
    image: 'Vampire.png'
  },
  {
    name: 'Vampire',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 2,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(6) + DEF(2) + HP(0) + MOV(4) + RNG(0)
    image: 'Vampire.png'
  },
  {
    name: 'Vampire',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 2,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(6) + DEF(2) + HP(1) + MOV(4) + RNG(0)
    image: 'Vampire.png'
  },
  {
    name: 'Vampire',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 2,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(6) + DEF(2) + HP(2) + MOV(4) + RNG(0)
    image: 'Vampire.png'
  },
  // Name: Skull Mage (ATK: 6, DEF: 3)
  {
    name: 'Skull Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 3,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(6) + DEF(3) + HP(0) + MOV(0) + RNG(0)
    image: 'Skull Mage.png'
  },
  {
    name: 'Skull Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 3,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(6) + DEF(3) + HP(1) + MOV(0) + RNG(0)
    image: 'Skull Mage.png'
  },
  {
    name: 'Skull Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 3,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(6) + DEF(3) + HP(2) + MOV(0) + RNG(0)
    image: 'Skull Mage.png'
  },
  {
    name: 'Skull Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 3,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(6) + DEF(3) + HP(0) + MOV(0) + RNG(2)
    image: 'Skull Mage.png'
  },
  {
    name: 'Skull Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 3,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(6) + DEF(3) + HP(1) + MOV(0) + RNG(2)
    image: 'Skull Mage.png'
  },
  {
    name: 'Skull Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 3,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(6) + DEF(3) + HP(2) + MOV(0) + RNG(2)
    image: 'Skull Mage.png'
  },
  {
    name: 'Skull Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 3,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(6) + DEF(3) + HP(0) + MOV(0) + RNG(4)
    image: 'Skull Mage.png'
  },
  {
    name: 'Skull Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 3,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(6) + DEF(3) + HP(1) + MOV(0) + RNG(4)
    image: 'Skull Mage.png'
  },
  {
    name: 'Skull Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 3,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(6) + DEF(3) + HP(2) + MOV(0) + RNG(4)
    image: 'Skull Mage.png'
  },
  {
    name: 'Skull Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 3,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(6) + DEF(3) + HP(0) + MOV(2) + RNG(0)
    image: 'Skull Mage.png'
  },
  {
    name: 'Skull Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 3,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(6) + DEF(3) + HP(1) + MOV(2) + RNG(0)
    image: 'Skull Mage.png'
  },
  {
    name: 'Skull Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 3,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(6) + DEF(3) + HP(2) + MOV(2) + RNG(0)
    image: 'Skull Mage.png'
  },
  {
    name: 'Skull Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 3,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(6) + DEF(3) + HP(0) + MOV(2) + RNG(2)
    image: 'Skull Mage.png'
  },
  {
    name: 'Skull Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 3,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(6) + DEF(3) + HP(1) + MOV(2) + RNG(2)
    image: 'Skull Mage.png'
  },
  {
    name: 'Skull Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 3,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(6) + DEF(3) + HP(2) + MOV(2) + RNG(2)
    image: 'Skull Mage.png'
  },
  {
    name: 'Skull Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 3,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(6) + DEF(3) + HP(0) + MOV(4) + RNG(0)
    image: 'Skull Mage.png'
  },
  {
    name: 'Skull Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 3,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(6) + DEF(3) + HP(1) + MOV(4) + RNG(0)
    image: 'Skull Mage.png'
  },
  {
    name: 'Skull Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 3,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(6) + DEF(3) + HP(2) + MOV(4) + RNG(0)
    image: 'Skull Mage.png'
  },
  // Name: Sea Horse (ATK: 6, DEF: 4)
  {
    name: 'Sea Horse',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 4,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(6) + DEF(4) + HP(0) + MOV(0) + RNG(0)
    image: 'Sea Horse.png'
  },
  {
    name: 'Sea Horse',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 4,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(6) + DEF(4) + HP(1) + MOV(0) + RNG(0)
    image: 'Sea Horse.png'
  },
  {
    name: 'Sea Horse',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 4,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(6) + DEF(4) + HP(2) + MOV(0) + RNG(0)
    image: 'Sea Horse.png'
  },
  {
    name: 'Sea Horse',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 4,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(6) + DEF(4) + HP(0) + MOV(0) + RNG(2)
    image: 'Sea Horse.png'
  },
  {
    name: 'Sea Horse',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 4,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(6) + DEF(4) + HP(1) + MOV(0) + RNG(2)
    image: 'Sea Horse.png'
  },
  {
    name: 'Sea Horse',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 4,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(6) + DEF(4) + HP(2) + MOV(0) + RNG(2)
    image: 'Sea Horse.png'
  },
  {
    name: 'Sea Horse',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 4,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(6) + DEF(4) + HP(0) + MOV(0) + RNG(4)
    image: 'Sea Horse.png'
  },
  {
    name: 'Sea Horse',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 4,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(6) + DEF(4) + HP(1) + MOV(0) + RNG(4)
    image: 'Sea Horse.png'
  },
  {
    name: 'Sea Horse',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 4,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(6) + DEF(4) + HP(2) + MOV(0) + RNG(4)
    image: 'Sea Horse.png'
  },
  {
    name: 'Sea Horse',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 4,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(6) + DEF(4) + HP(0) + MOV(2) + RNG(0)
    image: 'Sea Horse.png'
  },
  {
    name: 'Sea Horse',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 4,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(6) + DEF(4) + HP(1) + MOV(2) + RNG(0)
    image: 'Sea Horse.png'
  },
  {
    name: 'Sea Horse',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 4,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(6) + DEF(4) + HP(2) + MOV(2) + RNG(0)
    image: 'Sea Horse.png'
  },
  {
    name: 'Sea Horse',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 4,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(6) + DEF(4) + HP(0) + MOV(2) + RNG(2)
    image: 'Sea Horse.png'
  },
  {
    name: 'Sea Horse',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 4,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(6) + DEF(4) + HP(1) + MOV(2) + RNG(2)
    image: 'Sea Horse.png'
  },
  {
    name: 'Sea Horse',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 4,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(6) + DEF(4) + HP(2) + MOV(2) + RNG(2)
    image: 'Sea Horse.png'
  },
  {
    name: 'Sea Horse',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 4,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(6) + DEF(4) + HP(0) + MOV(4) + RNG(0)
    image: 'Sea Horse.png'
  },
  {
    name: 'Sea Horse',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 4,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(6) + DEF(4) + HP(1) + MOV(4) + RNG(0)
    image: 'Sea Horse.png'
  },
  {
    name: 'Sea Horse',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 4,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(6) + DEF(4) + HP(2) + MOV(4) + RNG(0)
    image: 'Sea Horse.png'
  },
  // Name: Tim (ATK: 6, DEF: 5)
  {
    name: 'Tim',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 5,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(6) + DEF(5) + HP(0) + MOV(0) + RNG(0)
    image: 'Tim.png'
  },
  {
    name: 'Tim',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 5,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(6) + DEF(5) + HP(1) + MOV(0) + RNG(0)
    image: 'Tim.png'
  },
  {
    name: 'Tim',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 5,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(6) + DEF(5) + HP(2) + MOV(0) + RNG(0)
    image: 'Tim.png'
  },
  {
    name: 'Tim',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 5,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(6) + DEF(5) + HP(0) + MOV(0) + RNG(2)
    image: 'Tim.png'
  },
  {
    name: 'Tim',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 5,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(6) + DEF(5) + HP(1) + MOV(0) + RNG(2)
    image: 'Tim.png'
  },
  {
    name: 'Tim',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 5,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(6) + DEF(5) + HP(2) + MOV(0) + RNG(2)
    image: 'Tim.png'
  },
  {
    name: 'Tim',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 5,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(6) + DEF(5) + HP(0) + MOV(0) + RNG(4)
    image: 'Tim.png'
  },
  {
    name: 'Tim',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 5,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(6) + DEF(5) + HP(1) + MOV(0) + RNG(4)
    image: 'Tim.png'
  },
  {
    name: 'Tim',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 5,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(6) + DEF(5) + HP(2) + MOV(0) + RNG(4)
    image: 'Tim.png'
  },
  {
    name: 'Tim',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 5,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(6) + DEF(5) + HP(0) + MOV(2) + RNG(0)
    image: 'Tim.png'
  },
  {
    name: 'Tim',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 5,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(6) + DEF(5) + HP(1) + MOV(2) + RNG(0)
    image: 'Tim.png'
  },
  {
    name: 'Tim',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 5,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(6) + DEF(5) + HP(2) + MOV(2) + RNG(0)
    image: 'Tim.png'
  },
  {
    name: 'Tim',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 5,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(6) + DEF(5) + HP(0) + MOV(2) + RNG(2)
    image: 'Tim.png'
  },
  {
    name: 'Tim',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 5,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(6) + DEF(5) + HP(1) + MOV(2) + RNG(2)
    image: 'Tim.png'
  },
  {
    name: 'Tim',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 5,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(6) + DEF(5) + HP(2) + MOV(2) + RNG(2)
    image: 'Tim.png'
  },
  {
    name: 'Tim',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 5,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(6) + DEF(5) + HP(0) + MOV(4) + RNG(0)
    image: 'Tim.png'
  },
  {
    name: 'Tim',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 5,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(6) + DEF(5) + HP(1) + MOV(4) + RNG(0)
    image: 'Tim.png'
  },
  {
    name: 'Tim',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 5,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(6) + DEF(5) + HP(2) + MOV(4) + RNG(0)
    image: 'Tim.png'
  },
  // Name: Witch (ATK: 6, DEF: 6)
  {
    name: 'Witch',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 6,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(6) + DEF(6) + HP(0) + MOV(0) + RNG(0)
    image: 'Witch.png'
  },
  {
    name: 'Witch',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 6,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(6) + DEF(6) + HP(1) + MOV(0) + RNG(0)
    image: 'Witch.png'
  },
  {
    name: 'Witch',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 6,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(6) + DEF(6) + HP(2) + MOV(0) + RNG(0)
    image: 'Witch.png'
  },
  {
    name: 'Witch',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 6,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(6) + DEF(6) + HP(0) + MOV(0) + RNG(2)
    image: 'Witch.png'
  },
  {
    name: 'Witch',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 6,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(6) + DEF(6) + HP(1) + MOV(0) + RNG(2)
    image: 'Witch.png'
  },
  {
    name: 'Witch',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 6,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(6) + DEF(6) + HP(2) + MOV(0) + RNG(2)
    image: 'Witch.png'
  },
  {
    name: 'Witch',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 6,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(6) + DEF(6) + HP(0) + MOV(0) + RNG(4)
    image: 'Witch.png'
  },
  {
    name: 'Witch',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 6,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(6) + DEF(6) + HP(1) + MOV(0) + RNG(4)
    image: 'Witch.png'
  },
  {
    name: 'Witch',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 6,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(6) + DEF(6) + HP(2) + MOV(0) + RNG(4)
    image: 'Witch.png'
  },
  {
    name: 'Witch',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 6,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(6) + DEF(6) + HP(0) + MOV(2) + RNG(0)
    image: 'Witch.png'
  },
  {
    name: 'Witch',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 6,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(6) + DEF(6) + HP(1) + MOV(2) + RNG(0)
    image: 'Witch.png'
  },
  {
    name: 'Witch',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 6,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(6) + DEF(6) + HP(2) + MOV(2) + RNG(0)
    image: 'Witch.png'
  },
  {
    name: 'Witch',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 6,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(6) + DEF(6) + HP(0) + MOV(2) + RNG(2)
    image: 'Witch.png'
  },
  {
    name: 'Witch',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 6,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(6) + DEF(6) + HP(1) + MOV(2) + RNG(2)
    image: 'Witch.png'
  },
  {
    name: 'Witch',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 6,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(6) + DEF(6) + HP(2) + MOV(2) + RNG(2)
    image: 'Witch.png'
  },
  {
    name: 'Witch',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 6,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(6) + DEF(6) + HP(0) + MOV(4) + RNG(0)
    image: 'Witch.png'
  },
  {
    name: 'Witch',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 6,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(6) + DEF(6) + HP(1) + MOV(4) + RNG(0)
    image: 'Witch.png'
  },
  {
    name: 'Witch',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 6,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(6) + DEF(6) + HP(2) + MOV(4) + RNG(0)
    image: 'Witch.png'
  },
  // Name: Flame (ATK: 6, DEF: 7)
  {
    name: 'Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 7,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(6) + DEF(7) + HP(0) + MOV(0) + RNG(0)
    image: 'Flame.png'
  },
  {
    name: 'Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 7,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(6) + DEF(7) + HP(1) + MOV(0) + RNG(0)
    image: 'Flame.png'
  },
  {
    name: 'Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 7,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(6) + DEF(7) + HP(2) + MOV(0) + RNG(0)
    image: 'Flame.png'
  },
  {
    name: 'Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 7,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(6) + DEF(7) + HP(0) + MOV(0) + RNG(2)
    image: 'Flame.png'
  },
  {
    name: 'Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 7,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(6) + DEF(7) + HP(1) + MOV(0) + RNG(2)
    image: 'Flame.png'
  },
  {
    name: 'Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 7,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(6) + DEF(7) + HP(2) + MOV(0) + RNG(2)
    image: 'Flame.png'
  },
  {
    name: 'Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 7,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(6) + DEF(7) + HP(0) + MOV(0) + RNG(4)
    image: 'Flame.png'
  },
  {
    name: 'Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 7,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(6) + DEF(7) + HP(1) + MOV(0) + RNG(4)
    image: 'Flame.png'
  },
  {
    name: 'Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 7,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(6) + DEF(7) + HP(2) + MOV(0) + RNG(4)
    image: 'Flame.png'
  },
  {
    name: 'Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 7,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(6) + DEF(7) + HP(0) + MOV(2) + RNG(0)
    image: 'Flame.png'
  },
  {
    name: 'Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 7,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(6) + DEF(7) + HP(1) + MOV(2) + RNG(0)
    image: 'Flame.png'
  },
  {
    name: 'Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 7,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(6) + DEF(7) + HP(2) + MOV(2) + RNG(0)
    image: 'Flame.png'
  },
  {
    name: 'Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 7,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(6) + DEF(7) + HP(0) + MOV(2) + RNG(2)
    image: 'Flame.png'
  },
  {
    name: 'Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 7,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(6) + DEF(7) + HP(1) + MOV(2) + RNG(2)
    image: 'Flame.png'
  },
  {
    name: 'Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 7,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(6) + DEF(7) + HP(2) + MOV(2) + RNG(2)
    image: 'Flame.png'
  },
  {
    name: 'Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 7,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(6) + DEF(7) + HP(0) + MOV(4) + RNG(0)
    image: 'Flame.png'
  },
  {
    name: 'Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 7,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(6) + DEF(7) + HP(1) + MOV(4) + RNG(0)
    image: 'Flame.png'
  },
  {
    name: 'Flame',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 7,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(6) + DEF(7) + HP(2) + MOV(4) + RNG(0)
    image: 'Flame.png'
  },
  // Name: The Undying (ATK: 6, DEF: 8)
  {
    name: 'The Undying',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 8,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(6) + DEF(8) + HP(0) + MOV(0) + RNG(0)
    image: 'The Undying.png'
  },
  {
    name: 'The Undying',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 8,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(6) + DEF(8) + HP(1) + MOV(0) + RNG(0)
    image: 'The Undying.png'
  },
  {
    name: 'The Undying',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 8,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(6) + DEF(8) + HP(2) + MOV(0) + RNG(0)
    image: 'The Undying.png'
  },
  {
    name: 'The Undying',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 8,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(6) + DEF(8) + HP(0) + MOV(0) + RNG(2)
    image: 'The Undying.png'
  },
  {
    name: 'The Undying',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 8,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(6) + DEF(8) + HP(1) + MOV(0) + RNG(2)
    image: 'The Undying.png'
  },
  {
    name: 'The Undying',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 8,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(6) + DEF(8) + HP(2) + MOV(0) + RNG(2)
    image: 'The Undying.png'
  },
  {
    name: 'The Undying',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 8,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(6) + DEF(8) + HP(0) + MOV(0) + RNG(4)
    image: 'The Undying.png'
  },
  {
    name: 'The Undying',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 8,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(6) + DEF(8) + HP(1) + MOV(0) + RNG(4)
    image: 'The Undying.png'
  },
  {
    name: 'The Undying',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 8,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(6) + DEF(8) + HP(2) + MOV(0) + RNG(4)
    image: 'The Undying.png'
  },
  {
    name: 'The Undying',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 8,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(6) + DEF(8) + HP(0) + MOV(2) + RNG(0)
    image: 'The Undying.png'
  },
  {
    name: 'The Undying',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 8,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(6) + DEF(8) + HP(1) + MOV(2) + RNG(0)
    image: 'The Undying.png'
  },
  {
    name: 'The Undying',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 8,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(6) + DEF(8) + HP(2) + MOV(2) + RNG(0)
    image: 'The Undying.png'
  },
  {
    name: 'The Undying',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 8,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(6) + DEF(8) + HP(0) + MOV(2) + RNG(2)
    image: 'The Undying.png'
  },
  {
    name: 'The Undying',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 8,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(6) + DEF(8) + HP(1) + MOV(2) + RNG(2)
    image: 'The Undying.png'
  },
  {
    name: 'The Undying',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 8,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(6) + DEF(8) + HP(2) + MOV(2) + RNG(2)
    image: 'The Undying.png'
  },
  {
    name: 'The Undying',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 8,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(6) + DEF(8) + HP(0) + MOV(4) + RNG(0)
    image: 'The Undying.png'
  },
  {
    name: 'The Undying',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 8,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(6) + DEF(8) + HP(1) + MOV(4) + RNG(0)
    image: 'The Undying.png'
  },
  {
    name: 'The Undying',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 8,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(6) + DEF(8) + HP(2) + MOV(4) + RNG(0)
    image: 'The Undying.png'
  },
  // Name: Evil Wizard (ATK: 6, DEF: 9)
  {
    name: 'Evil Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 9,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(6) + DEF(9) + HP(0) + MOV(0) + RNG(0)
    image: 'Evil Wizard.png'
  },
  {
    name: 'Evil Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 9,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(6) + DEF(9) + HP(1) + MOV(0) + RNG(0)
    image: 'Evil Wizard.png'
  },
  {
    name: 'Evil Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 9,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(6) + DEF(9) + HP(2) + MOV(0) + RNG(0)
    image: 'Evil Wizard.png'
  },
  {
    name: 'Evil Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 9,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(6) + DEF(9) + HP(0) + MOV(0) + RNG(2)
    image: 'Evil Wizard.png'
  },
  {
    name: 'Evil Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 9,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(6) + DEF(9) + HP(1) + MOV(0) + RNG(2)
    image: 'Evil Wizard.png'
  },
  {
    name: 'Evil Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 9,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(6) + DEF(9) + HP(2) + MOV(0) + RNG(2)
    image: 'Evil Wizard.png'
  },
  {
    name: 'Evil Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 9,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(6) + DEF(9) + HP(0) + MOV(0) + RNG(4)
    image: 'Evil Wizard.png'
  },
  {
    name: 'Evil Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 9,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(6) + DEF(9) + HP(1) + MOV(0) + RNG(4)
    image: 'Evil Wizard.png'
  },
  {
    name: 'Evil Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 9,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(6) + DEF(9) + HP(2) + MOV(0) + RNG(4)
    image: 'Evil Wizard.png'
  },
  {
    name: 'Evil Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 9,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(6) + DEF(9) + HP(0) + MOV(2) + RNG(0)
    image: 'Evil Wizard.png'
  },
  {
    name: 'Evil Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 9,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(6) + DEF(9) + HP(1) + MOV(2) + RNG(0)
    image: 'Evil Wizard.png'
  },
  {
    name: 'Evil Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 9,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(6) + DEF(9) + HP(2) + MOV(2) + RNG(0)
    image: 'Evil Wizard.png'
  },
  {
    name: 'Evil Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 9,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(6) + DEF(9) + HP(0) + MOV(2) + RNG(2)
    image: 'Evil Wizard.png'
  },
  {
    name: 'Evil Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 9,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(6) + DEF(9) + HP(1) + MOV(2) + RNG(2)
    image: 'Evil Wizard.png'
  },
  {
    name: 'Evil Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 9,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(6) + DEF(9) + HP(2) + MOV(2) + RNG(2)
    image: 'Evil Wizard.png'
  },
  {
    name: 'Evil Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 9,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(6) + DEF(9) + HP(0) + MOV(4) + RNG(0)
    image: 'Evil Wizard.png'
  },
  {
    name: 'Evil Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 9,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(6) + DEF(9) + HP(1) + MOV(4) + RNG(0)
    image: 'Evil Wizard.png'
  },
  {
    name: 'Evil Wizard',
    type: 'minion',
    subType: 'minionbasic',
    atk: 6,
    def: 9,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(6) + DEF(9) + HP(2) + MOV(4) + RNG(0)
    image: 'Evil Wizard.png'
  },

  // Name: Cthulhu (ATK: 7, DEF: 0)
  {
    name: 'Cthulhu',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 0,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 7, // ATK(7) + DEF(0) + HP(0) + MOV(0) + RNG(0)
    image: 'Cthulhu.png'
  },
  {
    name: 'Cthulhu',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 0,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(7) + DEF(0) + HP(1) + MOV(0) + RNG(0)
    image: 'Cthulhu.png'
  },
  {
    name: 'Cthulhu',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 0,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(7) + DEF(0) + HP(2) + MOV(0) + RNG(0)
    image: 'Cthulhu.png'
  },
  {
    name: 'Cthulhu',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 0,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(7) + DEF(0) + HP(0) + MOV(0) + RNG(2)
    image: 'Cthulhu.png'
  },
  {
    name: 'Cthulhu',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 0,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(7) + DEF(0) + HP(1) + MOV(0) + RNG(2)
    image: 'Cthulhu.png'
  },
  {
    name: 'Cthulhu',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 0,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(7) + DEF(0) + HP(2) + MOV(0) + RNG(2)
    image: 'Cthulhu.png'
  },
  {
    name: 'Cthulhu',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 0,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(7) + DEF(0) + HP(0) + MOV(0) + RNG(4)
    image: 'Cthulhu.png'
  },
  {
    name: 'Cthulhu',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 0,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(7) + DEF(0) + HP(1) + MOV(0) + RNG(4)
    image: 'Cthulhu.png'
  },
  {
    name: 'Cthulhu',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 0,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(7) + DEF(0) + HP(2) + MOV(0) + RNG(4)
    image: 'Cthulhu.png'
  },
  {
    name: 'Cthulhu',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 0,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(7) + DEF(0) + HP(0) + MOV(2) + RNG(0)
    image: 'Cthulhu.png'
  },
  {
    name: 'Cthulhu',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 0,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(7) + DEF(0) + HP(1) + MOV(2) + RNG(0)
    image: 'Cthulhu.png'
  },
  {
    name: 'Cthulhu',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 0,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(7) + DEF(0) + HP(2) + MOV(2) + RNG(0)
    image: 'Cthulhu.png'
  },
  {
    name: 'Cthulhu',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 0,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(7) + DEF(0) + HP(0) + MOV(2) + RNG(2)
    image: 'Cthulhu.png'
  },
  {
    name: 'Cthulhu',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 0,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(7) + DEF(0) + HP(1) + MOV(2) + RNG(2)
    image: 'Cthulhu.png'
  },
  {
    name: 'Cthulhu',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 0,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(7) + DEF(0) + HP(2) + MOV(2) + RNG(2)
    image: 'Cthulhu.png'
  },
  {
    name: 'Cthulhu',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 0,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(7) + DEF(0) + HP(0) + MOV(4) + RNG(0)
    image: 'Cthulhu.png'
  },
  {
    name: 'Cthulhu',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 0,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(7) + DEF(0) + HP(1) + MOV(4) + RNG(0)
    image: 'Cthulhu.png'
  },
  {
    name: 'Cthulhu',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 0,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(7) + DEF(0) + HP(2) + MOV(4) + RNG(0)
    image: 'Cthulhu.png'
  },
  // Name: Reaper (ATK: 7, DEF: 1)
  {
    name: 'Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 1,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(7) + DEF(1) + HP(0) + MOV(0) + RNG(0)
    image: 'Reaper.png'
  },
  {
    name: 'Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 1,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(7) + DEF(1) + HP(1) + MOV(0) + RNG(0)
    image: 'Reaper.png'
  },
  {
    name: 'Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 1,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(7) + DEF(1) + HP(2) + MOV(0) + RNG(0)
    image: 'Reaper.png'
  },
  {
    name: 'Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 1,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(7) + DEF(1) + HP(0) + MOV(0) + RNG(2)
    image: 'Reaper.png'
  },
  {
    name: 'Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 1,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(7) + DEF(1) + HP(1) + MOV(0) + RNG(2)
    image: 'Reaper.png'
  },
  {
    name: 'Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 1,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(7) + DEF(1) + HP(2) + MOV(0) + RNG(2)
    image: 'Reaper.png'
  },
  {
    name: 'Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 1,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(7) + DEF(1) + HP(0) + MOV(0) + RNG(4)
    image: 'Reaper.png'
  },
  {
    name: 'Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 1,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(7) + DEF(1) + HP(1) + MOV(0) + RNG(4)
    image: 'Reaper.png'
  },
  {
    name: 'Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 1,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(7) + DEF(1) + HP(2) + MOV(0) + RNG(4)
    image: 'Reaper.png'
  },
  {
    name: 'Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 1,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(7) + DEF(1) + HP(0) + MOV(2) + RNG(0)
    image: 'Reaper.png'
  },
  {
    name: 'Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 1,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(7) + DEF(1) + HP(1) + MOV(2) + RNG(0)
    image: 'Reaper.png'
  },
  {
    name: 'Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 1,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(7) + DEF(1) + HP(2) + MOV(2) + RNG(0)
    image: 'Reaper.png'
  },
  {
    name: 'Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 1,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(7) + DEF(1) + HP(0) + MOV(2) + RNG(2)
    image: 'Reaper.png'
  },
  {
    name: 'Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 1,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(7) + DEF(1) + HP(1) + MOV(2) + RNG(2)
    image: 'Reaper.png'
  },
  {
    name: 'Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 1,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(7) + DEF(1) + HP(2) + MOV(2) + RNG(2)
    image: 'Reaper.png'
  },
  {
    name: 'Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 1,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(7) + DEF(1) + HP(0) + MOV(4) + RNG(0)
    image: 'Reaper.png'
  },
  {
    name: 'Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 1,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(7) + DEF(1) + HP(1) + MOV(4) + RNG(0)
    image: 'Reaper.png'
  },
  {
    name: 'Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 1,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(7) + DEF(1) + HP(2) + MOV(4) + RNG(0)
    image: 'Reaper.png'
  },
  // Name: Eye (ATK: 7, DEF: 2)
  {
    name: 'Eye',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 2,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(7) + DEF(2) + HP(0) + MOV(0) + RNG(0)
    image: 'Eye.png'
  },
  {
    name: 'Eye',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 2,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(7) + DEF(2) + HP(1) + MOV(0) + RNG(0)
    image: 'Eye.png'
  },
  {
    name: 'Eye',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 2,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(7) + DEF(2) + HP(2) + MOV(0) + RNG(0)
    image: 'Eye.png'
  },
  {
    name: 'Eye',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 2,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(7) + DEF(2) + HP(0) + MOV(0) + RNG(2)
    image: 'Eye.png'
  },
  {
    name: 'Eye',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 2,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(7) + DEF(2) + HP(1) + MOV(0) + RNG(2)
    image: 'Eye.png'
  },
  {
    name: 'Eye',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 2,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(7) + DEF(2) + HP(2) + MOV(0) + RNG(2)
    image: 'Eye.png'
  },
  {
    name: 'Eye',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 2,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(7) + DEF(2) + HP(0) + MOV(0) + RNG(4)
    image: 'Eye.png'
  },
  {
    name: 'Eye',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 2,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(7) + DEF(2) + HP(1) + MOV(0) + RNG(4)
    image: 'Eye.png'
  },
  {
    name: 'Eye',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 2,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(7) + DEF(2) + HP(2) + MOV(0) + RNG(4)
    image: 'Eye.png'
  },
  {
    name: 'Eye',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 2,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(7) + DEF(2) + HP(0) + MOV(2) + RNG(0)
    image: 'Eye.png'
  },
  {
    name: 'Eye',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 2,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(7) + DEF(2) + HP(1) + MOV(2) + RNG(0)
    image: 'Eye.png'
  },
  {
    name: 'Eye',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 2,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(7) + DEF(2) + HP(2) + MOV(2) + RNG(0)
    image: 'Eye.png'
  },
  {
    name: 'Eye',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 2,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(7) + DEF(2) + HP(0) + MOV(2) + RNG(2)
    image: 'Eye.png'
  },
  {
    name: 'Eye',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 2,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(7) + DEF(2) + HP(1) + MOV(2) + RNG(2)
    image: 'Eye.png'
  },
  {
    name: 'Eye',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 2,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(7) + DEF(2) + HP(2) + MOV(2) + RNG(2)
    image: 'Eye.png'
  },
  {
    name: 'Eye',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 2,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(7) + DEF(2) + HP(0) + MOV(4) + RNG(0)
    image: 'Eye.png'
  },
  {
    name: 'Eye',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 2,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(7) + DEF(2) + HP(1) + MOV(4) + RNG(0)
    image: 'Eye.png'
  },
  {
    name: 'Eye',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 2,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(7) + DEF(2) + HP(2) + MOV(4) + RNG(0)
    image: 'Eye.png'
  },
  // Name: The Forgotten (ATK: 7, DEF: 3)
  {
    name: 'The Forgotten',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 3,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(7) + DEF(3) + HP(0) + MOV(0) + RNG(0)
    image: 'The Forgotten.png'
  },
  {
    name: 'The Forgotten',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 3,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(7) + DEF(3) + HP(1) + MOV(0) + RNG(0)
    image: 'The Forgotten.png'
  },
  {
    name: 'The Forgotten',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 3,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(7) + DEF(3) + HP(2) + MOV(0) + RNG(0)
    image: 'The Forgotten.png'
  },
  {
    name: 'The Forgotten',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 3,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(7) + DEF(3) + HP(0) + MOV(0) + RNG(2)
    image: 'The Forgotten.png'
  },
  {
    name: 'The Forgotten',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 3,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(7) + DEF(3) + HP(1) + MOV(0) + RNG(2)
    image: 'The Forgotten.png'
  },
  {
    name: 'The Forgotten',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 3,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(7) + DEF(3) + HP(2) + MOV(0) + RNG(2)
    image: 'The Forgotten.png'
  },
  {
    name: 'The Forgotten',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 3,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(7) + DEF(3) + HP(0) + MOV(0) + RNG(4)
    image: 'The Forgotten.png'
  },
  {
    name: 'The Forgotten',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 3,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(7) + DEF(3) + HP(1) + MOV(0) + RNG(4)
    image: 'The Forgotten.png'
  },
  {
    name: 'The Forgotten',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 3,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(7) + DEF(3) + HP(2) + MOV(0) + RNG(4)
    image: 'The Forgotten.png'
  },
  {
    name: 'The Forgotten',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 3,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(7) + DEF(3) + HP(0) + MOV(2) + RNG(0)
    image: 'The Forgotten.png'
  },
  {
    name: 'The Forgotten',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 3,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(7) + DEF(3) + HP(1) + MOV(2) + RNG(0)
    image: 'The Forgotten.png'
  },
  {
    name: 'The Forgotten',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 3,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(7) + DEF(3) + HP(2) + MOV(2) + RNG(0)
    image: 'The Forgotten.png'
  },
  {
    name: 'The Forgotten',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 3,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(7) + DEF(3) + HP(0) + MOV(2) + RNG(2)
    image: 'The Forgotten.png'
  },
  {
    name: 'The Forgotten',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 3,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(7) + DEF(3) + HP(1) + MOV(2) + RNG(2)
    image: 'The Forgotten.png'
  },
  {
    name: 'The Forgotten',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 3,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(7) + DEF(3) + HP(2) + MOV(2) + RNG(2)
    image: 'The Forgotten.png'
  },
  {
    name: 'The Forgotten',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 3,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(7) + DEF(3) + HP(0) + MOV(4) + RNG(0)
    image: 'The Forgotten.png'
  },
  {
    name: 'The Forgotten',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 3,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(7) + DEF(3) + HP(1) + MOV(4) + RNG(0)
    image: 'The Forgotten.png'
  },
  {
    name: 'The Forgotten',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 3,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(7) + DEF(3) + HP(2) + MOV(4) + RNG(0)
    image: 'The Forgotten.png'
  },
  // Name: Demon (ATK: 7, DEF: 4)
  {
    name: 'Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 4,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(7) + DEF(4) + HP(0) + MOV(0) + RNG(0)
    image: 'Demon.png'
  },
  {
    name: 'Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 4,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(7) + DEF(4) + HP(1) + MOV(0) + RNG(0)
    image: 'Demon.png'
  },
  {
    name: 'Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 4,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(7) + DEF(4) + HP(2) + MOV(0) + RNG(0)
    image: 'Demon.png'
  },
  {
    name: 'Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 4,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(7) + DEF(4) + HP(0) + MOV(0) + RNG(2)
    image: 'Demon.png'
  },
  {
    name: 'Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 4,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(7) + DEF(4) + HP(1) + MOV(0) + RNG(2)
    image: 'Demon.png'
  },
  {
    name: 'Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 4,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(7) + DEF(4) + HP(2) + MOV(0) + RNG(2)
    image: 'Demon.png'
  },
  {
    name: 'Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 4,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(7) + DEF(4) + HP(0) + MOV(0) + RNG(4)
    image: 'Demon.png'
  },
  {
    name: 'Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 4,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(7) + DEF(4) + HP(1) + MOV(0) + RNG(4)
    image: 'Demon.png'
  },
  {
    name: 'Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 4,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(7) + DEF(4) + HP(2) + MOV(0) + RNG(4)
    image: 'Demon.png'
  },
  {
    name: 'Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 4,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(7) + DEF(4) + HP(0) + MOV(2) + RNG(0)
    image: 'Demon.png'
  },
  {
    name: 'Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 4,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(7) + DEF(4) + HP(1) + MOV(2) + RNG(0)
    image: 'Demon.png'
  },
  {
    name: 'Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 4,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(7) + DEF(4) + HP(2) + MOV(2) + RNG(0)
    image: 'Demon.png'
  },
  {
    name: 'Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 4,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(7) + DEF(4) + HP(0) + MOV(2) + RNG(2)
    image: 'Demon.png'
  },
  {
    name: 'Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 4,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(7) + DEF(4) + HP(1) + MOV(2) + RNG(2)
    image: 'Demon.png'
  },
  {
    name: 'Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 4,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(7) + DEF(4) + HP(2) + MOV(2) + RNG(2)
    image: 'Demon.png'
  },
  {
    name: 'Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 4,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(7) + DEF(4) + HP(0) + MOV(4) + RNG(0)
    image: 'Demon.png'
  },
  {
    name: 'Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 4,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(7) + DEF(4) + HP(1) + MOV(4) + RNG(0)
    image: 'Demon.png'
  },
  {
    name: 'Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 4,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(7) + DEF(4) + HP(2) + MOV(4) + RNG(0)
    image: 'Demon.png'
  },
  // Name: Fire Serpent (ATK: 7, DEF: 5)
  {
    name: 'Fire Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 5,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(7) + DEF(5) + HP(0) + MOV(0) + RNG(0)
    image: 'Fire Serpent.png'
  },
  {
    name: 'Fire Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 5,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(7) + DEF(5) + HP(1) + MOV(0) + RNG(0)
    image: 'Fire Serpent.png'
  },
  {
    name: 'Fire Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 5,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(7) + DEF(5) + HP(2) + MOV(0) + RNG(0)
    image: 'Fire Serpent.png'
  },
  {
    name: 'Fire Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 5,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(7) + DEF(5) + HP(0) + MOV(0) + RNG(2)
    image: 'Fire Serpent.png'
  },
  {
    name: 'Fire Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 5,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(7) + DEF(5) + HP(1) + MOV(0) + RNG(2)
    image: 'Fire Serpent.png'
  },
  {
    name: 'Fire Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 5,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(7) + DEF(5) + HP(2) + MOV(0) + RNG(2)
    image: 'Fire Serpent.png'
  },
  {
    name: 'Fire Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 5,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(7) + DEF(5) + HP(0) + MOV(0) + RNG(4)
    image: 'Fire Serpent.png'
  },
  {
    name: 'Fire Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 5,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(7) + DEF(5) + HP(1) + MOV(0) + RNG(4)
    image: 'Fire Serpent.png'
  },
  {
    name: 'Fire Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 5,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(7) + DEF(5) + HP(2) + MOV(0) + RNG(4)
    image: 'Fire Serpent.png'
  },
  {
    name: 'Fire Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 5,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(7) + DEF(5) + HP(0) + MOV(2) + RNG(0)
    image: 'Fire Serpent.png'
  },
  {
    name: 'Fire Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 5,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(7) + DEF(5) + HP(1) + MOV(2) + RNG(0)
    image: 'Fire Serpent.png'
  },
  {
    name: 'Fire Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 5,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(7) + DEF(5) + HP(2) + MOV(2) + RNG(0)
    image: 'Fire Serpent.png'
  },
  {
    name: 'Fire Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 5,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(7) + DEF(5) + HP(0) + MOV(2) + RNG(2)
    image: 'Fire Serpent.png'
  },
  {
    name: 'Fire Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 5,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(7) + DEF(5) + HP(1) + MOV(2) + RNG(2)
    image: 'Fire Serpent.png'
  },
  {
    name: 'Fire Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 5,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(7) + DEF(5) + HP(2) + MOV(2) + RNG(2)
    image: 'Fire Serpent.png'
  },
  {
    name: 'Fire Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 5,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(7) + DEF(5) + HP(0) + MOV(4) + RNG(0)
    image: 'Fire Serpent.png'
  },
  {
    name: 'Fire Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 5,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(7) + DEF(5) + HP(1) + MOV(4) + RNG(0)
    image: 'Fire Serpent.png'
  },
  {
    name: 'Fire Serpent',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 5,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(7) + DEF(5) + HP(2) + MOV(4) + RNG(0)
    image: 'Fire Serpent.png'
  },
  // Name: Imp Sorcerer (ATK: 7, DEF: 6)
  {
    name: 'Imp Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 6,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(7) + DEF(6) + HP(0) + MOV(0) + RNG(0)
    image: 'Imp Sorcerer.png'
  },
  {
    name: 'Imp Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 6,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(7) + DEF(6) + HP(1) + MOV(0) + RNG(0)
    image: 'Imp Sorcerer.png'
  },
  {
    name: 'Imp Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 6,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(7) + DEF(6) + HP(2) + MOV(0) + RNG(0)
    image: 'Imp Sorcerer.png'
  },
  {
    name: 'Imp Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 6,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(7) + DEF(6) + HP(0) + MOV(0) + RNG(2)
    image: 'Imp Sorcerer.png'
  },
  {
    name: 'Imp Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 6,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(7) + DEF(6) + HP(1) + MOV(0) + RNG(2)
    image: 'Imp Sorcerer.png'
  },
  {
    name: 'Imp Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 6,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(7) + DEF(6) + HP(2) + MOV(0) + RNG(2)
    image: 'Imp Sorcerer.png'
  },
  {
    name: 'Imp Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 6,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(7) + DEF(6) + HP(0) + MOV(0) + RNG(4)
    image: 'Imp Sorcerer.png'
  },
  {
    name: 'Imp Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 6,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(7) + DEF(6) + HP(1) + MOV(0) + RNG(4)
    image: 'Imp Sorcerer.png'
  },
  {
    name: 'Imp Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 6,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(7) + DEF(6) + HP(2) + MOV(0) + RNG(4)
    image: 'Imp Sorcerer.png'
  },
  {
    name: 'Imp Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 6,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(7) + DEF(6) + HP(0) + MOV(2) + RNG(0)
    image: 'Imp Sorcerer.png'
  },
  {
    name: 'Imp Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 6,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(7) + DEF(6) + HP(1) + MOV(2) + RNG(0)
    image: 'Imp Sorcerer.png'
  },
  {
    name: 'Imp Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 6,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(7) + DEF(6) + HP(2) + MOV(2) + RNG(0)
    image: 'Imp Sorcerer.png'
  },
  {
    name: 'Imp Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 6,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(7) + DEF(6) + HP(0) + MOV(2) + RNG(2)
    image: 'Imp Sorcerer.png'
  },
  {
    name: 'Imp Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 6,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(7) + DEF(6) + HP(1) + MOV(2) + RNG(2)
    image: 'Imp Sorcerer.png'
  },
  {
    name: 'Imp Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 6,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(7) + DEF(6) + HP(2) + MOV(2) + RNG(2)
    image: 'Imp Sorcerer.png'
  },
  {
    name: 'Imp Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 6,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(7) + DEF(6) + HP(0) + MOV(4) + RNG(0)
    image: 'Imp Sorcerer.png'
  },
  {
    name: 'Imp Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 6,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(7) + DEF(6) + HP(1) + MOV(4) + RNG(0)
    image: 'Imp Sorcerer.png'
  },
  {
    name: 'Imp Sorcerer',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 6,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(7) + DEF(6) + HP(2) + MOV(4) + RNG(0)
    image: 'Imp Sorcerer.png'
  },
  // Name: Red Dragon (ATK: 7, DEF: 7)
  {
    name: 'Red Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 7,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(7) + DEF(7) + HP(0) + MOV(0) + RNG(0)
    image: 'Red Dragon.png'
  },
  {
    name: 'Red Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 7,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(7) + DEF(7) + HP(1) + MOV(0) + RNG(0)
    image: 'Red Dragon.png'
  },
  {
    name: 'Red Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 7,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(7) + DEF(7) + HP(2) + MOV(0) + RNG(0)
    image: 'Red Dragon.png'
  },
  {
    name: 'Red Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 7,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(7) + DEF(7) + HP(0) + MOV(0) + RNG(2)
    image: 'Red Dragon.png'
  },
  {
    name: 'Red Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 7,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(7) + DEF(7) + HP(1) + MOV(0) + RNG(2)
    image: 'Red Dragon.png'
  },
  {
    name: 'Red Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 7,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(7) + DEF(7) + HP(2) + MOV(0) + RNG(2)
    image: 'Red Dragon.png'
  },
  {
    name: 'Red Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 7,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(7) + DEF(7) + HP(0) + MOV(0) + RNG(4)
    image: 'Red Dragon.png'
  },
  {
    name: 'Red Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 7,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(7) + DEF(7) + HP(1) + MOV(0) + RNG(4)
    image: 'Red Dragon.png'
  },
  {
    name: 'Red Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 7,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(7) + DEF(7) + HP(2) + MOV(0) + RNG(4)
    image: 'Red Dragon.png'
  },
  {
    name: 'Red Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 7,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(7) + DEF(7) + HP(0) + MOV(2) + RNG(0)
    image: 'Red Dragon.png'
  },
  {
    name: 'Red Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 7,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(7) + DEF(7) + HP(1) + MOV(2) + RNG(0)
    image: 'Red Dragon.png'
  },
  {
    name: 'Red Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 7,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(7) + DEF(7) + HP(2) + MOV(2) + RNG(0)
    image: 'Red Dragon.png'
  },
  {
    name: 'Red Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 7,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(7) + DEF(7) + HP(0) + MOV(2) + RNG(2)
    image: 'Red Dragon.png'
  },
  {
    name: 'Red Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 7,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(7) + DEF(7) + HP(1) + MOV(2) + RNG(2)
    image: 'Red Dragon.png'
  },
  {
    name: 'Red Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 7,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(7) + DEF(7) + HP(2) + MOV(2) + RNG(2)
    image: 'Red Dragon.png'
  },
  {
    name: 'Red Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 7,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(7) + DEF(7) + HP(0) + MOV(4) + RNG(0)
    image: 'Red Dragon.png'
  },
  {
    name: 'Red Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 7,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(7) + DEF(7) + HP(1) + MOV(4) + RNG(0)
    image: 'Red Dragon.png'
  },
  {
    name: 'Red Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 7,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(7) + DEF(7) + HP(2) + MOV(4) + RNG(0)
    image: 'Red Dragon.png'
  },
  // Name: Fire Cleric (ATK: 7, DEF: 8)
  {
    name: 'Fire Cleric',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 8,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(7) + DEF(8) + HP(0) + MOV(0) + RNG(0)
    image: 'Fire Cleric.png'
  },
  {
    name: 'Fire Cleric',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 8,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(7) + DEF(8) + HP(1) + MOV(0) + RNG(0)
    image: 'Fire Cleric.png'
  },
  {
    name: 'Fire Cleric',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 8,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(7) + DEF(8) + HP(2) + MOV(0) + RNG(0)
    image: 'Fire Cleric.png'
  },
  {
    name: 'Fire Cleric',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 8,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(7) + DEF(8) + HP(0) + MOV(0) + RNG(2)
    image: 'Fire Cleric.png'
  },
  {
    name: 'Fire Cleric',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 8,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(7) + DEF(8) + HP(1) + MOV(0) + RNG(2)
    image: 'Fire Cleric.png'
  },
  {
    name: 'Fire Cleric',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 8,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(7) + DEF(8) + HP(2) + MOV(0) + RNG(2)
    image: 'Fire Cleric.png'
  },
  {
    name: 'Fire Cleric',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 8,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(7) + DEF(8) + HP(0) + MOV(0) + RNG(4)
    image: 'Fire Cleric.png'
  },
  {
    name: 'Fire Cleric',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 8,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(7) + DEF(8) + HP(1) + MOV(0) + RNG(4)
    image: 'Fire Cleric.png'
  },
  {
    name: 'Fire Cleric',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 8,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(7) + DEF(8) + HP(2) + MOV(0) + RNG(4)
    image: 'Fire Cleric.png'
  },
  {
    name: 'Fire Cleric',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 8,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(7) + DEF(8) + HP(0) + MOV(2) + RNG(0)
    image: 'Fire Cleric.png'
  },
  {
    name: 'Fire Cleric',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 8,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(7) + DEF(8) + HP(1) + MOV(2) + RNG(0)
    image: 'Fire Cleric.png'
  },
  {
    name: 'Fire Cleric',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 8,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(7) + DEF(8) + HP(2) + MOV(2) + RNG(0)
    image: 'Fire Cleric.png'
  },
  {
    name: 'Fire Cleric',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 8,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(7) + DEF(8) + HP(0) + MOV(2) + RNG(2)
    image: 'Fire Cleric.png'
  },
  {
    name: 'Fire Cleric',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 8,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(7) + DEF(8) + HP(1) + MOV(2) + RNG(2)
    image: 'Fire Cleric.png'
  },
  {
    name: 'Fire Cleric',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 8,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(7) + DEF(8) + HP(2) + MOV(2) + RNG(2)
    image: 'Fire Cleric.png'
  },
  {
    name: 'Fire Cleric',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 8,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(7) + DEF(8) + HP(0) + MOV(4) + RNG(0)
    image: 'Fire Cleric.png'
  },
  {
    name: 'Fire Cleric',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 8,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(7) + DEF(8) + HP(1) + MOV(4) + RNG(0)
    image: 'Fire Cleric.png'
  },
  {
    name: 'Fire Cleric',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 8,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(7) + DEF(8) + HP(2) + MOV(4) + RNG(0)
    image: 'Fire Cleric.png'
  },
  // Name: Flaming Skull (ATK: 7, DEF: 9)
  {
    name: 'Flaming Skull',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 9,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(7) + DEF(9) + HP(0) + MOV(0) + RNG(0)
    image: 'Flaming Skull.png'
  },
  {
    name: 'Flaming Skull',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 9,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(7) + DEF(9) + HP(1) + MOV(0) + RNG(0)
    image: 'Flaming Skull.png'
  },
  {
    name: 'Flaming Skull',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 9,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(7) + DEF(9) + HP(2) + MOV(0) + RNG(0)
    image: 'Flaming Skull.png'
  },
  {
    name: 'Flaming Skull',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 9,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(7) + DEF(9) + HP(0) + MOV(0) + RNG(2)
    image: 'Flaming Skull.png'
  },
  {
    name: 'Flaming Skull',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 9,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(7) + DEF(9) + HP(1) + MOV(0) + RNG(2)
    image: 'Flaming Skull.png'
  },
  {
    name: 'Flaming Skull',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 9,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(7) + DEF(9) + HP(2) + MOV(0) + RNG(2)
    image: 'Flaming Skull.png'
  },
  {
    name: 'Flaming Skull',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 9,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(7) + DEF(9) + HP(0) + MOV(0) + RNG(4)
    image: 'Flaming Skull.png'
  },
  {
    name: 'Flaming Skull',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 9,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(7) + DEF(9) + HP(1) + MOV(0) + RNG(4)
    image: 'Flaming Skull.png'
  },
  {
    name: 'Flaming Skull',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 9,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 22, // ATK(7) + DEF(9) + HP(2) + MOV(0) + RNG(4)
    image: 'Flaming Skull.png'
  },
  {
    name: 'Flaming Skull',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 9,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(7) + DEF(9) + HP(0) + MOV(2) + RNG(0)
    image: 'Flaming Skull.png'
  },
  {
    name: 'Flaming Skull',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 9,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(7) + DEF(9) + HP(1) + MOV(2) + RNG(0)
    image: 'Flaming Skull.png'
  },
  {
    name: 'Flaming Skull',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 9,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(7) + DEF(9) + HP(2) + MOV(2) + RNG(0)
    image: 'Flaming Skull.png'
  },
  {
    name: 'Flaming Skull',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 9,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(7) + DEF(9) + HP(0) + MOV(2) + RNG(2)
    image: 'Flaming Skull.png'
  },
  {
    name: 'Flaming Skull',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 9,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(7) + DEF(9) + HP(1) + MOV(2) + RNG(2)
    image: 'Flaming Skull.png'
  },
  {
    name: 'Flaming Skull',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 9,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 22, // ATK(7) + DEF(9) + HP(2) + MOV(2) + RNG(2)
    image: 'Flaming Skull.png'
  },
  {
    name: 'Flaming Skull',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 9,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(7) + DEF(9) + HP(0) + MOV(4) + RNG(0)
    image: 'Flaming Skull.png'
  },
  {
    name: 'Flaming Skull',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 9,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(7) + DEF(9) + HP(1) + MOV(4) + RNG(0)
    image: 'Flaming Skull.png'
  },
  {
    name: 'Flaming Skull',
    type: 'minion',
    subType: 'minionbasic',
    atk: 7,
    def: 9,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 22, // ATK(7) + DEF(9) + HP(2) + MOV(4) + RNG(0)
    image: 'Flaming Skull.png'
  },

  
  // Name: Skull On A Stick (ATK: 8, DEF: 0)
  {
    name: 'Skull On A Stick',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 0,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 8, // ATK(8) + DEF(0) + HP(0) + MOV(0) + RNG(0)
    image: 'Skull On A Stick.png'
  },
  {
    name: 'Skull On A Stick',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 0,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(8) + DEF(0) + HP(1) + MOV(0) + RNG(0)
    image: 'Skull On A Stick.png'
  },
  {
    name: 'Skull On A Stick',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 0,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(8) + DEF(0) + HP(2) + MOV(0) + RNG(0)
    image: 'Skull On A Stick.png'
  },
  {
    name: 'Skull On A Stick',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 0,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(8) + DEF(0) + HP(0) + MOV(0) + RNG(2)
    image: 'Skull On A Stick.png'
  },
  {
    name: 'Skull On A Stick',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 0,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(8) + DEF(0) + HP(1) + MOV(0) + RNG(2)
    image: 'Skull On A Stick.png'
  },
  {
    name: 'Skull On A Stick',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 0,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(8) + DEF(0) + HP(2) + MOV(0) + RNG(2)
    image: 'Skull On A Stick.png'
  },
  {
    name: 'Skull On A Stick',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 0,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(8) + DEF(0) + HP(0) + MOV(0) + RNG(4)
    image: 'Skull On A Stick.png'
  },
  {
    name: 'Skull On A Stick',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 0,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(8) + DEF(0) + HP(1) + MOV(0) + RNG(4)
    image: 'Skull On A Stick.png'
  },
  {
    name: 'Skull On A Stick',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 0,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(8) + DEF(0) + HP(2) + MOV(0) + RNG(4)
    image: 'Skull On A Stick.png'
  },
  {
    name: 'Skull On A Stick',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 0,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(8) + DEF(0) + HP(0) + MOV(2) + RNG(0)
    image: 'Skull On A Stick.png'
  },
  {
    name: 'Skull On A Stick',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 0,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(8) + DEF(0) + HP(1) + MOV(2) + RNG(0)
    image: 'Skull On A Stick.png'
  },
  {
    name: 'Skull On A Stick',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 0,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(8) + DEF(0) + HP(2) + MOV(2) + RNG(0)
    image: 'Skull On A Stick.png'
  },
  {
    name: 'Skull On A Stick',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 0,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(8) + DEF(0) + HP(0) + MOV(2) + RNG(2)
    image: 'Skull On A Stick.png'
  },
  {
    name: 'Skull On A Stick',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 0,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(8) + DEF(0) + HP(1) + MOV(2) + RNG(2)
    image: 'Skull On A Stick.png'
  },
  {
    name: 'Skull On A Stick',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 0,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(8) + DEF(0) + HP(2) + MOV(2) + RNG(2)
    image: 'Skull On A Stick.png'
  },
  {
    name: 'Skull On A Stick',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 0,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(8) + DEF(0) + HP(0) + MOV(4) + RNG(0)
    image: 'Skull On A Stick.png'
  },
  {
    name: 'Skull On A Stick',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 0,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(8) + DEF(0) + HP(1) + MOV(4) + RNG(0)
    image: 'Skull On A Stick.png'
  },
  {
    name: 'Skull On A Stick',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 0,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(8) + DEF(0) + HP(2) + MOV(4) + RNG(0)
    image: 'Skull On A Stick.png'
  },
  // Name: Skull Reaper (ATK: 8, DEF: 1)
  {
    name: 'Skull Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 1,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(8) + DEF(1) + HP(0) + MOV(0) + RNG(0)
    image: 'Skull Reaper.png'
  },
  {
    name: 'Skull Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 1,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(8) + DEF(1) + HP(1) + MOV(0) + RNG(0)
    image: 'Skull Reaper.png'
  },
  {
    name: 'Skull Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 1,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(8) + DEF(1) + HP(2) + MOV(0) + RNG(0)
    image: 'Skull Reaper.png'
  },
  {
    name: 'Skull Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 1,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(8) + DEF(1) + HP(0) + MOV(0) + RNG(2)
    image: 'Skull Reaper.png'
  },
  {
    name: 'Skull Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 1,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(8) + DEF(1) + HP(1) + MOV(0) + RNG(2)
    image: 'Skull Reaper.png'
  },
  {
    name: 'Skull Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 1,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(8) + DEF(1) + HP(2) + MOV(0) + RNG(2)
    image: 'Skull Reaper.png'
  },
  {
    name: 'Skull Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 1,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(8) + DEF(1) + HP(0) + MOV(0) + RNG(4)
    image: 'Skull Reaper.png'
  },
  {
    name: 'Skull Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 1,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(8) + DEF(1) + HP(1) + MOV(0) + RNG(4)
    image: 'Skull Reaper.png'
  },
  {
    name: 'Skull Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 1,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(8) + DEF(1) + HP(2) + MOV(0) + RNG(4)
    image: 'Skull Reaper.png'
  },
  {
    name: 'Skull Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 1,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(8) + DEF(1) + HP(0) + MOV(2) + RNG(0)
    image: 'Skull Reaper.png'
  },
  {
    name: 'Skull Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 1,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(8) + DEF(1) + HP(1) + MOV(2) + RNG(0)
    image: 'Skull Reaper.png'
  },
  {
    name: 'Skull Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 1,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(8) + DEF(1) + HP(2) + MOV(2) + RNG(0)
    image: 'Skull Reaper.png'
  },
  {
    name: 'Skull Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 1,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(8) + DEF(1) + HP(0) + MOV(2) + RNG(2)
    image: 'Skull Reaper.png'
  },
  {
    name: 'Skull Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 1,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(8) + DEF(1) + HP(1) + MOV(2) + RNG(2)
    image: 'Skull Reaper.png'
  },
  {
    name: 'Skull Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 1,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(8) + DEF(1) + HP(2) + MOV(2) + RNG(2)
    image: 'Skull Reaper.png'
  },
  {
    name: 'Skull Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 1,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(8) + DEF(1) + HP(0) + MOV(4) + RNG(0)
    image: 'Skull Reaper.png'
  },
  {
    name: 'Skull Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 1,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(8) + DEF(1) + HP(1) + MOV(4) + RNG(0)
    image: 'Skull Reaper.png'
  },
  {
    name: 'Skull Reaper',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 1,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(8) + DEF(1) + HP(2) + MOV(4) + RNG(0)
    image: 'Skull Reaper.png'
  },
  // Name: Goat Lord (ATK: 8, DEF: 2)
  {
    name: 'Goat Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 2,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(8) + DEF(2) + HP(0) + MOV(0) + RNG(0)
    image: 'Goat Lord.png'
  },
  {
    name: 'Goat Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 2,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(8) + DEF(2) + HP(1) + MOV(0) + RNG(0)
    image: 'Goat Lord.png'
  },
  {
    name: 'Goat Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 2,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(8) + DEF(2) + HP(2) + MOV(0) + RNG(0)
    image: 'Goat Lord.png'
  },
  {
    name: 'Goat Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 2,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(8) + DEF(2) + HP(0) + MOV(0) + RNG(2)
    image: 'Goat Lord.png'
  },
  {
    name: 'Goat Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 2,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(8) + DEF(2) + HP(1) + MOV(0) + RNG(2)
    image: 'Goat Lord.png'
  },
  {
    name: 'Goat Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 2,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(8) + DEF(2) + HP(2) + MOV(0) + RNG(2)
    image: 'Goat Lord.png'
  },
  {
    name: 'Goat Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 2,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(8) + DEF(2) + HP(0) + MOV(0) + RNG(4)
    image: 'Goat Lord.png'
  },
  {
    name: 'Goat Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 2,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(8) + DEF(2) + HP(1) + MOV(0) + RNG(4)
    image: 'Goat Lord.png'
  },
  {
    name: 'Goat Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 2,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(8) + DEF(2) + HP(2) + MOV(0) + RNG(4)
    image: 'Goat Lord.png'
  },
  {
    name: 'Goat Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 2,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(8) + DEF(2) + HP(0) + MOV(2) + RNG(0)
    image: 'Goat Lord.png'
  },
  {
    name: 'Goat Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 2,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(8) + DEF(2) + HP(1) + MOV(2) + RNG(0)
    image: 'Goat Lord.png'
  },
  {
    name: 'Goat Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 2,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(8) + DEF(2) + HP(2) + MOV(2) + RNG(0)
    image: 'Goat Lord.png'
  },
  {
    name: 'Goat Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 2,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(8) + DEF(2) + HP(0) + MOV(2) + RNG(2)
    image: 'Goat Lord.png'
  },
  {
    name: 'Goat Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 2,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(8) + DEF(2) + HP(1) + MOV(2) + RNG(2)
    image: 'Goat Lord.png'
  },
  {
    name: 'Goat Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 2,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(8) + DEF(2) + HP(2) + MOV(2) + RNG(2)
    image: 'Goat Lord.png'
  },
  {
    name: 'Goat Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 2,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(8) + DEF(2) + HP(0) + MOV(4) + RNG(0)
    image: 'Goat Lord.png'
  },
  {
    name: 'Goat Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 2,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(8) + DEF(2) + HP(1) + MOV(4) + RNG(0)
    image: 'Goat Lord.png'
  },
  {
    name: 'Goat Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 2,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(8) + DEF(2) + HP(2) + MOV(4) + RNG(0)
    image: 'Goat Lord.png'
  },
  // Name: Pumpkin Man (ATK: 8, DEF: 3)
  {
    name: 'Pumpkin Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 3,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(8) + DEF(3) + HP(0) + MOV(0) + RNG(0)
    image: 'Pumpkin Man.png'
  },
  {
    name: 'Pumpkin Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 3,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(8) + DEF(3) + HP(1) + MOV(0) + RNG(0)
    image: 'Pumpkin Man.png'
  },
  {
    name: 'Pumpkin Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 3,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(8) + DEF(3) + HP(2) + MOV(0) + RNG(0)
    image: 'Pumpkin Man.png'
  },
  {
    name: 'Pumpkin Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 3,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(8) + DEF(3) + HP(0) + MOV(0) + RNG(2)
    image: 'Pumpkin Man.png'
  },
  {
    name: 'Pumpkin Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 3,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(8) + DEF(3) + HP(1) + MOV(0) + RNG(2)
    image: 'Pumpkin Man.png'
  },
  {
    name: 'Pumpkin Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 3,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(8) + DEF(3) + HP(2) + MOV(0) + RNG(2)
    image: 'Pumpkin Man.png'
  },
  {
    name: 'Pumpkin Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 3,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(8) + DEF(3) + HP(0) + MOV(0) + RNG(4)
    image: 'Pumpkin Man.png'
  },
  {
    name: 'Pumpkin Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 3,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(8) + DEF(3) + HP(1) + MOV(0) + RNG(4)
    image: 'Pumpkin Man.png'
  },
  {
    name: 'Pumpkin Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 3,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(8) + DEF(3) + HP(2) + MOV(0) + RNG(4)
    image: 'Pumpkin Man.png'
  },
  {
    name: 'Pumpkin Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 3,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(8) + DEF(3) + HP(0) + MOV(2) + RNG(0)
    image: 'Pumpkin Man.png'
  },
  {
    name: 'Pumpkin Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 3,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(8) + DEF(3) + HP(1) + MOV(2) + RNG(0)
    image: 'Pumpkin Man.png'
  },
  {
    name: 'Pumpkin Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 3,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(8) + DEF(3) + HP(2) + MOV(2) + RNG(0)
    image: 'Pumpkin Man.png'
  },
  {
    name: 'Pumpkin Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 3,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(8) + DEF(3) + HP(0) + MOV(2) + RNG(2)
    image: 'Pumpkin Man.png'
  },
  {
    name: 'Pumpkin Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 3,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(8) + DEF(3) + HP(1) + MOV(2) + RNG(2)
    image: 'Pumpkin Man.png'
  },
  {
    name: 'Pumpkin Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 3,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(8) + DEF(3) + HP(2) + MOV(2) + RNG(2)
    image: 'Pumpkin Man.png'
  },
  {
    name: 'Pumpkin Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 3,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(8) + DEF(3) + HP(0) + MOV(4) + RNG(0)
    image: 'Pumpkin Man.png'
  },
  {
    name: 'Pumpkin Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 3,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(8) + DEF(3) + HP(1) + MOV(4) + RNG(0)
    image: 'Pumpkin Man.png'
  },
  {
    name: 'Pumpkin Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 3,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(8) + DEF(3) + HP(2) + MOV(4) + RNG(0)
    image: 'Pumpkin Man.png'
  },
  // Name: Witch Apprentice (ATK: 8, DEF: 4)
  {
    name: 'Witch Apprentice',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 4,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(8) + DEF(4) + HP(0) + MOV(0) + RNG(0)
    image: 'Witch Apprentice.png'
  },
  {
    name: 'Witch Apprentice',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 4,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(8) + DEF(4) + HP(1) + MOV(0) + RNG(0)
    image: 'Witch Apprentice.png'
  },
  {
    name: 'Witch Apprentice',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 4,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(8) + DEF(4) + HP(2) + MOV(0) + RNG(0)
    image: 'Witch Apprentice.png'
  },
  {
    name: 'Witch Apprentice',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 4,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(8) + DEF(4) + HP(0) + MOV(0) + RNG(2)
    image: 'Witch Apprentice.png'
  },
  {
    name: 'Witch Apprentice',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 4,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(8) + DEF(4) + HP(1) + MOV(0) + RNG(2)
    image: 'Witch Apprentice.png'
  },
  {
    name: 'Witch Apprentice',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 4,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(8) + DEF(4) + HP(2) + MOV(0) + RNG(2)
    image: 'Witch Apprentice.png'
  },
  {
    name: 'Witch Apprentice',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 4,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(8) + DEF(4) + HP(0) + MOV(0) + RNG(4)
    image: 'Witch Apprentice.png'
  },
  {
    name: 'Witch Apprentice',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 4,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(8) + DEF(4) + HP(1) + MOV(0) + RNG(4)
    image: 'Witch Apprentice.png'
  },
  {
    name: 'Witch Apprentice',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 4,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(8) + DEF(4) + HP(2) + MOV(0) + RNG(4)
    image: 'Witch Apprentice.png'
  },
  {
    name: 'Witch Apprentice',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 4,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(8) + DEF(4) + HP(0) + MOV(2) + RNG(0)
    image: 'Witch Apprentice.png'
  },
  {
    name: 'Witch Apprentice',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 4,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(8) + DEF(4) + HP(1) + MOV(2) + RNG(0)
    image: 'Witch Apprentice.png'
  },
  {
    name: 'Witch Apprentice',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 4,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(8) + DEF(4) + HP(2) + MOV(2) + RNG(0)
    image: 'Witch Apprentice.png'
  },
  {
    name: 'Witch Apprentice',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 4,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(8) + DEF(4) + HP(0) + MOV(2) + RNG(2)
    image: 'Witch Apprentice.png'
  },
  {
    name: 'Witch Apprentice',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 4,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(8) + DEF(4) + HP(1) + MOV(2) + RNG(2)
    image: 'Witch Apprentice.png'
  },
  {
    name: 'Witch Apprentice',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 4,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(8) + DEF(4) + HP(2) + MOV(2) + RNG(2)
    image: 'Witch Apprentice.png'
  },
  {
    name: 'Witch Apprentice',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 4,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(8) + DEF(4) + HP(0) + MOV(4) + RNG(0)
    image: 'Witch Apprentice.png'
  },
  {
    name: 'Witch Apprentice',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 4,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(8) + DEF(4) + HP(1) + MOV(4) + RNG(0)
    image: 'Witch Apprentice.png'
  },
  {
    name: 'Witch Apprentice',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 4,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(8) + DEF(4) + HP(2) + MOV(4) + RNG(0)
    image: 'Witch Apprentice.png'
  },
  // Name: Lost Soul (ATK: 8, DEF: 5)
  {
    name: 'Lost Soul',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 5,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(8) + DEF(5) + HP(0) + MOV(0) + RNG(0)
    image: 'Lost Soul.png'
  },
  {
    name: 'Lost Soul',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 5,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(8) + DEF(5) + HP(1) + MOV(0) + RNG(0)
    image: 'Lost Soul.png'
  },
  {
    name: 'Lost Soul',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 5,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(8) + DEF(5) + HP(2) + MOV(0) + RNG(0)
    image: 'Lost Soul.png'
  },
  {
    name: 'Lost Soul',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 5,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(8) + DEF(5) + HP(0) + MOV(0) + RNG(2)
    image: 'Lost Soul.png'
  },
  {
    name: 'Lost Soul',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 5,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(8) + DEF(5) + HP(1) + MOV(0) + RNG(2)
    image: 'Lost Soul.png'
  },
  {
    name: 'Lost Soul',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 5,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(8) + DEF(5) + HP(2) + MOV(0) + RNG(2)
    image: 'Lost Soul.png'
  },
  {
    name: 'Lost Soul',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 5,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(8) + DEF(5) + HP(0) + MOV(0) + RNG(4)
    image: 'Lost Soul.png'
  },
  {
    name: 'Lost Soul',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 5,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(8) + DEF(5) + HP(1) + MOV(0) + RNG(4)
    image: 'Lost Soul.png'
  },
  {
    name: 'Lost Soul',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 5,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(8) + DEF(5) + HP(2) + MOV(0) + RNG(4)
    image: 'Lost Soul.png'
  },
  {
    name: 'Lost Soul',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 5,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(8) + DEF(5) + HP(0) + MOV(2) + RNG(0)
    image: 'Lost Soul.png'
  },
  {
    name: 'Lost Soul',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 5,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(8) + DEF(5) + HP(1) + MOV(2) + RNG(0)
    image: 'Lost Soul.png'
  },
  {
    name: 'Lost Soul',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 5,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(8) + DEF(5) + HP(2) + MOV(2) + RNG(0)
    image: 'Lost Soul.png'
  },
  {
    name: 'Lost Soul',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 5,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(8) + DEF(5) + HP(0) + MOV(2) + RNG(2)
    image: 'Lost Soul.png'
  },
  {
    name: 'Lost Soul',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 5,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(8) + DEF(5) + HP(1) + MOV(2) + RNG(2)
    image: 'Lost Soul.png'
  },
  {
    name: 'Lost Soul',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 5,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(8) + DEF(5) + HP(2) + MOV(2) + RNG(2)
    image: 'Lost Soul.png'
  },
  {
    name: 'Lost Soul',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 5,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(8) + DEF(5) + HP(0) + MOV(4) + RNG(0)
    image: 'Lost Soul.png'
  },
  {
    name: 'Lost Soul',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 5,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(8) + DEF(5) + HP(1) + MOV(4) + RNG(0)
    image: 'Lost Soul.png'
  },
  {
    name: 'Lost Soul',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 5,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(8) + DEF(5) + HP(2) + MOV(4) + RNG(0)
    image: 'Lost Soul.png'
  },
  // Name: Underworld King (ATK: 8, DEF: 6)
  {
    name: 'Underworld King',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 6,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(8) + DEF(6) + HP(0) + MOV(0) + RNG(0)
    image: 'Underworld King.png'
  },
  {
    name: 'Underworld King',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 6,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(8) + DEF(6) + HP(1) + MOV(0) + RNG(0)
    image: 'Underworld King.png'
  },
  {
    name: 'Underworld King',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 6,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(8) + DEF(6) + HP(2) + MOV(0) + RNG(0)
    image: 'Underworld King.png'
  },
  {
    name: 'Underworld King',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 6,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(8) + DEF(6) + HP(0) + MOV(0) + RNG(2)
    image: 'Underworld King.png'
  },
  {
    name: 'Underworld King',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 6,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(8) + DEF(6) + HP(1) + MOV(0) + RNG(2)
    image: 'Underworld King.png'
  },
  {
    name: 'Underworld King',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 6,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(8) + DEF(6) + HP(2) + MOV(0) + RNG(2)
    image: 'Underworld King.png'
  },
  {
    name: 'Underworld King',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 6,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(8) + DEF(6) + HP(0) + MOV(0) + RNG(4)
    image: 'Underworld King.png'
  },
  {
    name: 'Underworld King',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 6,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(8) + DEF(6) + HP(1) + MOV(0) + RNG(4)
    image: 'Underworld King.png'
  },
  {
    name: 'Underworld King',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 6,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(8) + DEF(6) + HP(2) + MOV(0) + RNG(4)
    image: 'Underworld King.png'
  },
  {
    name: 'Underworld King',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 6,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(8) + DEF(6) + HP(0) + MOV(2) + RNG(0)
    image: 'Underworld King.png'
  },
  {
    name: 'Underworld King',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 6,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(8) + DEF(6) + HP(1) + MOV(2) + RNG(0)
    image: 'Underworld King.png'
  },
  {
    name: 'Underworld King',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 6,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(8) + DEF(6) + HP(2) + MOV(2) + RNG(0)
    image: 'Underworld King.png'
  },
  {
    name: 'Underworld King',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 6,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(8) + DEF(6) + HP(0) + MOV(2) + RNG(2)
    image: 'Underworld King.png'
  },
  {
    name: 'Underworld King',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 6,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(8) + DEF(6) + HP(1) + MOV(2) + RNG(2)
    image: 'Underworld King.png'
  },
  {
    name: 'Underworld King',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 6,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(8) + DEF(6) + HP(2) + MOV(2) + RNG(2)
    image: 'Underworld King.png'
  },
  {
    name: 'Underworld King',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 6,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(8) + DEF(6) + HP(0) + MOV(4) + RNG(0)
    image: 'Underworld King.png'
  },
  {
    name: 'Underworld King',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 6,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(8) + DEF(6) + HP(1) + MOV(4) + RNG(0)
    image: 'Underworld King.png'
  },
  {
    name: 'Underworld King',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 6,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(8) + DEF(6) + HP(2) + MOV(4) + RNG(0)
    image: 'Underworld King.png'
  },
  // Name: Executioner (ATK: 8, DEF: 7)
  {
    name: 'Executioner',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 7,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(8) + DEF(7) + HP(0) + MOV(0) + RNG(0)
    image: 'Executioner.png'
  },
  {
    name: 'Executioner',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 7,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(8) + DEF(7) + HP(1) + MOV(0) + RNG(0)
    image: 'Executioner.png'
  },
  {
    name: 'Executioner',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 7,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(8) + DEF(7) + HP(2) + MOV(0) + RNG(0)
    image: 'Executioner.png'
  },
  {
    name: 'Executioner',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 7,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(8) + DEF(7) + HP(0) + MOV(0) + RNG(2)
    image: 'Executioner.png'
  },
  {
    name: 'Executioner',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 7,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(8) + DEF(7) + HP(1) + MOV(0) + RNG(2)
    image: 'Executioner.png'
  },
  {
    name: 'Executioner',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 7,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(8) + DEF(7) + HP(2) + MOV(0) + RNG(2)
    image: 'Executioner.png'
  },
  {
    name: 'Executioner',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 7,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(8) + DEF(7) + HP(0) + MOV(0) + RNG(4)
    image: 'Executioner.png'
  },
  {
    name: 'Executioner',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 7,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(8) + DEF(7) + HP(1) + MOV(0) + RNG(4)
    image: 'Executioner.png'
  },
  {
    name: 'Executioner',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 7,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(8) + DEF(7) + HP(2) + MOV(0) + RNG(4)
    image: 'Executioner.png'
  },
  {
    name: 'Executioner',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 7,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(8) + DEF(7) + HP(0) + MOV(2) + RNG(0)
    image: 'Executioner.png'
  },
  {
    name: 'Executioner',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 7,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(8) + DEF(7) + HP(1) + MOV(2) + RNG(0)
    image: 'Executioner.png'
  },
  {
    name: 'Executioner',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 7,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(8) + DEF(7) + HP(2) + MOV(2) + RNG(0)
    image: 'Executioner.png'
  },
  {
    name: 'Executioner',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 7,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(8) + DEF(7) + HP(0) + MOV(2) + RNG(2)
    image: 'Executioner.png'
  },
  {
    name: 'Executioner',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 7,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(8) + DEF(7) + HP(1) + MOV(2) + RNG(2)
    image: 'Executioner.png'
  },
  {
    name: 'Executioner',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 7,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(8) + DEF(7) + HP(2) + MOV(2) + RNG(2)
    image: 'Executioner.png'
  },
  {
    name: 'Executioner',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 7,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(8) + DEF(7) + HP(0) + MOV(4) + RNG(0)
    image: 'Executioner.png'
  },
  {
    name: 'Executioner',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 7,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(8) + DEF(7) + HP(1) + MOV(4) + RNG(0)
    image: 'Executioner.png'
  },
  {
    name: 'Executioner',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 7,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(8) + DEF(7) + HP(2) + MOV(4) + RNG(0)
    image: 'Executioner.png'
  },
  // Name: Smoke Demon (ATK: 8, DEF: 8)
  {
    name: 'Smoke Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 8,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(8) + DEF(8) + HP(0) + MOV(0) + RNG(0)
    image: 'Smoke Demon.png'
  },
  {
    name: 'Smoke Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 8,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(8) + DEF(8) + HP(1) + MOV(0) + RNG(0)
    image: 'Smoke Demon.png'
  },
  {
    name: 'Smoke Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 8,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(8) + DEF(8) + HP(2) + MOV(0) + RNG(0)
    image: 'Smoke Demon.png'
  },
  {
    name: 'Smoke Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 8,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(8) + DEF(8) + HP(0) + MOV(0) + RNG(2)
    image: 'Smoke Demon.png'
  },
  {
    name: 'Smoke Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 8,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(8) + DEF(8) + HP(1) + MOV(0) + RNG(2)
    image: 'Smoke Demon.png'
  },
  {
    name: 'Smoke Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 8,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(8) + DEF(8) + HP(2) + MOV(0) + RNG(2)
    image: 'Smoke Demon.png'
  },
  {
    name: 'Smoke Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 8,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(8) + DEF(8) + HP(0) + MOV(0) + RNG(4)
    image: 'Smoke Demon.png'
  },
  {
    name: 'Smoke Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 8,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(8) + DEF(8) + HP(1) + MOV(0) + RNG(4)
    image: 'Smoke Demon.png'
  },
  {
    name: 'Smoke Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 8,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 22, // ATK(8) + DEF(8) + HP(2) + MOV(0) + RNG(4)
    image: 'Smoke Demon.png'
  },
  {
    name: 'Smoke Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 8,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(8) + DEF(8) + HP(0) + MOV(2) + RNG(0)
    image: 'Smoke Demon.png'
  },
  {
    name: 'Smoke Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 8,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(8) + DEF(8) + HP(1) + MOV(2) + RNG(0)
    image: 'Smoke Demon.png'
  },
  {
    name: 'Smoke Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 8,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(8) + DEF(8) + HP(2) + MOV(2) + RNG(0)
    image: 'Smoke Demon.png'
  },
  {
    name: 'Smoke Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 8,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(8) + DEF(8) + HP(0) + MOV(2) + RNG(2)
    image: 'Smoke Demon.png'
  },
  {
    name: 'Smoke Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 8,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(8) + DEF(8) + HP(1) + MOV(2) + RNG(2)
    image: 'Smoke Demon.png'
  },
  {
    name: 'Smoke Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 8,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 22, // ATK(8) + DEF(8) + HP(2) + MOV(2) + RNG(2)
    image: 'Smoke Demon.png'
  },
  {
    name: 'Smoke Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 8,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(8) + DEF(8) + HP(0) + MOV(4) + RNG(0)
    image: 'Smoke Demon.png'
  },
  {
    name: 'Smoke Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 8,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(8) + DEF(8) + HP(1) + MOV(4) + RNG(0)
    image: 'Smoke Demon.png'
  },
  {
    name: 'Smoke Demon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 8,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 22, // ATK(8) + DEF(8) + HP(2) + MOV(4) + RNG(0)
    image: 'Smoke Demon.png'
  },
  // Name: Skeleton (ATK: 8, DEF: 9)
  {
    name: 'Skeleton',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 9,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(8) + DEF(9) + HP(0) + MOV(0) + RNG(0)
    image: 'Skeleton.png'
  },
  {
    name: 'Skeleton',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 9,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(8) + DEF(9) + HP(1) + MOV(0) + RNG(0)
    image: 'Skeleton.png'
  },
  {
    name: 'Skeleton',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 9,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(8) + DEF(9) + HP(2) + MOV(0) + RNG(0)
    image: 'Skeleton.png'
  },
  {
    name: 'Skeleton',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 9,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(8) + DEF(9) + HP(0) + MOV(0) + RNG(2)
    image: 'Skeleton.png'
  },
  {
    name: 'Skeleton',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 9,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(8) + DEF(9) + HP(1) + MOV(0) + RNG(2)
    image: 'Skeleton.png'
  },
  {
    name: 'Skeleton',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 9,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(8) + DEF(9) + HP(2) + MOV(0) + RNG(2)
    image: 'Skeleton.png'
  },
  {
    name: 'Skeleton',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 9,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(8) + DEF(9) + HP(0) + MOV(0) + RNG(4)
    image: 'Skeleton.png'
  },
  {
    name: 'Skeleton',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 9,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 22, // ATK(8) + DEF(9) + HP(1) + MOV(0) + RNG(4)
    image: 'Skeleton.png'
  },
  {
    name: 'Skeleton',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 9,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 23, // ATK(8) + DEF(9) + HP(2) + MOV(0) + RNG(4)
    image: 'Skeleton.png'
  },
  {
    name: 'Skeleton',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 9,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(8) + DEF(9) + HP(0) + MOV(2) + RNG(0)
    image: 'Skeleton.png'
  },
  {
    name: 'Skeleton',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 9,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(8) + DEF(9) + HP(1) + MOV(2) + RNG(0)
    image: 'Skeleton.png'
  },
  {
    name: 'Skeleton',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 9,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(8) + DEF(9) + HP(2) + MOV(2) + RNG(0)
    image: 'Skeleton.png'
  },
  {
    name: 'Skeleton',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 9,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(8) + DEF(9) + HP(0) + MOV(2) + RNG(2)
    image: 'Skeleton.png'
  },
  {
    name: 'Skeleton',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 9,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 22, // ATK(8) + DEF(9) + HP(1) + MOV(2) + RNG(2)
    image: 'Skeleton.png'
  },
  {
    name: 'Skeleton',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 9,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 23, // ATK(8) + DEF(9) + HP(2) + MOV(2) + RNG(2)
    image: 'Skeleton.png'
  },
  {
    name: 'Skeleton',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 9,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(8) + DEF(9) + HP(0) + MOV(4) + RNG(0)
    image: 'Skeleton.png'
  },
  {
    name: 'Skeleton',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 9,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 22, // ATK(8) + DEF(9) + HP(1) + MOV(4) + RNG(0)
    image: 'Skeleton.png'
  },
  {
    name: 'Skeleton',
    type: 'minion',
    subType: 'minionbasic',
    atk: 8,
    def: 9,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 23, // ATK(8) + DEF(9) + HP(2) + MOV(4) + RNG(0)
    image: 'Skeleton.png'
  },

  // Name: Skelly (ATK: 9, DEF: 0)
  {
    name: 'Skelly',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 0,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 9, // ATK(9) + DEF(0) + HP(0) + MOV(0) + RNG(0)
    image: 'Skelly.png'
  },
  {
    name: 'Skelly',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 0,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(9) + DEF(0) + HP(1) + MOV(0) + RNG(0)
    image: 'Skelly.png'
  },
  {
    name: 'Skelly',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 0,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(9) + DEF(0) + HP(2) + MOV(0) + RNG(0)
    image: 'Skelly.png'
  },
  {
    name: 'Skelly',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 0,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(9) + DEF(0) + HP(0) + MOV(0) + RNG(2)
    image: 'Skelly.png'
  },
  {
    name: 'Skelly',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 0,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(9) + DEF(0) + HP(1) + MOV(0) + RNG(2)
    image: 'Skelly.png'
  },
  {
    name: 'Skelly',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 0,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(9) + DEF(0) + HP(2) + MOV(0) + RNG(2)
    image: 'Skelly.png'
  },
  {
    name: 'Skelly',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 0,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(9) + DEF(0) + HP(0) + MOV(0) + RNG(4)
    image: 'Skelly.png'
  },
  {
    name: 'Skelly',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 0,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(9) + DEF(0) + HP(1) + MOV(0) + RNG(4)
    image: 'Skelly.png'
  },
  {
    name: 'Skelly',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 0,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(9) + DEF(0) + HP(2) + MOV(0) + RNG(4)
    image: 'Skelly.png'
  },
  {
    name: 'Skelly',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 0,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(9) + DEF(0) + HP(0) + MOV(2) + RNG(0)
    image: 'Skelly.png'
  },
  {
    name: 'Skelly',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 0,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(9) + DEF(0) + HP(1) + MOV(2) + RNG(0)
    image: 'Skelly.png'
  },
  {
    name: 'Skelly',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 0,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(9) + DEF(0) + HP(2) + MOV(2) + RNG(0)
    image: 'Skelly.png'
  },
  {
    name: 'Skelly',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 0,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(9) + DEF(0) + HP(0) + MOV(2) + RNG(2)
    image: 'Skelly.png'
  },
  {
    name: 'Skelly',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 0,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(9) + DEF(0) + HP(1) + MOV(2) + RNG(2)
    image: 'Skelly.png'
  },
  {
    name: 'Skelly',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 0,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(9) + DEF(0) + HP(2) + MOV(2) + RNG(2)
    image: 'Skelly.png'
  },
  {
    name: 'Skelly',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 0,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(9) + DEF(0) + HP(0) + MOV(4) + RNG(0)
    image: 'Skelly.png'
  },
  {
    name: 'Skelly',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 0,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(9) + DEF(0) + HP(1) + MOV(4) + RNG(0)
    image: 'Skelly.png'
  },
  {
    name: 'Skelly',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 0,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(9) + DEF(0) + HP(2) + MOV(4) + RNG(0)
    image: 'Skelly.png'
  },
  // Name: Fly Man (ATK: 9, DEF: 1)
  {
    name: 'Fly Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 1,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 10, // ATK(9) + DEF(1) + HP(0) + MOV(0) + RNG(0)
    image: 'Fly Man.png'
  },
  {
    name: 'Fly Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 1,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(9) + DEF(1) + HP(1) + MOV(0) + RNG(0)
    image: 'Fly Man.png'
  },
  {
    name: 'Fly Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 1,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(9) + DEF(1) + HP(2) + MOV(0) + RNG(0)
    image: 'Fly Man.png'
  },
  {
    name: 'Fly Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 1,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(9) + DEF(1) + HP(0) + MOV(0) + RNG(2)
    image: 'Fly Man.png'
  },
  {
    name: 'Fly Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 1,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(9) + DEF(1) + HP(1) + MOV(0) + RNG(2)
    image: 'Fly Man.png'
  },
  {
    name: 'Fly Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 1,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(9) + DEF(1) + HP(2) + MOV(0) + RNG(2)
    image: 'Fly Man.png'
  },
  {
    name: 'Fly Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 1,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(9) + DEF(1) + HP(0) + MOV(0) + RNG(4)
    image: 'Fly Man.png'
  },
  {
    name: 'Fly Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 1,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(9) + DEF(1) + HP(1) + MOV(0) + RNG(4)
    image: 'Fly Man.png'
  },
  {
    name: 'Fly Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 1,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(9) + DEF(1) + HP(2) + MOV(0) + RNG(4)
    image: 'Fly Man.png'
  },
  {
    name: 'Fly Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 1,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(9) + DEF(1) + HP(0) + MOV(2) + RNG(0)
    image: 'Fly Man.png'
  },
  {
    name: 'Fly Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 1,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(9) + DEF(1) + HP(1) + MOV(2) + RNG(0)
    image: 'Fly Man.png'
  },
  {
    name: 'Fly Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 1,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(9) + DEF(1) + HP(2) + MOV(2) + RNG(0)
    image: 'Fly Man.png'
  },
  {
    name: 'Fly Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 1,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(9) + DEF(1) + HP(0) + MOV(2) + RNG(2)
    image: 'Fly Man.png'
  },
  {
    name: 'Fly Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 1,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(9) + DEF(1) + HP(1) + MOV(2) + RNG(2)
    image: 'Fly Man.png'
  },
  {
    name: 'Fly Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 1,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(9) + DEF(1) + HP(2) + MOV(2) + RNG(2)
    image: 'Fly Man.png'
  },
  {
    name: 'Fly Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 1,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(9) + DEF(1) + HP(0) + MOV(4) + RNG(0)
    image: 'Fly Man.png'
  },
  {
    name: 'Fly Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 1,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(9) + DEF(1) + HP(1) + MOV(4) + RNG(0)
    image: 'Fly Man.png'
  },
  {
    name: 'Fly Man',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 1,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(9) + DEF(1) + HP(2) + MOV(4) + RNG(0)
    image: 'Fly Man.png'
  },
  // Name: Bone Dragon (ATK: 9, DEF: 2)
  {
    name: 'Bone Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 2,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 11, // ATK(9) + DEF(2) + HP(0) + MOV(0) + RNG(0)
    image: 'Bone Dragon.png'
  },
  {
    name: 'Bone Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 2,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(9) + DEF(2) + HP(1) + MOV(0) + RNG(0)
    image: 'Bone Dragon.png'
  },
  {
    name: 'Bone Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 2,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(9) + DEF(2) + HP(2) + MOV(0) + RNG(0)
    image: 'Bone Dragon.png'
  },
  {
    name: 'Bone Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 2,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(9) + DEF(2) + HP(0) + MOV(0) + RNG(2)
    image: 'Bone Dragon.png'
  },
  {
    name: 'Bone Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 2,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(9) + DEF(2) + HP(1) + MOV(0) + RNG(2)
    image: 'Bone Dragon.png'
  },
  {
    name: 'Bone Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 2,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(9) + DEF(2) + HP(2) + MOV(0) + RNG(2)
    image: 'Bone Dragon.png'
  },
  {
    name: 'Bone Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 2,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(9) + DEF(2) + HP(0) + MOV(0) + RNG(4)
    image: 'Bone Dragon.png'
  },
  {
    name: 'Bone Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 2,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(9) + DEF(2) + HP(1) + MOV(0) + RNG(4)
    image: 'Bone Dragon.png'
  },
  {
    name: 'Bone Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 2,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(9) + DEF(2) + HP(2) + MOV(0) + RNG(4)
    image: 'Bone Dragon.png'
  },
  {
    name: 'Bone Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 2,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(9) + DEF(2) + HP(0) + MOV(2) + RNG(0)
    image: 'Bone Dragon.png'
  },
  {
    name: 'Bone Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 2,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(9) + DEF(2) + HP(1) + MOV(2) + RNG(0)
    image: 'Bone Dragon.png'
  },
  {
    name: 'Bone Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 2,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(9) + DEF(2) + HP(2) + MOV(2) + RNG(0)
    image: 'Bone Dragon.png'
  },
  {
    name: 'Bone Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 2,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(9) + DEF(2) + HP(0) + MOV(2) + RNG(2)
    image: 'Bone Dragon.png'
  },
  {
    name: 'Bone Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 2,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(9) + DEF(2) + HP(1) + MOV(2) + RNG(2)
    image: 'Bone Dragon.png'
  },
  {
    name: 'Bone Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 2,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(9) + DEF(2) + HP(2) + MOV(2) + RNG(2)
    image: 'Bone Dragon.png'
  },
  {
    name: 'Bone Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 2,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(9) + DEF(2) + HP(0) + MOV(4) + RNG(0)
    image: 'Bone Dragon.png'
  },
  {
    name: 'Bone Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 2,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(9) + DEF(2) + HP(1) + MOV(4) + RNG(0)
    image: 'Bone Dragon.png'
  },
  {
    name: 'Bone Dragon',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 2,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(9) + DEF(2) + HP(2) + MOV(4) + RNG(0)
    image: 'Bone Dragon.png'
  },
  // Name: Skeleton Brute (ATK: 9, DEF: 3)
  {
    name: 'Skeleton Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 3,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 12, // ATK(9) + DEF(3) + HP(0) + MOV(0) + RNG(0)
    image: 'Skeleton Brute.png'
  },
  {
    name: 'Skeleton Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 3,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(9) + DEF(3) + HP(1) + MOV(0) + RNG(0)
    image: 'Skeleton Brute.png'
  },
  {
    name: 'Skeleton Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 3,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(9) + DEF(3) + HP(2) + MOV(0) + RNG(0)
    image: 'Skeleton Brute.png'
  },
  {
    name: 'Skeleton Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 3,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(9) + DEF(3) + HP(0) + MOV(0) + RNG(2)
    image: 'Skeleton Brute.png'
  },
  {
    name: 'Skeleton Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 3,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(9) + DEF(3) + HP(1) + MOV(0) + RNG(2)
    image: 'Skeleton Brute.png'
  },
  {
    name: 'Skeleton Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 3,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(9) + DEF(3) + HP(2) + MOV(0) + RNG(2)
    image: 'Skeleton Brute.png'
  },
  {
    name: 'Skeleton Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 3,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(9) + DEF(3) + HP(0) + MOV(0) + RNG(4)
    image: 'Skeleton Brute.png'
  },
  {
    name: 'Skeleton Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 3,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(9) + DEF(3) + HP(1) + MOV(0) + RNG(4)
    image: 'Skeleton Brute.png'
  },
  {
    name: 'Skeleton Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 3,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(9) + DEF(3) + HP(2) + MOV(0) + RNG(4)
    image: 'Skeleton Brute.png'
  },
  {
    name: 'Skeleton Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 3,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(9) + DEF(3) + HP(0) + MOV(2) + RNG(0)
    image: 'Skeleton Brute.png'
  },
  {
    name: 'Skeleton Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 3,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(9) + DEF(3) + HP(1) + MOV(2) + RNG(0)
    image: 'Skeleton Brute.png'
  },
  {
    name: 'Skeleton Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 3,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(9) + DEF(3) + HP(2) + MOV(2) + RNG(0)
    image: 'Skeleton Brute.png'
  },
  {
    name: 'Skeleton Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 3,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(9) + DEF(3) + HP(0) + MOV(2) + RNG(2)
    image: 'Skeleton Brute.png'
  },
  {
    name: 'Skeleton Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 3,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(9) + DEF(3) + HP(1) + MOV(2) + RNG(2)
    image: 'Skeleton Brute.png'
  },
  {
    name: 'Skeleton Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 3,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(9) + DEF(3) + HP(2) + MOV(2) + RNG(2)
    image: 'Skeleton Brute.png'
  },
  {
    name: 'Skeleton Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 3,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(9) + DEF(3) + HP(0) + MOV(4) + RNG(0)
    image: 'Skeleton Brute.png'
  },
  {
    name: 'Skeleton Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 3,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(9) + DEF(3) + HP(1) + MOV(4) + RNG(0)
    image: 'Skeleton Brute.png'
  },
  {
    name: 'Skeleton Brute',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 3,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(9) + DEF(3) + HP(2) + MOV(4) + RNG(0)
    image: 'Skeleton Brute.png'
  },
  // Name: Nightmare (ATK: 9, DEF: 4)
  {
    name: 'Nightmare',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 4,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 13, // ATK(9) + DEF(4) + HP(0) + MOV(0) + RNG(0)
    image: 'Nightmare.png'
  },
  {
    name: 'Nightmare',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 4,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(9) + DEF(4) + HP(1) + MOV(0) + RNG(0)
    image: 'Nightmare.png'
  },
  {
    name: 'Nightmare',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 4,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(9) + DEF(4) + HP(2) + MOV(0) + RNG(0)
    image: 'Nightmare.png'
  },
  {
    name: 'Nightmare',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 4,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(9) + DEF(4) + HP(0) + MOV(0) + RNG(2)
    image: 'Nightmare.png'
  },
  {
    name: 'Nightmare',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 4,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(9) + DEF(4) + HP(1) + MOV(0) + RNG(2)
    image: 'Nightmare.png'
  },
  {
    name: 'Nightmare',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 4,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(9) + DEF(4) + HP(2) + MOV(0) + RNG(2)
    image: 'Nightmare.png'
  },
  {
    name: 'Nightmare',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 4,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(9) + DEF(4) + HP(0) + MOV(0) + RNG(4)
    image: 'Nightmare.png'
  },
  {
    name: 'Nightmare',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 4,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(9) + DEF(4) + HP(1) + MOV(0) + RNG(4)
    image: 'Nightmare.png'
  },
  {
    name: 'Nightmare',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 4,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(9) + DEF(4) + HP(2) + MOV(0) + RNG(4)
    image: 'Nightmare.png'
  },
  {
    name: 'Nightmare',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 4,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(9) + DEF(4) + HP(0) + MOV(2) + RNG(0)
    image: 'Nightmare.png'
  },
  {
    name: 'Nightmare',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 4,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(9) + DEF(4) + HP(1) + MOV(2) + RNG(0)
    image: 'Nightmare.png'
  },
  {
    name: 'Nightmare',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 4,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(9) + DEF(4) + HP(2) + MOV(2) + RNG(0)
    image: 'Nightmare.png'
  },
  {
    name: 'Nightmare',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 4,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(9) + DEF(4) + HP(0) + MOV(2) + RNG(2)
    image: 'Nightmare.png'
  },
  {
    name: 'Nightmare',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 4,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(9) + DEF(4) + HP(1) + MOV(2) + RNG(2)
    image: 'Nightmare.png'
  },
  {
    name: 'Nightmare',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 4,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(9) + DEF(4) + HP(2) + MOV(2) + RNG(2)
    image: 'Nightmare.png'
  },
  {
    name: 'Nightmare',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 4,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(9) + DEF(4) + HP(0) + MOV(4) + RNG(0)
    image: 'Nightmare.png'
  },
  {
    name: 'Nightmare',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 4,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(9) + DEF(4) + HP(1) + MOV(4) + RNG(0)
    image: 'Nightmare.png'
  },
  {
    name: 'Nightmare',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 4,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(9) + DEF(4) + HP(2) + MOV(4) + RNG(0)
    image: 'Nightmare.png'
  },
  // Name: Shadow Knight (ATK: 9, DEF: 5)
  {
    name: 'Shadow Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 5,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 14, // ATK(9) + DEF(5) + HP(0) + MOV(0) + RNG(0)
    image: 'Shadow Knight.png'
  },
  {
    name: 'Shadow Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 5,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(9) + DEF(5) + HP(1) + MOV(0) + RNG(0)
    image: 'Shadow Knight.png'
  },
  {
    name: 'Shadow Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 5,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(9) + DEF(5) + HP(2) + MOV(0) + RNG(0)
    image: 'Shadow Knight.png'
  },
  {
    name: 'Shadow Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 5,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(9) + DEF(5) + HP(0) + MOV(0) + RNG(2)
    image: 'Shadow Knight.png'
  },
  {
    name: 'Shadow Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 5,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(9) + DEF(5) + HP(1) + MOV(0) + RNG(2)
    image: 'Shadow Knight.png'
  },
  {
    name: 'Shadow Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 5,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(9) + DEF(5) + HP(2) + MOV(0) + RNG(2)
    image: 'Shadow Knight.png'
  },
  {
    name: 'Shadow Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 5,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(9) + DEF(5) + HP(0) + MOV(0) + RNG(4)
    image: 'Shadow Knight.png'
  },
  {
    name: 'Shadow Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 5,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(9) + DEF(5) + HP(1) + MOV(0) + RNG(4)
    image: 'Shadow Knight.png'
  },
  {
    name: 'Shadow Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 5,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(9) + DEF(5) + HP(2) + MOV(0) + RNG(4)
    image: 'Shadow Knight.png'
  },
  {
    name: 'Shadow Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 5,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(9) + DEF(5) + HP(0) + MOV(2) + RNG(0)
    image: 'Shadow Knight.png'
  },
  {
    name: 'Shadow Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 5,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(9) + DEF(5) + HP(1) + MOV(2) + RNG(0)
    image: 'Shadow Knight.png'
  },
  {
    name: 'Shadow Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 5,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(9) + DEF(5) + HP(2) + MOV(2) + RNG(0)
    image: 'Shadow Knight.png'
  },
  {
    name: 'Shadow Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 5,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(9) + DEF(5) + HP(0) + MOV(2) + RNG(2)
    image: 'Shadow Knight.png'
  },
  {
    name: 'Shadow Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 5,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(9) + DEF(5) + HP(1) + MOV(2) + RNG(2)
    image: 'Shadow Knight.png'
  },
  {
    name: 'Shadow Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 5,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(9) + DEF(5) + HP(2) + MOV(2) + RNG(2)
    image: 'Shadow Knight.png'
  },
  {
    name: 'Shadow Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 5,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(9) + DEF(5) + HP(0) + MOV(4) + RNG(0)
    image: 'Shadow Knight.png'
  },
  {
    name: 'Shadow Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 5,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(9) + DEF(5) + HP(1) + MOV(4) + RNG(0)
    image: 'Shadow Knight.png'
  },
  {
    name: 'Shadow Knight',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 5,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(9) + DEF(5) + HP(2) + MOV(4) + RNG(0)
    image: 'Shadow Knight.png'
  },
  // Name: Crazy Mage (ATK: 9, DEF: 6)
  {
    name: 'Crazy Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 6,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 15, // ATK(9) + DEF(6) + HP(0) + MOV(0) + RNG(0)
    image: 'Crazy Mage.png'
  },
  {
    name: 'Crazy Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 6,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(9) + DEF(6) + HP(1) + MOV(0) + RNG(0)
    image: 'Crazy Mage.png'
  },
  {
    name: 'Crazy Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 6,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(9) + DEF(6) + HP(2) + MOV(0) + RNG(0)
    image: 'Crazy Mage.png'
  },
  {
    name: 'Crazy Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 6,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(9) + DEF(6) + HP(0) + MOV(0) + RNG(2)
    image: 'Crazy Mage.png'
  },
  {
    name: 'Crazy Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 6,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(9) + DEF(6) + HP(1) + MOV(0) + RNG(2)
    image: 'Crazy Mage.png'
  },
  {
    name: 'Crazy Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 6,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(9) + DEF(6) + HP(2) + MOV(0) + RNG(2)
    image: 'Crazy Mage.png'
  },
  {
    name: 'Crazy Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 6,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(9) + DEF(6) + HP(0) + MOV(0) + RNG(4)
    image: 'Crazy Mage.png'
  },
  {
    name: 'Crazy Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 6,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(9) + DEF(6) + HP(1) + MOV(0) + RNG(4)
    image: 'Crazy Mage.png'
  },
  {
    name: 'Crazy Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 6,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(9) + DEF(6) + HP(2) + MOV(0) + RNG(4)
    image: 'Crazy Mage.png'
  },
  {
    name: 'Crazy Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 6,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(9) + DEF(6) + HP(0) + MOV(2) + RNG(0)
    image: 'Crazy Mage.png'
  },
  {
    name: 'Crazy Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 6,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(9) + DEF(6) + HP(1) + MOV(2) + RNG(0)
    image: 'Crazy Mage.png'
  },
  {
    name: 'Crazy Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 6,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(9) + DEF(6) + HP(2) + MOV(2) + RNG(0)
    image: 'Crazy Mage.png'
  },
  {
    name: 'Crazy Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 6,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(9) + DEF(6) + HP(0) + MOV(2) + RNG(2)
    image: 'Crazy Mage.png'
  },
  {
    name: 'Crazy Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 6,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(9) + DEF(6) + HP(1) + MOV(2) + RNG(2)
    image: 'Crazy Mage.png'
  },
  {
    name: 'Crazy Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 6,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(9) + DEF(6) + HP(2) + MOV(2) + RNG(2)
    image: 'Crazy Mage.png'
  },
  {
    name: 'Crazy Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 6,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(9) + DEF(6) + HP(0) + MOV(4) + RNG(0)
    image: 'Crazy Mage.png'
  },
  {
    name: 'Crazy Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 6,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(9) + DEF(6) + HP(1) + MOV(4) + RNG(0)
    image: 'Crazy Mage.png'
  },
  {
    name: 'Crazy Mage',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 6,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(9) + DEF(6) + HP(2) + MOV(4) + RNG(0)
    image: 'Crazy Mage.png'
  },
  // Name: Bone Lord (ATK: 9, DEF: 7)
  {
    name: 'Bone Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 7,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 16, // ATK(9) + DEF(7) + HP(0) + MOV(0) + RNG(0)
    image: 'Bone Lord.png'
  },
  {
    name: 'Bone Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 7,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(9) + DEF(7) + HP(1) + MOV(0) + RNG(0)
    image: 'Bone Lord.png'
  },
  {
    name: 'Bone Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 7,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(9) + DEF(7) + HP(2) + MOV(0) + RNG(0)
    image: 'Bone Lord.png'
  },
  {
    name: 'Bone Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 7,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(9) + DEF(7) + HP(0) + MOV(0) + RNG(2)
    image: 'Bone Lord.png'
  },
  {
    name: 'Bone Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 7,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(9) + DEF(7) + HP(1) + MOV(0) + RNG(2)
    image: 'Bone Lord.png'
  },
  {
    name: 'Bone Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 7,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(9) + DEF(7) + HP(2) + MOV(0) + RNG(2)
    image: 'Bone Lord.png'
  },
  {
    name: 'Bone Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 7,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(9) + DEF(7) + HP(0) + MOV(0) + RNG(4)
    image: 'Bone Lord.png'
  },
  {
    name: 'Bone Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 7,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(9) + DEF(7) + HP(1) + MOV(0) + RNG(4)
    image: 'Bone Lord.png'
  },
  {
    name: 'Bone Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 7,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 22, // ATK(9) + DEF(7) + HP(2) + MOV(0) + RNG(4)
    image: 'Bone Lord.png'
  },
  {
    name: 'Bone Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 7,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(9) + DEF(7) + HP(0) + MOV(2) + RNG(0)
    image: 'Bone Lord.png'
  },
  {
    name: 'Bone Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 7,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(9) + DEF(7) + HP(1) + MOV(2) + RNG(0)
    image: 'Bone Lord.png'
  },
  {
    name: 'Bone Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 7,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(9) + DEF(7) + HP(2) + MOV(2) + RNG(0)
    image: 'Bone Lord.png'
  },
  {
    name: 'Bone Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 7,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(9) + DEF(7) + HP(0) + MOV(2) + RNG(2)
    image: 'Bone Lord.png'
  },
  {
    name: 'Bone Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 7,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(9) + DEF(7) + HP(1) + MOV(2) + RNG(2)
    image: 'Bone Lord.png'
  },
  {
    name: 'Bone Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 7,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 22, // ATK(9) + DEF(7) + HP(2) + MOV(2) + RNG(2)
    image: 'Bone Lord.png'
  },
  {
    name: 'Bone Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 7,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(9) + DEF(7) + HP(0) + MOV(4) + RNG(0)
    image: 'Bone Lord.png'
  },
  {
    name: 'Bone Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 7,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(9) + DEF(7) + HP(1) + MOV(4) + RNG(0)
    image: 'Bone Lord.png'
  },
  {
    name: 'Bone Lord',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 7,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 22, // ATK(9) + DEF(7) + HP(2) + MOV(4) + RNG(0)
    image: 'Bone Lord.png'
  },
  // Name: Skeleton Warrior (ATK: 9, DEF: 8)
  {
    name: 'Skeleton Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 8,
    mov: 1,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 17, // ATK(9) + DEF(8) + HP(0) + MOV(0) + RNG(0)
    image: 'Skeleton Warrior.png'
  },
  {
    name: 'Skeleton Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 8,
    mov: 1,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 18, // ATK(9) + DEF(8) + HP(1) + MOV(0) + RNG(0)
    image: 'Skeleton Warrior.png'
  },
  {
    name: 'Skeleton Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 8,
    mov: 1,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(9) + DEF(8) + HP(2) + MOV(0) + RNG(0)
    image: 'Skeleton Warrior.png'
  },
  {
    name: 'Skeleton Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 8,
    mov: 1,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(9) + DEF(8) + HP(0) + MOV(0) + RNG(2)
    image: 'Skeleton Warrior.png'
  },
  {
    name: 'Skeleton Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 8,
    mov: 1,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(9) + DEF(8) + HP(1) + MOV(0) + RNG(2)
    image: 'Skeleton Warrior.png'
  },
  {
    name: 'Skeleton Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 8,
    mov: 1,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(9) + DEF(8) + HP(2) + MOV(0) + RNG(2)
    image: 'Skeleton Warrior.png'
  },
  {
    name: 'Skeleton Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 8,
    mov: 1,
    range: 3,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(9) + DEF(8) + HP(0) + MOV(0) + RNG(4)
    image: 'Skeleton Warrior.png'
  },
  {
    name: 'Skeleton Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 8,
    mov: 1,
    range: 3,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 22, // ATK(9) + DEF(8) + HP(1) + MOV(0) + RNG(4)
    image: 'Skeleton Warrior.png'
  },
  {
    name: 'Skeleton Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 8,
    mov: 1,
    range: 3,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 23, // ATK(9) + DEF(8) + HP(2) + MOV(0) + RNG(4)
    image: 'Skeleton Warrior.png'
  },
  {
    name: 'Skeleton Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 8,
    mov: 2,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 19, // ATK(9) + DEF(8) + HP(0) + MOV(2) + RNG(0)
    image: 'Skeleton Warrior.png'
  },
  {
    name: 'Skeleton Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 8,
    mov: 2,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 20, // ATK(9) + DEF(8) + HP(1) + MOV(2) + RNG(0)
    image: 'Skeleton Warrior.png'
  },
  {
    name: 'Skeleton Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 8,
    mov: 2,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(9) + DEF(8) + HP(2) + MOV(2) + RNG(0)
    image: 'Skeleton Warrior.png'
  },
  {
    name: 'Skeleton Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 8,
    mov: 2,
    range: 2,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(9) + DEF(8) + HP(0) + MOV(2) + RNG(2)
    image: 'Skeleton Warrior.png'
  },
  {
    name: 'Skeleton Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 8,
    mov: 2,
    range: 2,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 22, // ATK(9) + DEF(8) + HP(1) + MOV(2) + RNG(2)
    image: 'Skeleton Warrior.png'
  },
  {
    name: 'Skeleton Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 8,
    mov: 2,
    range: 2,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 23, // ATK(9) + DEF(8) + HP(2) + MOV(2) + RNG(2)
    image: 'Skeleton Warrior.png'
  },
  {
    name: 'Skeleton Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 8,
    mov: 3,
    range: 1,
    hp: 1,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 21, // ATK(9) + DEF(8) + HP(0) + MOV(4) + RNG(0)
    image: 'Skeleton Warrior.png'
  },
  {
    name: 'Skeleton Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 8,
    mov: 3,
    range: 1,
    hp: 2,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 22, // ATK(9) + DEF(8) + HP(1) + MOV(4) + RNG(0)
    image: 'Skeleton Warrior.png'
  },
  {
    name: 'Skeleton Warrior',
    type: 'minion',
    subType: 'minionbasic',
    atk: 9,
    def: 8,
    mov: 3,
    range: 1,
    hp: 3,
    canPlaceStructure: true,
    sectorValue: 2,
    manaCost: 23, // ATK(9) + DEF(8) + HP(2) + MOV(4) + RNG(0)
    image: 'Skeleton Warrior.png'
  }



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
