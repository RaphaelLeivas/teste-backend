exports.up = function(knex) {
  return knex.schema.createTable('user', function(table){
      table.string('user_id').primary().notNullable();
      table.string('username').notNullable();
      table.unique('username');
      table.string('email').notNullable();
      table.string('password');

      table.string('firebase_id').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
