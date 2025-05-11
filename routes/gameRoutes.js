const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');
const authenticateToken = require('../middleware/authMiddleware');

// 🔥 Routes
router.get('/', gameController.getAvailableGames);
router.post('/', authenticateToken, gameController.createGame);
router.post('/join/:id', authenticateToken, gameController.joinGame);
router.post('/draw/:gameId', authenticateToken, gameController.drawCard);
router.post('/:id/next-phase', authenticateToken, gameController.nextPhase);
router.post('/:id/place-minion', authenticateToken, gameController.placeMinion);
router.post('/:id/place-structure', authenticateToken, gameController.placeStructure);
router.post('/:id/move-minion', authenticateToken, gameController.moveMinion);
router.post('/:id/attack-minion', authenticateToken, gameController.attackMinion);
router.post('/:id/swap-turn', authenticateToken, gameController.swapTurn);

module.exports = router;
