exports.up = function(knex) {
    return knex.schema.createTable('personagem', function(table){
        table.string('personagem_id').primary().notNullable();
        table.string('nome').notNullable();
        table.foreign('nome').references('username').inTable('user').onDelete("cascade");
        table.string('genero').notNullable();
        table.string('classe').notNullable();
        table.string('cla').notNullable();
        table.integer("idade").notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('personagem');
  };
  
