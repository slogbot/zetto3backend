module.exports = {
  id: 'boostAtk5',
  name: 'Boost ATK +5',
  duration: 3,

  apply: (occupant, game, source) => {
    console.log(`✅ Applying boostAtk5 to ${occupant.name}`);
    occupant.atk += 5;
    occupant.activeEffects.push({
      name: 'boostAtk5',
      duration: 3,
      appliedAt: game.turnCount,
      source
    });
  },

  remove: (occupant, game, source) => {
    console.log(`🧹 Removing boostAtk5 from ${occupant.name}`);
    occupant.atk -= 5;
    occupant.activeEffects = occupant.activeEffects.filter(e =>
      !(e.name === 'boostAtk5' &&
        e.source.type === source.type &&
        e.source.id.toString() === source.id.toString())
    );
  }
};
