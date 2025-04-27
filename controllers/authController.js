// controllers/authController.js

const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Register
exports.register = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password required' });
  }

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(409).json({ message: 'Username already exists' });
  }

  const user = new User({ username, password });
  await user.save();

  res.status(201).json({ message: 'User registered successfully' });
};

// Login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    console.log(`[LOGIN FAILED] Missing fields: ${JSON.stringify(req.body)}`);
    return res.status(400).json({ message: 'Username and password required' });
  }

  try {
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      console.log(`[LOGIN FAILED] Invalid credentials for user: ${username}`);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    console.log(`[LOGIN SUCCESS] User: ${user.username}, ID: ${user._id}`);

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    console.error('[LOGIN ERROR]', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Logout
exports.logout = (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('[LOGOUT FAILED] No valid token provided');
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(`[LOGOUT] User ${decoded.username} (ID: ${decoded.userId}) has logged out.`);
    res.status(200).json({ message: 'Logout successful' });
  } catch (err) {
    console.log('[LOGOUT FAILED] Invalid token');
    res.status(401).json({ message: 'Invalid token' });
  }
};
