module.exports = {
  id: 'setMov1',
  name: 'Set MOV to 1',
  duration: 1000,

  apply: (occupant, game, source) => {
    if (!occupant.originalStats) occupant.originalStats = {};
    if (occupant.originalStats.mov === undefined) {
      occupant.originalStats.mov = occupant.mov;
    }

    console.log(`✅ Applying setMov1 to ${occupant.name}`);
    occupant.mov = 1;

    occupant.activeEffects.push({
      name: 'setMov1',
      duration: 1000,
      appliedAt: game.turnCount,
      source
    });
  },

  remove: (occupant, game, source) => {
    console.log(`🧹 Removing setMov1 from ${occupant.name}`);
    if (occupant.originalStats?.mov !== undefined) {
      occupant.mov = occupant.originalStats.mov;
    }

    occupant.activeEffects = occupant.activeEffects.filter(e =>
      !(e.name === 'setMov1' &&
        e.source.type === source.type &&
        e.source.id.toString() === source.id.toString())
    );
  }
};
