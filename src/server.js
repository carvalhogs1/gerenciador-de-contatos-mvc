const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const enableHotReload = require("./hot-reload");

var contatosController = require("./controllers/contatosController")

const app = express();

// Configuração do body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Configurações do seu app Express
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

console.log("Views path set to:", path.join(__dirname, "views"));

// Configuração de pasta pública
app.use(express.static(path.join(__dirname, "public")));

// Habilitar hot-reload
enableHotReload(app);

// Rotas
app.get("/", contatosController.exibirContatos);
app.get("/adicionar-novo-contato", contatosController.exibirNovoContato);
app.post("/adicionar", contatosController.adicionarContato)

// Inicie o servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});