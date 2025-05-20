module.exports = {
  id: 'boostDef4',
  name: 'Boost DEF +4',
  duration: 6,

  apply: (occupant, game, source) => {
    console.log(`✅ Applying boostDef4 to ${occupant.name}`);
    occupant.def += 4;
    occupant.activeEffects.push({
      name: 'boostDef4',
      duration: 2,
      appliedAt: game.turnCount,
      source
    });
  },

  remove: (occupant, game, source) => {
    console.log(`🧹 Removing boostDef4 from ${occupant.name}`);
    occupant.def -= 4;
    occupant.activeEffects = occupant.activeEffects.filter(e =>
      !(e.name === 'boostDef4' &&
        e.source.type === source.type &&
        e.source.id.toString() === source.id.toString())
    );
  }
};
