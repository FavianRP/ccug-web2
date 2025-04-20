const jwt = require('jsonwebtoken');

// Middleware untuk memverifikasi token
function verifyToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) return res.status(403).json({ message: 'Token required' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Menambahkan informasi user pada request
    next(); // Lanjut ke route handler
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
}

// Middleware untuk memeriksa apakah user adalah admin
function isAdmin(req, res, next) {
  if (req.user && req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin only' });
  }
  next();
}

module.exports = { verifyToken, isAdmin };
