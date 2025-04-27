const Card = require('../models/Card');
const User = require('../models/User');

// Open a pack (generate 10 cards)
exports.openPack = async (req, res) => {
  try {
    const userId = req.user.userId; // 🔥 comes from the JWT via authMiddleware

    // 1. Find 10 random cards from the general card pool
    const baseCards = await Card.aggregate([{ $sample: { size: 10 } }]);

    // 2. Duplicate them as new cards owned by the user
    const newCards = await Promise.all(baseCards.map(async (card) => {
      const newCard = new Card({
        name: card.name,
        type: card.type,
        subType: card.subType,
        owner: userId
      });
      await newCard.save();
      return newCard;
    }));

    // 3. Add new card IDs to user's ownedCards
    const user = await User.findById(userId);
    newCards.forEach(card => user.ownedCards.push(card._id));
    await user.save();

    // 4. Respond with the newly opened cards
    res.status(200).json({ message: 'Pack opened successfully', cards: newCards });
  } catch (error) {
    console.error('❌ Error opening pack:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};
