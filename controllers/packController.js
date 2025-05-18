const Card = require('../models/Card');
const User = require('../models/User');

// Open a pack (generate 10 cards)
exports.openPack = async (req, res) => {
  try {
    const userId = req.user.userId; // 🔥 comes from the JWT via authMiddleware

    // 1. Find 10 random cards from the general card pool
    const baseCards = await Card.aggregate([{ $sample: { size: 10 } }]);

    // 2. Duplicate them as new cards owned by the user
    const newCards = await Promise.all(
      baseCards.map(async (card) => {
        // ✅ Safely determine sectorValue only for minions and structures
        const sectorValue =
          (card.type === 'minion' || card.type === 'structure')
            ? (card.sectorValue ?? 1)
            : undefined;

        const newCard = new Card({
          name: card.name,
          type: card.type,
          subType: card.subType,
          owner: userId,

          // ✅ Carry over manaCost
          manaCost: card.manaCost ?? 1,
          image: card.image, // ✅ ADD THIS LINE

          ...(card.type === 'spell' && {
            effect: card.effect ?? null
          }),
          ...(card.type === 'structure' && {
            totemAura: card.totemAura ?? undefined
          }),
          ...(card.type === 'minion' && {
            atk: card.atk ?? 1,
            def: card.def ?? 1,
            mov: card.mov ?? 1,
            range: card.range ?? 1,
            hp: card.hp ?? 1,
          }),

          canPlaceMinion: card.canPlaceMinion ?? false,
          canPlaceStructure: card.canPlaceStructure ?? false,

          ...(sectorValue !== undefined && { sectorValue })
        });

        await newCard.save();
        return newCard;
      })
    );

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
exports.openStructureSpellPack = async (req, res) => {
  try {
    const userId = req.user.userId;

    // Sample 5 structures
    const structureCards = await Card.aggregate([
      { $match: { type: 'structure' } },
      { $sample: { size: 5 } }
    ]);

    // Sample 5 spells
    const spellCards = await Card.aggregate([
      { $match: { type: 'spell' } },
      { $sample: { size: 5 } }
    ]);

    const baseCards = [...structureCards, ...spellCards];

    const newCards = await Promise.all(
      baseCards.map(async (card) => {
        const sectorValue =
          (card.type === 'minion' || card.type === 'structure')
            ? (card.sectorValue ?? 1)
            : undefined;

        const newCard = new Card({
          name: card.name,
          type: card.type,
          subType: card.subType,
          owner: userId,
          manaCost: card.manaCost ?? 1,
          image: card.image,

          ...(card.type === 'spell' && {
            effect: card.effect ?? null
          }),
          ...(card.type === 'structure' && {
            totemAura: card.totemAura ?? undefined
          }),
          ...(card.type === 'minion' && {
            atk: card.atk ?? 1,
            def: card.def ?? 1,
            mov: card.mov ?? 1,
            range: card.range ?? 1,
            hp: card.hp ?? 1
          }),

          canPlaceMinion: card.canPlaceMinion ?? false,
          canPlaceStructure: card.canPlaceStructure ?? false,

          ...(sectorValue !== undefined && { sectorValue })
        });

        await newCard.save();
        return newCard;
      })
    );

    const user = await User.findById(userId);
    newCards.forEach(card => user.ownedCards.push(card._id));
    await user.save();

    res.status(200).json({ message: 'Structure/Spell Pack opened', cards: newCards });
  } catch (error) {
    console.error('❌ Error opening structure/spell pack:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};
