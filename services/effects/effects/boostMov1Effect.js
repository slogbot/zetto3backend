module.exports = {
  id: 'boostMov1',
  name: 'Boost MOV +1',
  duration: 3,

  apply: (occupant, game, source) => {
    console.log(`✅ Applying boostMov1 to ${occupant.name}`);
    occupant.mov += 1;
    occupant.activeEffects.push({
      name: 'boostMov1',
      duration: 3,
      appliedAt: game.phaseCount,
      source
    });
  },

  remove: (occupant, game, source) => {
    console.log(`🧹 Removing boostMov1 from ${occupant.name}`);
    occupant.mov -= 1;
    occupant.activeEffects = occupant.activeEffects.filter(e =>
      !(e.name === 'boostMov1' &&
        e.source.type === source.type &&
        e.source.id.toString() === source.id.toString())
    );
  }
};
