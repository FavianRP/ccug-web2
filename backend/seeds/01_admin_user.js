// backend/seeds/01_users.js
const bcrypt = require('bcryptjs');

exports.seed = async function(knex) {
  // Hapus semua user (jika ada)
  await knex('users').del();

  // Hash password default
  const hashed = await bcrypt.hash('ccugADMIN', 10);

  // Insert admin user
  await knex('users').insert([
    { username: 'admin', password: hashed, role: 'admin' }
  ]);
};
