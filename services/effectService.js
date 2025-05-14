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
function removeExpiredEffects(game) {
  const { grid } = game.board;
  const { phaseCount } = game;

  for (let row of grid) {
    for (let cell of row) {
      const occupant = cell.occupant;
      if (!occupant || !occupant.activeEffects?.length) continue;

      occupant.activeEffects = occupant.activeEffects.filter(effect => {
        const isExpired = (phaseCount >= (effect.appliedAt + effect.duration));

        if (isExpired) {
          const handler = effects[effect.name];
          if (handler?.remove) {
            console.log(`🧹 Removing expired effect '${effect.name}' from ${occupant.name}`);
            handler.remove(occupant, game);
          } else {
            console.warn(`⚠️ No removal handler for effect: ${effect.name}`);
          }
        }

        return !isExpired; // Keep only non-expired effects
      });
    }
  }
}


module.exports = {
  applyEffectById,
  removeExpiredEffects
};
