const express = require("express");
const routes = express.Router();

// import dos controllers
const UserController = require("./controllers/UserController");
const PersonagemController = require("./controllers/PersonagemController");

// import dos validators
const UserValidator = require("./validators/UserValidator");
const PersonagemValidator = require("./validators/PersonagemValidator");

// rota /users
routes.get("/users/:userId", UserValidator.getByUser, UserController.getByUser);
routes.post("/users", UserValidator.create, UserController.create); 
routes.put("/users/:userId", UserValidator.update, UserController.update); 
routes.delete("/users/:userId", UserValidator.delete, UserController.delete); 

// rota /personagem
routes.get("/personagem/:persId",  PersonagemController.getByPers);
routes.post("/personagem", PersonagemController.create); 
routes.put("/personagem/:persId", PersonagemController.update); 
routes.delete("/personagem/:persId", PersonagemController.delete); 

module.exports = routes;