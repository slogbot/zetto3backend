module.exports = {
  id: 'boostRng1',
  name: 'Boost RNG +1',
  duration: 3,

  apply: (occupant, game, source) => {
    console.log(`✅ Applying boostRng1 to ${occupant.name}`);
    occupant.range += 1;
    occupant.activeEffects.push({
      name: 'boostRng1',
      duration: 3,
      appliedAt: game.phaseCount,
      source
    });
  },

  remove: (occupant, game, source) => {
    console.log(`🧹 Removing boostRng1 from ${occupant.name}`);
    occupant.range -= 1;
    occupant.activeEffects = occupant.activeEffects.filter(e =>
      !(e.name === 'boostRng1' &&
        e.source.type === source.type &&
        e.source.id.toString() === source.id.toString())
    );
  }
};
