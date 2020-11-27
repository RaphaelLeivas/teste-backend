const express = require("express");
const routes = express.Router();

// import dos controllers
const UserController = require("./controllers/UserController");
const PersonagemController = require("./controllers/PersonagemController");

// 4 funções CRUD da rota /users
routes.get("/users/:userId", UserController.getByUser);
routes.post("/users", UserController.create); 
routes.put("/users/:userId", UserController.update); // o ':' indica que é params da rota 
routes.delete("/users/:userId", UserController.delete); 

// 4 funções CRUD da rota /personagem
routes.get("/personagem/:persId", PersonagemController.getByPers);
routes.post("/personagem", PersonagemController.create); 
routes.put("/personagem/:persId", PersonagemController.update); 
routes.delete("/personagem/:persId", PersonagemController.delete); 

module.exports = routes;