const connection = require('../database/connection');
const { v4: uuidv4 } = require('uuid');

/* 4 Funcoes CRUD para o Models
* Create
* Read
* Uptade
* Delete */
module.exports = { // esta exportando um objeto JavaScript (JSON)
    async create(personagem) {
        const newId = uuidv4();
        personagem.personagem_id = newId;
        
        const result = await connection("personagem").insert(personagem); // inserindo um novo users na migration (CREATE)
        return result;
    },
    async getById(personagem) { // Read
        const result = await connection("personagem")
            .where(personagem.personagem_id)
            .select("*");
        return result;
    },
    async uptadeById(targetIndex, personagem) {
        const result = await connection("personagem")
            .where(targetIndex)
            .uptade(personagem);
        return result;
    },
    async deleteById(targetIndex) {
        const result = await connection("personagem")
            .where(targetIndex)
            .delete();
        return result;
    }
};