exports.up = function(knex) {
  return knex.schema.createTable('user', function(table){
      table.string('user_id').primary().notNullable();
      table.string('username').primary().notNullable();
      table.string('password').primary().notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
