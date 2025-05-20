module.exports = {
  id: 'boostDef2',
  name: 'Boost DEF +2',
  duration: 6,

  apply: (occupant, game, source) => {
    console.log(`✅ Applying boostDef2 to ${occupant.name}`);
    occupant.def += 2;
    occupant.activeEffects.push({
      name: 'boostDef2',
      duration: 2,
      appliedAt: game.turnCount,
      source
    });
  },

  remove: (occupant, game, source) => {
    console.log(`🧹 Removing boostDef2 from ${occupant.name}`);
    occupant.def -= 2;
    occupant.activeEffects = occupant.activeEffects.filter(e =>
      !(e.name === 'boostDef2' &&
        e.source.type === source.type &&
        e.source.id.toString() === source.id.toString())
    );
  }
};
