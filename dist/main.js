"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const item_controller_1 = require("./application/controller/item-controller");
const item_repository_memory_1 = require("./infra/repository/memory/item-repository-memory");
const tipo_item_repository_memory_1 = require("./infra/repository/memory/tipo-item-repository-memory");
const tipo_item_controller_1 = require("./application/controller/tipo-item-controller");
const pessoa_controller_1 = require("./application/controller/pessoa-controller");
const pessoa_repository_memory_1 = require("./infra/repository/memory/pessoa-repository-memory");
const usuario_repository_memory_1 = __importDefault(require("./infra/repository/memory/usuario-repository-memory"));
const usuario_controller_1 = require("./application/controller/usuario-controller");
const emprestimo_controller_1 = require("./application/controller/emprestimo-controller");
const emprestimo_repository_memory_1 = __importDefault(require("./infra/repository/memory/emprestimo-repository-memory"));
//chama librare
const app = (0, express_1.default)();
const port = 3002;
app.use(express_1.default.json());
//cria uma pagina e escreva a resposta
app.get('/', (request, response) => {
    response.send("Estoy aqui");
});
//define a porta para iniciar servidor
app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port);
});
//==============Item==============
const itemRepositoryMemory = new item_repository_memory_1.ItemRepositoryMemory();
const tipoItemRepositoryMemory = new tipo_item_repository_memory_1.TipoItemRepositoryMemory;
const itemController = new item_controller_1.ItemController(itemRepositoryMemory, tipoItemRepositoryMemory);
app.get('/itens', (request, response) => {
    response.send(itemController.getAll({}));
});
app.post('/itens', (request, response) => {
    response.send(itemController.create(request.body));
});
//==============Tipo Item==============
//const tipoItemRepositoryMemory = new TipoItemRepositoryMemory
const tipoItemController = new tipo_item_controller_1.TipoItemController(tipoItemRepositoryMemory);
app.get('/tipoItens', (request, response) => {
    response.send(tipoItemController.getAll({}));
});
app.post('/tipoItens', (request, response) => {
    response.send(tipoItemController.create(request.body));
});
//==============Pessoa==============
const pessoaRepositoryMemory = new pessoa_repository_memory_1.PessoaRepositoryMemory;
const pessoaController = new pessoa_controller_1.PessoaController(pessoaRepositoryMemory);
app.get('/pessoas', (request, response) => {
    response.send(pessoaController.getAll({}));
});
app.post('/pessoas', (request, response) => {
    response.send(pessoaController.create(request.body));
});
//==============Usuário==============
const usuarioRepositoryMemory = new usuario_repository_memory_1.default;
//const pessoaRepositoryMemory = new PessoaRepositoryMemory
const usuarioController = new usuario_controller_1.UsuarioController(usuarioRepositoryMemory, pessoaRepositoryMemory);
app.get('/usuario', (request, response) => {
    response.send(usuarioController.getAll({}));
});
app.post('/usuario', (request, response) => {
    response.send(usuarioController.create(request.body));
});
//==============Emprestimo==============
//const itemRepositoryMemory = new ItemRepositoryMemory();
//const usuarioRepositoryMemory = new UsuarioRepositoryMemory
//const pessoaRepositoryMemory = new PessoaRepositoryMemory
const emprestimoRepositoryMemory = new emprestimo_repository_memory_1.default;
const emprestimoController = new emprestimo_controller_1.EmprestimoController(emprestimoRepositoryMemory, itemRepositoryMemory, pessoaRepositoryMemory, usuarioRepositoryMemory);
app.get('/emprestimo', (request, response) => {
    response.send(emprestimoController.getAll({}));
});
app.post('/emprestimo', (request, response) => {
    response.send(emprestimoController.create(request.body));
});
