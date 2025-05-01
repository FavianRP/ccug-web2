const express = require('express');
const router = express.Router();

const { verifyToken, isAdmin } = require('../middleware/auth');
const db = require('../db/knex');

// GET all members
router.get('/', async (req, res) => {
  try {
    const members  = await db('members').select('*');
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching members' });
  }
});

// CREATE member (Admin only)
router.post('/', verifyToken, isAdmin, async (req, res) => {
  try {
    const { name, bio, photo_url, position } = req.body;
    const [id] = await db('members').insert({ name, bio, photo_url, position });
    res.status(201).json({ id });
  } catch (err) {
    res.status(500).json({ message: 'Error creating member' });
  }
}, verifyToken);

// UPDATE member (Admin only)
router.put('/:id', verifyToken, isAdmin, async (req, res) => {
  try {
    const { name, bio, photo_url, position } = req.body;
    await db('members').where('id', req.params.id).update({ name, bio, photo_url, position });
    res.json({ message: 'Member updated' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating member' });
  }
}, verifyToken);

// DELETE member (Admin only)
router.delete('/:id', verifyToken, isAdmin, async (req, res) => {
  try {
    await db('members').where('id', req.params.id).del();
    res.json({ message: 'Member deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting member' });
  }
}, verifyToken);

module.exports = router;
