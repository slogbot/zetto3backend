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
    occupant.canPlaceStructure === true
  );
}

function hasAdjacentStructureSpawner(board, x, y, userId) {
  const directions = [
    { dx: 0, dy: -1 },
    { dx: 0, dy: 1 },
    { dx: -1, dy: 0 },
    { dx: 1, dy: 0 },
  ];

  for (const { dx, dy } of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (!isCellInBounds(board, nx, ny)) continue;

    const neighbor = getCell(board, nx, ny);
    if (isValidStructureSpawner(neighbor?.occupant, userId)) {
      console.log(`🏗️ Found valid structure spawner at (${nx}, ${ny})`);
      return true;
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

  if (!hasAdjacentStructureSpawner(board, x, y, userId)) {
    console.warn(`🚫 No adjacent friendly structure spawner found`);
    return { valid: false, reason: 'Must place next to a friendly unit with canPlaceStructure' };
  }

  return { valid: true };
}

module.exports = {
  validateStructurePlacement,
};
