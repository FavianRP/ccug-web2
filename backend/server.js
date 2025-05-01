require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

const authRoutes = require('./routes/auth');
const membersRoutes = require('./routes/members');
const contestsRoutes = require('./routes/contests');
const blogsRoutes = require('./routes/blogs');

app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000', // Ganti dengan URL frontend
  credentials: true // Izinkan cookie
}));
app.use(cookieParser()); // Aktifkan parsing cookie  
app.use(express.json());
app.use(express.static('public'));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // true if HTTPS
      httpOnly: true,
      sameSite: 'lax'
    }
  }));

app.use('/api/auth', authRoutes);
app.use('/api/members', membersRoutes);
app.use('/api/contests', contestsRoutes);
app.use('/api/blogs', blogsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
