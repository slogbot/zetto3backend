module.exports = {
  id: 'boostAtk2',
  name: 'Boost ATK +2',
  duration: 3,

  apply: (occupant, game, source) => {
    console.log(`✅ Applying boostAtk2 to ${occupant.name}`);
    occupant.atk += 2;
    occupant.activeEffects.push({
      name: 'boostAtk2',
      duration: 3,
      appliedAt: game.turnCount,
      source
    });
  },

  remove: (occupant, game, source) => {
    console.log(`🧹 Removing boostAtk2 from ${occupant.name}`);
    occupant.atk -= 2;
    occupant.activeEffects = occupant.activeEffects.filter(e =>
      !(e.name === 'boostAtk2' &&
        e.source.type === source.type &&
        e.source.id.toString() === source.id.toString())
    );
  }
};
