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
        
        const result = await connection("personagem").insert(personagem); // inserindo um novo personagem na migration (CREATE)
        return result;
    },

    async getById(personagem) { // Read
        const result = await connection("personagem")
            .where(personagem.personagem_id) // ta errado isso aqui, ver depois
            .select("*");
        return result;
    },

    async getPersonagemByIdWithFilters(targetNome, {otherFilters}){
        const result = await connection("personagem")
            .where({ nome: targetNome })
            .select("*");

        return result;
    },

    async updateById(targetId, personagem) {
        const result = await connection("personagem")
            .where({ personagem_id: targetId })
            .update(personagem);

        return result;
    },
    async deleteById(targetId) {
        const result = await connection("personagem")
            .where({ personagem_id: targetId })
            .delete();

        return result;
    }
};