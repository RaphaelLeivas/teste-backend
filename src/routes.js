const express = require("express");
const routes = express.Router();

// import dos controllers
const UserController = require("./controllers/UserController");

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

// Abaixo estão as 4 funções CRUD da rota /users
routes.get("/users", (req, res) => {
    const query = req.query; // usado posteriormente para filtros

    res.status(200).json(dadosSalvos);
});

routes.post("/users", UserController.create); // funcionando

routes.put("/users/:userId", UserController.uptade); // o ':' indica que é params da rota

routes.delete("/users/:userId", (req, res) => {

});

module.exports = routes;