const express = require('express');
const router = express.Router();
const packController = require('../controllers/packController');
const authenticateToken = require('../middleware/authMiddleware');

// Open a pack (protected route)
router.post('/open', authenticateToken, packController.openPack);

module.exports = router;
