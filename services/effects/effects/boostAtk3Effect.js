module.exports = {
  id: 'boostAtk3',
  name: 'Boost ATK +3',
  duration: 3,

  apply: (occupant, game, source) => {
    console.log(`✅ Applying boostAtk3 to ${occupant.name}`);
    occupant.atk += 3;
    occupant.activeEffects.push({
      name: 'boostAtk3',
      duration: 3,
      appliedAt: game.phaseCount
    });
  },

  remove: (occupant, game) => {
    console.log(`🧹 Removing boostAtk3 from ${occupant.name}`);
    occupant.atk -= 3;
    occupant.activeEffects = occupant.activeEffects.filter(e => e.name !== 'boostAtk3');
  }
};
