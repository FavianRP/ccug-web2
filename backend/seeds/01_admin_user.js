const bcrypt = require('bcryptjs');

exports.seed = async function(knex) {
  const hashedPassword = await bcrypt.hash('ccugADMIN', 10); // ganti sesuai keinginan

  await knex('users').del(); // hapus data user dulu biar clean
  await knex('users').insert([
    {
      username: 'admin',
      password: hashedPassword,
      role: 'admin'
    }
  ]);
};
