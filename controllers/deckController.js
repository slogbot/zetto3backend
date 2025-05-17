const User = require('../models/User');
const Card = require('../models/Card');

// Build a new deck (overwrite the old one)
exports.buildDeck = async (req, res) => {
  try {
    const userId = req.user.userId;

    const user = await User.findById(userId).populate('ownedCards');
    if (!user) return res.status(404).json({ message: 'User not found' });

    // ❌ Filter out any cards of type 'home'
    const nonHomeCards = user.ownedCards.filter(card => card.type !== 'home');
    if (nonHomeCards.length < 10) {
      return res.status(400).json({ message: 'Not enough non-home cards to build a deck' });
    }

    // 🎲 Shuffle and select 10 cards
    const shuffled = nonHomeCards.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);

    // 💾 Save deck
    user.deck = selected.map(card => card._id);
    await user.save();

    res.status(200).json({ message: 'Deck built successfully', deck: selected });
  } catch (error) {
    console.error('❌ Error building deck:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.selectRandomHomeCard = async (req, res) => {
  try {
    const userId = req.user.userId;

    const user = await User.findById(userId).populate('ownedCards');
    if (!user) return res.status(404).json({ message: 'User not found' });

    const homeCards = user.ownedCards.filter(card => card.type === 'home');
    if (homeCards.length === 0) {
      return res.status(400).json({ message: 'No home cards owned' });
    }

    const randomCard = homeCards[Math.floor(Math.random() * homeCards.length)];
    user.selectedHomeCard = randomCard._id;

    await user.save();
    res.status(200).json({ message: 'Home card selected', card: randomCard });
  } catch (err) {
    console.error('❌ Failed to select home card:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
exports.getOwnedCards = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).populate('ownedCards');
    if (!user) return res.status(404).json({ message: 'User not found' });

    const nonHomeCards = user.ownedCards.filter(card => card.type !== 'home');

    res.status(200).json({ cards: nonHomeCards });
  } catch (err) {
    console.error('❌ Error getting owned cards:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};
exports.saveDeck = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { selectedCardIds } = req.body;

    if (!Array.isArray(selectedCardIds) || selectedCardIds.length !== 20) {
      return res.status(400).json({ message: 'Exactly 20 cards must be selected' });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const ownedCardIds = user.ownedCards.map(id => id.toString());
    const invalid = selectedCardIds.find(id => !ownedCardIds.includes(id));
    if (invalid) return res.status(400).json({ message: `Card ${invalid} not owned` });

    user.deck = selectedCardIds;
    await user.save();

    res.status(200).json({ message: 'Deck saved successfully' });
  } catch (err) {
    console.error('❌ Error saving deck:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

