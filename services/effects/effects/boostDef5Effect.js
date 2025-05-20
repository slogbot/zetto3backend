module.exports = {
  id: 'boostDef5',
  name: 'Boost DEF +5',
  duration: 6,

  apply: (occupant, game, source) => {
    console.log(`✅ Applying boostDef5 to ${occupant.name}`);
    occupant.def += 5;
    occupant.activeEffects.push({
      name: 'boostDef5',
      duration: 6,
      appliedAt: game.turnCount,
      source
    });
  },

  remove: (occupant, game, source) => {
    console.log(`🧹 Removing boostDef5 from ${occupant.name}`);
    occupant.def -= 5;
    occupant.activeEffects = occupant.activeEffects.filter(e =>
      !(e.name === 'boostDef5' &&
        e.source.type === source.type &&
        e.source.id.toString() === source.id.toString())
    );
  }
};
