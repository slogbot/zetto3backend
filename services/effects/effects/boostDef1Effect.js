module.exports = {
  id: 'boostDef1',
  name: 'Boost DEF +1',
  duration: 6,

  apply: (occupant, game, source) => {
    console.log(`✅ Applying boostDef1 to ${occupant.name}`);
    occupant.def += 1;
    occupant.activeEffects.push({
      name: 'boostDef1',
      duration: 6,
      appliedAt: game.phaseCount,
      source
    });
  },

  remove: (occupant, game, source) => {
    console.log(`🧹 Removing boostDef1 from ${occupant.name}`);
    occupant.def -= 1;
    occupant.activeEffects = occupant.activeEffects.filter(e =>
      !(e.name === 'boostDef1' &&
        e.source.type === source.type &&
        e.source.id.toString() === source.id.toString())
    );
  }
};
