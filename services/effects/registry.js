const emptyEffect = require('./effects/emptyEffect');
const boostAtk3 = require('./effects/boostAtk3Effect'); // ✅ new


const effectRegistry = {
  emptyEffect,
    boostAtk3,

};

module.exports = effectRegistry;
