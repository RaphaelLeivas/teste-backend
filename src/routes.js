const express = require("express");
const routes = express.Router();

const dadosSalvos = [ // vetor que salva tudo
{
    id: "abc123JHK0",
    idade: 19,
    nome: "Raphael Leivas"
}, 
{
    id: "abc123JHK1",
    idade: 20,
    nome: "Patricia Obendorf"
}];

routes.get("/users", (req, res) => {
    const query = req.query; // usado posteriormente para filtros

    res.status(200).json(dadosSalvos);
});

routes.post("/users", (req, res) => {
    const novosDados = req.body;
    console.log(novosDados);
    dadosSalvos.push(novosDados);

    res.json(dadosSalvos);
    //res.send("Sucesso!");
});

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

module.exports = routes;