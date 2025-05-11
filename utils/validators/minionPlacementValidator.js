function getCell(board, x, y) {
  return board?.[y]?.[x] || null;
}

function isCellInBounds(board, x, y) {
  return y >= 0 && y < board.length && x >= 0 && x < board[0].length;
}
function isCellEmpty(cell) {
  // ✅ Match movementValidator logic exactly
  return !cell?.occupant?.cardId;
}



function isValidSpawner(occupant, userId) {
  return (
    occupant &&
    occupant.ownerId?.toString() === userId.toString() &&
    occupant.canPlaceMinion === true
  );
}

function hasAdjacentSpawner(board, x, y, userId) {
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
    if (isValidSpawner(neighbor?.occupant, userId)) {
      console.log(`✅ Found valid spawner at (${nx}, ${ny})`);
      return true;
    }
  }

  return false;
}

function validateMinionPlacement(game, x, y, userId) {
  console.log(`🧪 Validating placement at (${x}, ${y}) for user ${userId}`);
  const board = game.board.grid;
  const targetCell = getCell(board, x, y);

  if (!isCellInBounds(board, x, y)) {
    console.warn(`❌ Out of bounds: (${x}, ${y})`);
    return { valid: false, reason: 'Cell is out of bounds' };
  }

  if (!isCellEmpty(targetCell)) {
    console.warn(`❌ Cell occupied at (${x}, ${y})`);
    return { valid: false, reason: 'Cell already occupied' };
  }

  if (!hasAdjacentSpawner(board, x, y, userId)) {
    console.warn(`🚫 No adjacent friendly spawner found`);
    return { valid: false, reason: 'Must place next to a friendly unit with canPlaceMinion' };
  }

  return { valid: true };
}

module.exports = {
  validateMinionPlacement,
};
