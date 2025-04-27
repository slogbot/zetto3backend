const User = require('../models/User');
const Card = require('../models/Card');

// Build a new deck (overwrite the old one)
exports.buildDeck = async (req, res) => {
  try {
    const userId = req.user.userId;

    const user = await User.findById(userId).populate('ownedCards');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.ownedCards.length < 10) {
      return res.status(400).json({ message: 'Not enough owned cards to build a deck' });
    }

    // Randomly pick 10 owned cards
    const shuffled = user.ownedCards.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);

    // Set user's deck
    user.deck = selected.map(card => card._id);
    await user.save();

    res.status(200).json({ message: 'Deck built successfully', deck: selected });
  } catch (error) {
    console.error('❌ Error building deck:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};
