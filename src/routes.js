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


routes.get("/users", (req, res) => {
    const query = req.query; // usado posteriormente para filtros

    res.status(200).json(dadosSalvos);
});

routes.post("/users", UserController.create);

routes.put("/users/:userId", (req, res) => { // o ':' indica que é params da rota
    const userId = req.params.userId; 
    const newFields = req.body;

    let selectedIndex;
    let selected = dadosSalvos.find((user, index) => {
        selectedIndex = index;
        return user.id === userId; // a key 'id' do JSON deve ser igual ao params da rota
    });

    selected = {...selected, ...newFields}; // add a key newFields
                                            // no JSON selected
    dadosSalvos[selectedIndex] = selected;

    res.status(200).send("Success!");
});

routes.delete("/users/:userId", (req, res) => {

});

module.exports = routes;