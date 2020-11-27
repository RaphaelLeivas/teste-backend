const PersonagemModel = require("../models/PersonagemModel");

module.exports = {
    async create(req, res) {
        try {
            const newPers = req.body; // os dados do novo personagem chegam da requisicao
            const result = await PersonagemModel.create(newPers); // o result recebe o id do novo personagem criado

            console.log("New personagem created successfully.");
            return res.status(200).json({newId: result}); // printa o novo id criado
        } catch (error) {
            console.warn("Internal server error while attempting to create new personagem:", error);
            return res.status(500).send("Internal server error while attempting to create new personagem.");
        }
    },
    
    async getByPers(req, res){
        try {
            const targetId = req.params.persId;
            const result = await PersonagemModel.getPersonagemByIdWithFilters(targetId, {});

            res.status(200).json({ result });
        } catch (error) {
            console.warn("Internal server error while attempting to get personagem:", error);
            return res.status(500).send("Internal server error while attempting to get personagem.");
        }
    },

    async update(req, res){
        try {
            const targetId = req.params.persId; // vem do params da rota
            const newPers = req.body;

            const result = await PersonagemModel.updateById(targetId, newPers);

            console.log("personagem updated successfully.");
            return res.status(200).json({ result }); // mostra o numero de entradas atualizadas
            
        } catch (error) {
            console.warn("Internal server error while attempting to update personagem:", error);
            return res.status(500).send("Internal server error while attempting to update personagem.");
        }
    },

    async delete(req, res){
        try {
            const targetId = req.params.persId;
            const result = await PersonagemModel.deleteById(targetId);

            if(result === 0) 
                return res.status(400).send("personagem id not found.");

            return res.status(200).send("personagem deleted successfully.");
        } catch (error) {
            console.warn("Internal server error while attempting to delete personagem:", error);
            return res.status(500).send("Internal server error while attempting to delete personagem.");
        }
    }   
};