// services/sectorService.js

function getSectorsFromBoard(grid) {
  const sectors = {};

  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      const sectorX = Math.floor(x / 3);
      const sectorY = Math.floor(y / 3);
      const key = `${sectorX}-${sectorY}`;

      if (!sectors[key]) {
        sectors[key] = [];
      }

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
    const valueMap = new Map();

    for (const cell of cells) {
      const occ = cell.occupant;
      if (occ && occ.ownerId && occ.sectorValue) {
        const ownerId = occ.ownerId.toString();
        const current = valueMap.get(ownerId) ?? 0;
        valueMap.set(ownerId, current + occ.sectorValue);
      }
    }

    let highest = -Infinity;
    let leader = null;
    let tie = false;

    for (const [ownerId, total] of valueMap.entries()) {
      if (total > highest) {
        highest = total;
        leader = ownerId;
        tie = false;
      } else if (total === highest) {
        tie = true;
      }
    }

    controlMap[sectorKey] = tie ? null : leader;
  }

  return controlMap;
}

module.exports = {
  calculateSectorControl
};
