const User = require('../models/User');

exports.getDeckForUser = async (userId) => {
  const user = await User.findById(userId).populate('deck'); // populate if you want full Card info
  if (!user || !user.deck || user.deck.length === 0) {
    throw new Error('User has no deck');
  }
  return user.deck;
};
