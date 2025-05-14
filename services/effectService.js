const effects = require('./effects/registry');

function applyEffectById(effectId, occupant, game, source) {
  const effect = effects[effectId];
  if (!effect || typeof effect.apply !== 'function') {
    console.warn(`⚠️ No effect found for ID: ${effectId}`);
    return;
  }

  occupant.activeEffects ??= [];
  const alreadyExists = occupant.activeEffects.some(e => e.name === effect.id);
  if (alreadyExists) {
    console.log(`🛑 Effect ${effect.id} already present on occupant`);
    return;
  }

  effect.apply(occupant, game, source);
}

module.exports = {
  applyEffectById
};
