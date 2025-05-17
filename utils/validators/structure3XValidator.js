// utils/structure3XValidator.js

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
      return true;
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

  // Validate first cell (like normal placement)
  if (!isCellInBounds(board, first.x, first.y)) {
    return { valid: false, reason: 'First cell out of bounds' };
  }
  if (!isCellEmpty(getCell(board, first.x, first.y))) {
    return { valid: false, reason: 'First cell occupied' };
  }
  if (!hasAdjacentStructureSpawner(board, first.x, first.y, userId)) {
    return { valid: false, reason: 'First cell must be adjacent to structure spawner' };
  }

  // Validate second cell
  if (!isCellInBounds(board, second.x, second.y)) {
    return { valid: false, reason: 'Second cell out of bounds' };
  }
  if (!isCellEmpty(getCell(board, second.x, second.y))) {
    return { valid: false, reason: 'Second cell occupied' };
  }
  if (!areAdjacent(first, second)) {
    return { valid: false, reason: 'Second cell must be adjacent to first' };
  }

  // Validate third cell
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

module.exports = { validateStructure3XPlacement };
