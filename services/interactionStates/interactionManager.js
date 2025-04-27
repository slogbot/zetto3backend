const Game = require('../../models/Game');

async function changeState(gameId, newState, selectedCards = []) {
  const game = await Game.findById(gameId);
  if (!game) {
    throw new Error('Game not found');
  }

  game.interaction.state = newState;
  game.interaction.selectedCards = selectedCards;

  await game.save();

  console.log(`🎯 Game ${gameId} state changed to ${newState}`);
}

module.exports = {
  changeState
};
