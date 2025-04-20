exports.up = function(knex) {
    return knex.schema
      .createTable('users', table => {
        table.increments('id').primary();
        table.string('username').unique().notNullable();
        table.string('password').notNullable(); // disimpan dalam bentuk hash
        table.string('role').defaultTo('admin'); // bisa 'user' atau 'admin'
      })
      .createTable('members', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.text('bio');
        table.string('photo_url');
        table.string('position').defaultTo('member'); // bisa dipakai untuk 'admin', 'member', dll
      })
      .createTable('contests', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.date('date');
        table.text('description');
        table.string('link');
      })
      .createTable('blogs', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('content').notNullable(); // bisa markdown
        table.integer('author_id').unsigned().references('id').inTable('members').onDelete('CASCADE');
        table.timestamp('created_at').defaultTo(knex.fn.now());
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('blogs')
      .dropTableIfExists('contests')
      .dropTableIfExists('members')
      .dropTableIfExists('users');
  };
  