module.exports = {
  id: 'emptyEffect',
  name: 'Empty Effect',
  duration: 3,

  apply: (occupant, game, source) => {
    console.log(`✅ Applying emptyEffect to ${occupant.name}`);
    occupant.activeEffects.push({
      name: 'emptyEffect',
      duration: 3,
      appliedAt: game.phaseCount
    });
  },

  remove: (occupant, game) => {
    console.log(`🧹 Removing emptyEffect from ${occupant.name}`);
    occupant.activeEffects = occupant.activeEffects.filter(e => e.name !== 'emptyEffect');
  }
};
