exports.up = function(knex) {
  return knex.schema.createTable('user', function(table){
      table.string('user_id').primary().notNullable();
      table.string('username').notNullable();
      table.string('password').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
