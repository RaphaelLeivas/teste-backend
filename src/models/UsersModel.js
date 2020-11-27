const connection = require('../database/connection');
const { v4: uuidv4 } = require('uuid');

/* 4 Funcoes CRUD para o Models
* Create
* Read
* Uptade
* Delete */
module.exports = { // esta exportando um objeto JavaScript (JSON)
    async create(user) { // 'user' é o NOME DA TABELA criada nas migrations
        const newId = uuidv4(); // cria id aleatorio com a biblioteca uuid
        user.user_id = newId;
        
        await connection("user").insert(user); // inserindo um novo users na migration (CREATE)
        return newId;
    },

    async getById(user) { // Read
        const result = await connection("user")
            .where(user.user_id) // isso aqui ta errado, nao funciona
            .select("*")
            .first();
        return result;
    },

    async getByUserWithFilters(targetId, {otherFilters}){
        const result = await connection("user")
            .where({username: targetId}) // filtrando pelo username, targetId recebe o username via params
            .select("*");

        return result;
    },

    async uptadeById(targetId, user) {
        const result = await connection("user")
        .where({ user_id: targetId })
        .update(user);

        return result;
    },

    async deleteById(targetId) {
        const result = await connection("user")
            .where({ user_id: targetId })
            .delete();
        return result;
    }
};