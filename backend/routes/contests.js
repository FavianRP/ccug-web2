const express = require('express');
const router = express.Router();
const db = require('../db/knex');

// GET /api/contests
router.get('/', async (req, res) => {
  try {
    const contests = await db('contests').select();
    res.json(contests);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Gagal mengambil data kontes' });
  }
});

module.exports = router;