const { applyEffectById } = require('./effectService');

function getAdjacentCells(game, centerX, centerY) {
  const board = game.board.grid;
  const cellsInRange = [];

  const directions = [
    [-1, -1], [0, -1], [1, -1],
    [-1,  0],          [1,  0],
    [-1,  1], [0,  1], [1,  1]
  ];

  for (const [dx, dy] of directions) {
    const x = centerX + dx;
    const y = centerY + dy;

    if (y >= 0 && y < board.length && x >= 0 && x < board[0].length) {
      cellsInRange.push(board[y][x]);
    }
  }

  return cellsInRange;
}

function applyTotemAuras(game) {
  const board = game.board.grid;
  console.log(`🌪️ Running totem aura check across the board...`);

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      const cell = board[y][x];
      const occupant = cell.occupant;

      if (
        !occupant ||
        !occupant.totemAura ||
        typeof occupant.totemAura.effectId !== 'string'
      ) {
        continue;
      }

      const { effectId } = occupant.totemAura;
      const source = {
        type: 'totem',
        id: occupant.cardId
      };

      console.log(`🌀 Totem found at (${x},${y}) applying '${effectId}' to adjacent cells`);
      const affectedCells = getAdjacentCells(game, x, y);

      for (const targetCell of affectedCells) {
        const target = targetCell.occupant;

        if (!target || typeof target.name !== 'string') continue;

        applyEffectById(effectId, target, game, source);
      }
    }
  }

  console.log(`✅ Totem aura pass complete.`);
}

module.exports = {
  getAdjacentCells,
  applyTotemAuras
};
