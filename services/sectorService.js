// services/sectorService.js
function getSectorsFromBoard(grid) {
  const sectors = {};

  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      const sectorX = Math.floor(x / 3);
      const sectorY = Math.floor(y / 3);
      const key = `${sectorX}-${sectorY}`;
      if (!sectors[key]) sectors[key] = [];
      sectors[key].push(grid[y][x]);
    }
  }

  return sectors;
}

function calculateSectorControl(game) {
  const grid = game.board.grid;
  const sectors = getSectorsFromBoard(grid);
  const controlMap = {};

  for (const [sectorKey, cells] of Object.entries(sectors)) {
    const tally = new Map();

    for (const cell of cells) {
      const occ = cell.occupant;
      if (!occ || !occ.ownerId || typeof occ.sectorValue !== 'number') continue;

      const ownerId = occ.ownerId.toString();
      const prev = tally.get(ownerId) || 0;
      tally.set(ownerId, prev + occ.sectorValue);
    }

    if (tally.size === 0) {
      controlMap[sectorKey] = null;
      continue;
    }

    let highest = -Infinity;
    let leaders = [];

    for (const [ownerId, value] of tally.entries()) {
      if (value > highest) {
        highest = value;
        leaders = [ownerId];
      } else if (value === highest) {
        leaders.push(ownerId);
      }
    }

    controlMap[sectorKey] = leaders.length === 1 ? leaders[0] : null;

    // 🪵 Debug logging
    console.log(`🧠 Sector ${sectorKey}:`, Object.fromEntries(tally), '→ Control:', controlMap[sectorKey] ?? 'DRAW');
  }

  return controlMap;
}

module.exports = {
  calculateSectorControl
};
