const sectorService = require('./sectorService');

// 🧠 Applies mana to the player who is about to become the active player
function applyManaGains(game) {
  const sectorControl = sectorService.calculateSectorControl(game);

  const controlCounts = {};
  for (const ownerId of Object.values(sectorControl)) {
    if (!ownerId) continue;
    controlCounts[ownerId] = (controlCounts[ownerId] || 0) + 2;
  }

  const activeId = game.activePlayer?.toString();
  if (!activeId) return;

  const player = game.players.find(p => p.user.toString() === activeId);
  if (player) {
    const gain = controlCounts[activeId] || 0;
    player.mana += gain;
    console.log(`💧 ManaService: Gave ${gain} mana to active player ${activeId}`);
  }
}


module.exports = {
  applyManaGains
};
