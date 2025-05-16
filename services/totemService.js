const { applyEffectById } = require('./effectService');

function getCellsInRange(game, centerX, centerY, range) {
  const cellsInRange = [];
  const board = game.board.grid;

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      const distance = Math.abs(centerX - x) + Math.abs(centerY - y);
      if (distance <= range) {
        cellsInRange.push(board[y][x]);
      }
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
        typeof occupant.totemAura.effectId !== 'string' ||
        typeof occupant.totemAura.range !== 'number'
      ) {
        continue;
      }

      const { effectId, range } = occupant.totemAura;
      const source = {
        type: 'totem',
        id: occupant.cardId
      };

      console.log(`🌀 Totem found at (${x},${y}) applying '${effectId}' in range ${range}`);
      const affectedCells = getCellsInRange(game, x, y, range);

      for (const targetCell of affectedCells) {
        // ⛔ Skip applying to itself
        if (targetCell.x === x && targetCell.y === y) continue;

        const target = targetCell.occupant;
        if (!target || typeof target.name !== 'string') continue;

        console.log(`🔁 Attempting to apply '${effectId}' from totem at (${x},${y}) to ${target.name} at (${targetCell.x},${targetCell.y})`);
        applyEffectById(effectId, target, game, source);
      }
    }
  }

  console.log(`✅ Totem aura pass complete.`);
}


module.exports = {
  getCellsInRange,
  applyTotemAuras
};
