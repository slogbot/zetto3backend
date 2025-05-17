module.exports = {
  id: 'gainMana2',
  name: 'Gain 2 Mana',

    applyToPlayer: (player, game, source) => {
    console.log(`💰 Gaining +2 mana for player ${player.user}`);
    player.mana += 2;
  }
};
