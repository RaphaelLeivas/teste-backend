const UsersModel = require("../models/UsersModel");

module.exports = {
    async create(req, res) {
        try {
            const newUser = req.body; // os dados do novo user chegam da requisicao
            const result = await UsersModel.create(newUser); // o result recebe o id do novo user criado

            console.log("New user created successfully.");
            return res.status(200).json({newId: result}); // printa o novo id criado
        } catch (error) {
            console.warn("Internal server error while attempting to create new user:", error);
            return res.status(500).send("Internal server error while attempting to create new user.");
        }
    },
    
    async getByUser(req, res){
        try {
            const targetId = req.params.userId;
            const result = await UsersModel.getByUserWithFilters(targetId, {});

            res.status(200).json({ result });
        } catch (error) {
            console.warn("Internal server error while attempting to get user:", error);
            return res.status(500).send("Internal server error while attempting to get user.");
        }
    },

    async update(req, res){
        try {
            const targetId = req.params.userId; // vem do params da rota
            const newUser = req.body;

            const result = await UsersModel.updateById(targetId, newUser);

            console.log("User updated successfully.");
            return res.status(200).json({ result }); // mostra o numero de entradas atualizadas
            
        } catch (error) {
            console.warn("Internal server error while attempting to update user:", error);
            return res.status(500).send("Internal server error while attempting to update user.");
        }
    },

    async delete(req, res){
        try {
            const targetId = req.params.userId;
            const result = await UsersModel.deleteById(targetId);

            if(result === 0) 
                return res.status(400).send("User id not found.");

            return res.status(200).send("User deleted successfully.");
        } catch (error) {
            console.warn("Internal server error while attempting to delete user:", error);
            return res.status(500).send("Internal server error while attempting to delete user.");
        }
    }   
};