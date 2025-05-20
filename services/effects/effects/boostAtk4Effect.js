module.exports = {
  id: 'boostAtk4',
  name: 'Boost ATK +4',
  duration: 3,

  apply: (occupant, game, source) => {
    console.log(`✅ Applying boostAtk4 to ${occupant.name}`);
    occupant.atk += 4;
    occupant.activeEffects.push({
      name: 'boostAtk4',
      duration: 3,
      appliedAt: game.turnCount,
      source
    });
  },

  remove: (occupant, game, source) => {
    console.log(`🧹 Removing boostAtk4 from ${occupant.name}`);
    occupant.atk -= 4;
    occupant.activeEffects = occupant.activeEffects.filter(e =>
      !(e.name === 'boostAtk4' &&
        e.source.type === source.type &&
        e.source.id.toString() === source.id.toString())
    );
  }
};
