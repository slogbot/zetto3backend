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
          activeEffects: [],
          occupant: null // ✅ make sure occupant is initially null
        });
      }
      board.push(row);
    }
  
    return { grid: board };
  }
  function placeHomeCardOnBoard(game, playerIndex, homeCard) {
    console.log(`📍 Attempting to place home card for player index ${playerIndex}`);
  
    const player = game.players[playerIndex];
    if (!player) {
      console.warn(`[BoardService] ❌ No player at index ${playerIndex}`);
      return;
    }
  
    if (!homeCard) {
      console.warn(`[BoardService] ❌ No homeCard object provided`);
      return;
    }
  
    const x = playerIndex === 0 ? 1 : 7;
    const y = playerIndex === 0 ? 1 : 7;
    const cell = game.board.grid?.[y]?.[x];
  
    if (!cell) {
      console.warn(`[BoardService] ❌ Invalid cell coordinates: (${x},${y})`);
      return;
    }
  
    if (cell.occupant && cell.occupant.cardId) {
      console.warn(`[BoardService] ⚠️ Cell at (${x},${y}) already occupied`);
      return;
    }
    
  
    cell.occupant = {
      cardId: homeCard._id,
      name: homeCard.name,
      type: homeCard.type,
      subType: homeCard.subType,
      ownerId: player.user,
      atk: homeCard.atk ?? 0,
      def: homeCard.def ?? 0,
      mov: homeCard.mov ?? 0,
      range: homeCard.range ?? 0,
      hp: homeCard.hp ?? 1,
      canPlaceMinion: homeCard.canPlaceMinion ?? false,
      canPlaceStructure: homeCard.canPlaceStructure ?? false
    };
  
    console.log(`[BoardService] ✅ Placed home card "${homeCard.name}" at (${x},${y}) for Player ${playerIndex + 1}`);
  }
  
  function placeMinionOnBoard(game, x, y, minionData) {
    const cell = game.board.grid[y][x];
    if (!cell) throw new Error(`[BoardService] Cell not found at (${x},${y})`);
    if (cell.occupant && cell.occupant.cardId) {
      throw new Error(`[BoardService] Cell already occupied at (${x},${y})`);
    }
      
    cell.occupant = {
      cardId: minionData.cardId,
      name: minionData.name,
      type: minionData.type,
      subType: minionData.subType,
      ownerId: minionData.ownerId,
      atk: minionData.atk,
      def: minionData.def,
      mov: minionData.mov,
      range: minionData.range,
      hp: minionData.hp,
      canPlaceMinion: minionData.canPlaceMinion ?? false,
      canPlaceStructure: minionData.canPlaceStructure ?? false,
      sectorValue: minionData.sectorValue ?? 1

    };
    
  
    console.log(`[BoardService] ✅ Minion placed at (${x},${y})`);
  }
  
  function placeStructureOnBoard(game, x, y, structureData) {
    const cell = game.board.grid[y][x];
    if (!cell) throw new Error(`[BoardService] Cell not found at (${x},${y})`);
    if (cell.occupant && cell.occupant.cardId) {
      throw new Error(`[BoardService] Cell already occupied at (${x},${y})`);
    }
      
    cell.occupant = {
      cardId: structureData.cardId,
      name: structureData.name,
      type: structureData.type,
      subType: structureData.subType,
      ownerId: structureData.ownerId,
      canPlaceMinion: structureData.canPlaceMinion ?? false,
      canPlaceStructure: structureData.canPlaceSpawner ?? false,
      sectorValue: structureData.sectorValue ?? 1,
      totemAura: structureData.totemAura ?? undefined


    };
  
    console.log(`[BoardService] 🏗️ Structure placed at (${x},${y})`);
  }
  
  module.exports = {
    generateEmptyBoard,
    placeHomeCardOnBoard,
    placeMinionOnBoard,
    placeStructureOnBoard
  };