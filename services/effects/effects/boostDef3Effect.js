module.exports = {
  id: 'boostDef3',
  name: 'Boost DEF +3',
  duration: 6,

  apply: (occupant, game, source) => {
    console.log(`✅ Applying boostDef3 to ${occupant.name}`);
    occupant.def += 3;
    occupant.activeEffects.push({
      name: 'boostDef3',
      duration: 6,
      appliedAt: game.turnCount,
      source
    });
  },

  remove: (occupant, game, source) => {
    console.log(`🧹 Removing boostDef3 from ${occupant.name}`);
    occupant.def -= 3;
    occupant.activeEffects = occupant.activeEffects.filter(e =>
      !(e.name === 'boostDef3' &&
        e.source.type === source.type &&
        e.source.id.toString() === source.id.toString())
    );
  }
};
