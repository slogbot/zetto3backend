//middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // "Bearer <token>"

  if (!token) {
    console.warn('❌ No token provided');
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.warn('❌ Token verification failed:', err.message);
      return res.sendStatus(403);
    }

    console.log('✅ Token valid. Decoded user:', user);
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
