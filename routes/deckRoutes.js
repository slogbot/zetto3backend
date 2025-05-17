const express = require('express');
const router = express.Router();
const deckController = require('../controllers/deckController');
const authenticateToken = require('../middleware/authMiddleware');

// Build a new deck
router.post('/build', authenticateToken, deckController.buildDeck);
router.post('/select-home', authenticateToken, deckController.selectRandomHomeCard);
router.get('/owned', authenticateToken, deckController.getOwnedCards);
// Add this near the top:
router.post('/save', authenticateToken, deckController.saveDeck);

module.exports = router;
