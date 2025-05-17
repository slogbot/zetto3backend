const emptyEffect = require('./effects/emptyEffect');
const gainMana2 = require('./effects/gainMana2Effect');

const boostAtk1 = require('./effects/boostAtk1Effect');
const boostAtk2 = require('./effects/boostAtk2Effect');
const boostAtk3 = require('./effects/boostAtk3Effect');
const boostAtk4 = require('./effects/boostAtk4Effect');
const boostAtk5 = require('./effects/boostAtk5Effect');

const boostDef1 = require('./effects/boostDef1Effect');
const boostDef2 = require('./effects/boostDef2Effect');
const boostDef3 = require('./effects/boostDef3Effect');
const boostDef4 = require('./effects/boostDef4Effect');
const boostDef5 = require('./effects/boostDef5Effect');
const boostRng1 = require('./effects/boostRng1Effect');
const boostMov1 = require('./effects/boostMov1Effect');


const effectRegistry = {
  emptyEffect,
  gainMana2,

  boostAtk1,boostAtk2,boostAtk3,boostAtk4,boostAtk5,

  boostDef1,boostDef2,boostDef3,boostDef4,boostDef5,

  boostRng1,boostMov1

  
};

module.exports = effectRegistry;
