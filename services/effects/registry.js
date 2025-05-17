const emptyEffect = require('./effects/emptyEffect');
const boostAtk3 = require('./effects/boostAtk3Effect'); // ✅ new
const gainMana2 = require('./effects/gainMana2Effect'); // ✅ NEW


const effectRegistry = {
  emptyEffect,
    boostAtk3,
gainMana2
};

module.exports = effectRegistry;
