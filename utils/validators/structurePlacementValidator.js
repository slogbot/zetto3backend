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

function validateStructurePlacement(game, x, y, userId) {
  console.log(`🧪 Validating structure placement at (${x}, ${y}) for user ${userId}`);
  const board = game.board.grid;
  const targetCell = getCell(board, x, y);

  if (!isCellInBounds(board, x, y)) {
    console.warn(`❌ Out of bounds: (${x}, ${y})`);
    return { valid: false, reason: 'Cell is out of bounds' };
  }

  if (!isCellEmpty(targetCell)) {
    console.warn(`❌ Cell already occupied at (${x}, ${y})`);
    return { valid: false, reason: 'Cell already occupied' };
  }

  if (!hasSpawnerInRange(board, x, y, userId)) {
    console.warn(`🚫 No friendly unit with canPlaceStructure in range`);
    return { valid: false, reason: 'Must place within range of a friendly unit with canPlaceStructure' };
  }

  return { valid: true };
}

module.exports = {
  validateStructurePlacement,
};
