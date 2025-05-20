module.exports = {
  id: 'emptyEffect',
  name: 'Empty Effect',
  duration: 3,

  apply: (occupant, game, source) => {
    console.log(`✅ Applying emptyEffect to ${occupant.name}`);
    occupant.activeEffects.push({
      name: 'emptyEffect',
      duration: 3,
      appliedAt: game.turnCount,
      source // ✅ Track source
    });
  },

  remove: (occupant, game, source) => {
    console.log(`🧹 Removing emptyEffect from ${occupant.name}`);
    occupant.activeEffects = occupant.activeEffects.filter(e =>
      !(e.name === 'emptyEffect' &&
        e.source.type === source.type &&
        e.source.id.toString() === source.id.toString())
    );
  }
};
