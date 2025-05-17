module.exports = {
  id: 'setRng1',
  name: 'Set RNG to 1',
  duration: 1000,

  apply: (occupant, game, source) => {
    if (!occupant.originalStats) occupant.originalStats = {};
    if (occupant.originalStats.range === undefined) {
      occupant.originalStats.range = occupant.range;
    }

    console.log(`✅ Applying setRng1 to ${occupant.name}`);
    occupant.range = 1;

    occupant.activeEffects.push({
      name: 'setRng1',
      duration: 1000,
      appliedAt: game.phaseCount,
      source
    });
  },

  remove: (occupant, game, source) => {
    console.log(`🧹 Removing setRng1 from ${occupant.name}`);
    if (occupant.originalStats?.range !== undefined) {
      occupant.range = occupant.originalStats.range;
    }

    occupant.activeEffects = occupant.activeEffects.filter(e =>
      !(e.name === 'setRng1' &&
        e.source.type === source.type &&
        e.source.id.toString() === source.id.toString())
    );
  }
};
