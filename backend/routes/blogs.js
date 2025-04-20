const express = require('express');
const router = express.Router();
const db = require('../db/knex');

// GET /api/blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await db('blogs')
      .select('blogs.*', 'members.name as author_name')
      .leftJoin('members', 'blogs.author_id', 'members.id');
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Gagal mengambil data blog' });
  }
});

module.exports = router;