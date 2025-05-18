const express = require('express');
const router = express.Router();
const packController = require('../controllers/packController');
const authenticateToken = require('../middleware/authMiddleware');

// Open a standard pack (protected route)
router.post('/open', authenticateToken, packController.openPack);

// Open a structure/spell pack (protected route)
router.post('/open-structure-spell', authenticateToken, packController.openStructureSpellPack);

// Open a tiered minion pack (protected route)
router.post('/open-tiered-minion', authenticateToken, packController.openTieredMinionPack);

module.exports = router;
