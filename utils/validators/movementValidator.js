// utils/validators/movementValidator.js

function isCellEmpty(cell) {
    return !cell.occupant?.cardId;
  }
  
  function isWithinMoveRange(from, to, maxDistance) {
    const dx = Math.abs(from.x - to.x);
    const dy = Math.abs(from.y - to.y);
    return dx + dy <= maxDistance;
  }
  
  function isOwnedByUser(cell, userId) {
    return cell.occupant?.ownerId?.toString() === userId.toString();
  }
  
  function isPathAvailable(board, from, to, maxSteps) {
    const width = board[0].length;
    const height = board.length;
    const visited = Array.from({ length: height }, () => Array(width).fill(false));
    const queue = [{ x: from.x, y: from.y, steps: 0 }];
    visited[from.y][from.x] = true;
  
    const directions = [
      { dx: 0, dy: 1 },
      { dx: 1, dy: 0 },
      { dx: 0, dy: -1 },
      { dx: -1, dy: 0 }
    ];
  
    while (queue.length > 0) {
      const { x, y, steps } = queue.shift();
  
      if (x === to.x && y === to.y) return true;
      if (steps >= maxSteps) continue;
  
      for (const { dx, dy } of directions) {
        const nx = x + dx;
        const ny = y + dy;
  
        if (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;
        if (visited[ny][nx]) continue;
  
        const nextCell = board[ny][nx];
        const isTarget = nx === to.x && ny === to.y;
        const isBlocked = nextCell.occupant?.cardId && !isTarget;
  
        if (isBlocked) continue;
  
        visited[ny][nx] = true;
        queue.push({ x: nx, y: ny, steps: steps + 1 });
      }
    }
  
    return false;
  }
  
  function validateMovement(game, from, to, userId) {
    const sourceCell = game.board.grid[from.y]?.[from.x];
    const targetCell = game.board.grid[to.y]?.[to.x];
  
    if (!sourceCell || !targetCell) {
      return { valid: false, reason: 'Invalid coordinates' };
    }
  
    if (!sourceCell.occupant) {
      return { valid: false, reason: 'Source cell has no occupant' };
    }
  
    if (!isOwnedByUser(sourceCell, userId)) {
      return { valid: false, reason: 'You do not own this unit' };
    }
  
    const movementStat = sourceCell.occupant.mov;
    if (movementStat == null) {
      return { valid: false, reason: 'Unit has no movement stat' };
    }
  
    if (!isWithinMoveRange(from, to, movementStat)) {
      return { valid: false, reason: 'Target is out of movement range' };
    }
  
    if (!isPathAvailable(game.board.grid, from, to, movementStat)) {
      return { valid: false, reason: 'No valid path to target cell' };
    }
  
    if (!isCellEmpty(targetCell)) {
      return { valid: false, reason: 'Target cell is not empty' };
    }
  
    return { valid: true };
  }
  
  module.exports = {
    isCellEmpty,
    isWithinMoveRange,
    isOwnedByUser,
    isPathAvailable,
    validateMovement
  };
  