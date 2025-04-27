const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');
const authenticateToken = require('../middleware/authMiddleware');

// 🔥 Routes
router.get('/', gameController.getAvailableGames);
router.post('/', authenticateToken, gameController.createGame);
router.post('/join/:id', authenticateToken, gameController.joinGame);
router.post('/draw/:gameId', authenticateToken, gameController.drawCard);
router.post('/click/:id', authenticateToken, gameController.click);
router.post('/reset-interaction/:id', authenticateToken, gameController.resetInteraction);

module.exports = router;
