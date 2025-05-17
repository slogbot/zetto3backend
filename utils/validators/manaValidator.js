function spendManaIfPossible(player, card) {
  const cost = card.manaCost ?? 0;
  if (player.mana < cost) {
    console.warn(`🚫 Not enough mana. Required: ${cost}, Available: ${player.mana}`);
    return { valid: false, reason: 'Not enough mana' };
  }

  player.mana -= cost;
  console.log(`💰 Spent ${cost} mana. Remaining: ${player.mana}`);
  return { valid: true };
}

module.exports = { spendManaIfPossible };
