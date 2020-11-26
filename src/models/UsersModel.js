const connection = require('../database/connection');
const { v4: uuidv4 } = require('uuid');

/* 4 Funcoes CRUD para o Models
* Create
* Read
* Uptade
* Delete */
module.exports = { // esta exportando um objeto JavaScript (JSON)
    async create(user) {
        const newId = uuidv4(); // cria id aleatorio com a uuid
        user.user_id = newId;
        
        await connection("user").insert(user); // inserindo um novo users na migration (CREATE)
        return newId;
    },

    async getById(users) { // Read
        const result = await connection("users")
            .where(users.user_id)
            .select("*");
        return result;
    },

    async uptadeById(targetIndex, users) {
        const result = await connection("users")
            .where(targetIndex)
            .uptade(users);
        return result;
    },

    async deleteById(targetIndex) {
        const result = await connection("users")
            .where(targetIndex)
            .delete();
        return result;
    }
};