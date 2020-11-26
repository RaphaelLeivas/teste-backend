const { uptadeById } = require("../models/UsersModel");
const UsersModel = require("../models/UsersModel");

const dadosSalvosUsers = [
    {
        user_id: "abc001",
        username: "Raphael",
        password: "19"
    },
    {
        id: "abc002",
        username: "Joanna",
        password: "25"
    },
    {
        id: "abc003",
        username: "Rogerio",
        password: "40"
    }
];

module.exports = {
    async create(req, res) {
        try {
            const newUser = req.body; // os dados do novo user chegam da requisicao
            const result = await UsersModel.create(newUser); // o result recebe o id do novo user criado

            console.log("New user created successfully.");
            return res.status(200).json({newId: result}); // printa o novo id criado
        } catch (error) {
            console.warn("Internal server error while attempting to create new user:", error);
            return res.status(500).send("Internal server error while attempting to create new user. (Status: 500)");
        }
    },
    
    async getByUser(req, res){

    },

    async uptade(req, res){
        try {
            const targetId = req.params.userId; // vem do params da rota
            const newUser = req.body;

            const result = await UsersModel.uptadeById(targetId, newUser);

            console.log("User uptaded successfully.");
            return res.status(200).json({ result }); // mostra o numero de entradas atualizadas
            
        } catch (error) {
            console.warn("Internal server error while attempting to uptade user:", error);
            return res.status(500).send("Internal server error while attempting to uptade user.");
        }
    },

    async delete(req, res){
        try {
            const targetId = req.params.userId;
            const result = await UsersModel.deleteById(targetId);

            return res.status(200).send("User deleted successfully.");
        } catch (error) {
            console.warn("Internal server error while attempting to delete user:", error);
            return res.status(500).send("Internal server error while attempting to delete user.");
        }
    }
};