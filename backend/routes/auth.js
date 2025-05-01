const express = require('express');
const router = express.Router();
const { login, logout } = require('../controllers/authController');
const { verifyToken } = require('../middleware/auth');

// Login dan Logout
router.post('/login', login);
router.post('/logout', logout, verifyToken );

// Route untuk mendapatkan data user yang sedang login
router.get('/me', verifyToken, (req, res) => {
  // verifyToken akan mengisi req.user dari JWT
  res.json({
    id: req.user.id,
    username: req.user.username,
    role: req.user.role
  });
});

module.exports = router;
