const connection = require('../database/connection');
const { v4: uuidv4 } = require('uuid');

/* 4 Funcoes CRUD para o Models
* Create
* Read
* Uptade
* Delete */
module.exports = { // esta exportando um objeto JavaScript (JSON)
    async create(users) {
        const newId = uuidv4();
        users.user_id = newId;
        
        const result = await connection("users").insert(users); // inserindo um novo users na migration (CREATE)
        return result;
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
        uptade(users);
        return result;
    },
    async deleteById(targetIndex) {
        const result = await connection("users")
            .where(targetIndex)
            .delete();
        return result;
    }
};