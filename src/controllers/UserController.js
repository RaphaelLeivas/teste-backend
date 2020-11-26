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

            return res.status(200).send("New user created successfully.");
        } catch (error) {
            console.warn("Internal server error while attempting to create new user:", error);
            return res.status(500).send("Internal server error while attempting to create new user. (Status: 500)");
        }
    },
    
    async getByUser(req, res){

    }
};