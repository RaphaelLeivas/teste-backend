exports.up = function(knex) {
    return knex.schema.createTable('personagem', function(table){
        table.string('personagem_id').primary().notNullable();
        table.string('nome').primary().notNullable();
        table.foreign('nome').references('username').inTable('user').onDelete("cascade");
        table.string('genero').primary().notNullable();
        table.string('classe').primary().notNullable();
        table.string('cla').primary().notNullable();
        table.integer("idade").primary().notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('personagem');
  };
  
