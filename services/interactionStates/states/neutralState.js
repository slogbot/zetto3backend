// services/interactionStates/neutralState.js
const interactionManager = require('../interactionManager');

async function handleCardClick(gameId, card) {
  console.log('🖐️ [NeutralState] Card clicked:', card);

  if (!card || !card.subType) {
    console.warn('⚠️ [NeutralState] No card subtype found.');
    return;
  }

  const subType = card.subType.toLowerCase(); // 🧠 Normalize case just in case

  let newState = null;

  switch (subType) {
    case 'minionbasic':
      newState = 'playMinionBasic';
      break;
    case 'structurebasic':
      newState = 'playStructureBasic';
      break;
    case 'field':
      newState = 'playFieldSpell';
      break;
    case 'direct to hand':
      newState = 'playDirectToHand';
      break;
    case 'direct to cell':
      newState = 'playDirectToCell';
      break;
    case 'direct to 2 cells':
      newState = 'playDirectTo2Cells';
      break;
    default:
      console.warn('⚠️ [NeutralState] Unknown card subtype:', subType);
      return;
  }

  await interactionManager.changeState(gameId, newState, [card._id]);
  console.log(`✅ [NeutralState] Interaction changed to: ${newState}`);
}

async function handleCellClick(gameId, cell) {
  console.log('🧩 [NeutralState] Cell clicked:', cell);
  // No action yet for neutral -> cell click
}

async function handleClick(gameId, type, data) {
  console.log('🖱️ [NeutralState] Handling click:', type, data);

  if (type === 'card') {
    await handleCardClick(gameId, data);
  } else if (type === 'cell') {
    await handleCellClick(gameId, data);
  } else {
    console.warn('⚠️ [NeutralState] Unknown click type:', type);
  }
}

module.exports = {
  handleClick,
  handleCardClick,
  handleCellClick
};
