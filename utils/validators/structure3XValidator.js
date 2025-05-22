function getCell(board, x, y) {
  return board?.[y]?.[x] || null;
}

function isCellInBounds(board, x, y) {
  return y >= 0 && y < board.length && x >= 0 && x < board[0].length;
}

function isCellEmpty(cell) {
  return !cell?.occupant?.cardId;
}

function isValidStructureSpawner(occupant, userId) {
  return (
    occupant &&
    occupant.ownerId?.toString() === userId.toString() &&
    occupant.canPlaceStructure === true &&
    typeof occupant.range === 'number' &&
    occupant.hp > 0
  );
}

function isWithinRange(x1, y1, x2, y2, range) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2) <= range;
}

function hasSpawnerInRange(board, x, y, userId) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const cell = board[row][col];
      const occupant = cell?.occupant;

      if (isValidStructureSpawner(occupant, userId)) {
        const range = occupant.range;
        if (isWithinRange(col, row, x, y, range)) {
          console.log(`🏗️ Found valid spawner at (${col}, ${row}) with range ${range}`);
          return true;
        }
      }
    }
  }

  return false;
}

function areAdjacent(c1, c2) {
  const dx = Math.abs(c1.x - c2.x);
  const dy = Math.abs(c1.y - c2.y);
  return (dx + dy === 1); // 4-directional adjacency only
}

function validateStructure3XPlacement(game, cells, userId) {
  const board = game.board.grid;
  if (cells.length !== 3) return { valid: false, reason: 'Must select 3 cells' };

  const [first, second, third] = cells;

  // 🔍 First cell validation (range-based)
  if (!isCellInBounds(board, first.x, first.y)) {
    return { valid: false, reason: 'First cell out of bounds' };
  }
  if (!isCellEmpty(getCell(board, first.x, first.y))) {
    return { valid: false, reason: 'First cell occupied' };
  }
  if (!hasSpawnerInRange(board, first.x, first.y, userId)) {
    return { valid: false, reason: 'No spawner with range covers first cell' };
  }

  // 🧱 Second cell validation
  if (!isCellInBounds(board, second.x, second.y)) {
    return { valid: false, reason: 'Second cell out of bounds' };
  }
  if (!isCellEmpty(getCell(board, second.x, second.y))) {
    return { valid: false, reason: 'Second cell occupied' };
  }
  if (!areAdjacent(first, second)) {
    return { valid: false, reason: 'Second cell must be adjacent to first' };
  }

  // 🧱 Third cell validation
  if (!isCellInBounds(board, third.x, third.y)) {
    return { valid: false, reason: 'Third cell out of bounds' };
  }
  if (!isCellEmpty(getCell(board, third.x, third.y))) {
    return { valid: false, reason: 'Third cell occupied' };
  }
  if (!(areAdjacent(third, first) || areAdjacent(third, second))) {
    return { valid: false, reason: 'Third cell must be adjacent to first or second' };
  }

  return { valid: true };
}

module.exports = {
  validateStructure3XPlacement
};
