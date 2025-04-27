const Game = require('../models/Game');
const Card = require('../models/Card');

async function drawCard(gameId, userId) {
  const game = await Game.findById(gameId);
  if (!game) throw new Error('Game not found');

  const player = game.players.find(p => p.user.toString() === userId);
  if (!player) throw new Error('Player not found');

  if (player.deck.length === 0) {
    throw new Error('Deck is empty');
  }

  const cardId = player.deck.shift(); // Take first card
  player.hand.push(cardId);

  await game.save();

  // 🧠 After saving, populate the hand properly!
  const populatedGame = await Game.findById(gameId).populate('players.hand');
  const updatedPlayer = populatedGame.players.find(p => p.user.toString() === userId);

  return { hand: updatedPlayer.hand };
}

module.exports = {
  drawCard
};
