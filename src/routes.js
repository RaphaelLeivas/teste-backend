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

// 4 funções CRUD da rota /users
routes.get("/users/:userId", UserController.getByUser);
routes.post("/users", UserController.create); 
routes.put("/users/:userId", UserController.uptade); // o ':' indica que é params da rota 
routes.delete("/users/:userId", UserController.delete); 

// 4 funções CRUD da rota /personagem

module.exports = routes;