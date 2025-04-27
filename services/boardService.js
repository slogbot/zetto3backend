// services/boardService.js

function generateEmptyBoard(width = 9, height = 9) {
    const board = [];
  
    for (let y = 0; y < height; y++) {
      const row = [];
      for (let x = 0; x < width; x++) {
        row.push({
          x,
          y,
          occupiedBy: null,
          activeEffects: []
        });
      }
      board.push(row);
    }
  
    return { grid: board };
  }
  
  module.exports = {
    generateEmptyBoard
  };
  