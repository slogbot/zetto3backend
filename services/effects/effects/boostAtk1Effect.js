module.exports = {
  id: 'boostAtk1',
  name: 'Boost ATK +1',
  duration: 3,

  apply: (occupant, game, source) => {
    console.log(`✅ Applying boostAtk1 to ${occupant.name}`);
    occupant.atk += 1;
    occupant.activeEffects.push({
      name: 'boostAtk1',
      duration: 3,
      appliedAt: game.turnCount,
      source
    });
  },

  remove: (occupant, game, source) => {
    console.log(`🧹 Removing boostAtk1 from ${occupant.name}`);
    occupant.atk -= 1;
    occupant.activeEffects = occupant.activeEffects.filter(e =>
      !(e.name === 'boostAtk1' &&
        e.source.type === source.type &&
        e.source.id.toString() === source.id.toString())
    );
  }
};
