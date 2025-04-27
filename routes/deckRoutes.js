const express = require('express');
const router = express.Router();
const deckController = require('../controllers/deckController');
const authenticateToken = require('../middleware/authMiddleware');

// Build a new deck
router.post('/build', authenticateToken, deckController.buildDeck);

module.exports = router;
