"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const item_controller_1 = require("./application/controller/item-controller");
const tipo_item_controller_1 = require("./application/controller/tipo-item-controller");
const pessoa_controller_1 = require("./application/controller/pessoa-controller");
const usuario_controller_1 = require("./application/controller/usuario-controller");
const emprestimo_controller_1 = require("./application/controller/emprestimo-controller");
const postgres_connection_1 = require("./infra/config-database/postgres-connection");
const database_repository_factory_1 = require("./infra/config-database/database-repository-factory");
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
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, access-token');
    next();
});
const dadosconexao = {
    user: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || '',
    host: process.env.DB_HOST || '',
    port: process.env.DB_PORT || ''
};
console.log(dadosconexao);
const connectionPostgreSQL = new postgres_connection_1.PostgresConnection(dadosconexao);
const repositoryFactory = new database_repository_factory_1.DatabaseRepositoryFactory(connectionPostgreSQL);
//==============Item==============
const itemController = new item_controller_1.ItemController(repositoryFactory);
app.get('/itens', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.send(yield itemController.getAll({}));
}));
app.post('/itens', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.send(yield itemController.create(request.body));
}));
app.get('/itens/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    response.send(yield itemController.getById({ id }));
}));
app.delete('/itens/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    response.send(yield itemController.delete({ id }));
}));
app.put('/itens/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    const body = request.body;
    const newItem = Object.assign({ id }, body);
    response.send(yield itemController.update(newItem));
}));
//==============Tipo Item==============
const tipoItemController = new tipo_item_controller_1.TipoItemController(repositoryFactory);
app.get('/tipoItens', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.send(yield tipoItemController.getAll({}));
}));
app.post('/tipoItens', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.send(yield tipoItemController.create(request.body));
}));
app.get('/tipoItens/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    response.send(yield tipoItemController.getByID({ id }));
}));
app.put('/tipoItens/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    const body = request.body;
    const newTipoItem = Object.assign({ id }, body);
    response.send(yield tipoItemController.update(newTipoItem));
}));
app.delete('/tipoItens/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    response.send(yield tipoItemController.delete({ id }));
}));
//==============Pessoa==============
const pessoaController = new pessoa_controller_1.PessoaController(repositoryFactory);
app.get('/pessoas', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.send(yield pessoaController.getAll({}));
}));
app.post('/pessoas', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.send(yield pessoaController.create(request.body));
}));
app.get('/pessoas/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    response.send(yield pessoaController.getById({ id }));
}));
app.put('/pessoas/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    const body = request.body;
    const newPessoa = Object.assign({ id }, body);
    response.send(yield pessoaController.update(newPessoa));
}));
app.delete('/pessoas/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    response.send(yield pessoaController.delete({ id }));
}));
//==============Usuário==============
const usuarioController = new usuario_controller_1.UsuarioController(repositoryFactory);
app.get('/usuario', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.send(yield usuarioController.getAll({}));
}));
app.post('/usuario', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.send(yield usuarioController.create(request.body));
}));
app.get('/usuario/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    response.send(yield usuarioController.getById({ id }));
}));
app.delete('/usuario/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    response.send(yield usuarioController.delete({ id }));
}));
app.put('/usuario/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    const body = request.body;
    const newUsuario = Object.assign({ id }, body);
    response.send(yield usuarioController.update(newUsuario));
}));
//==============Emprestimo==============
const emprestimoController = new emprestimo_controller_1.EmprestimoController(repositoryFactory);
app.get('/emprestimo', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.send(yield emprestimoController.getAll({}));
}));
app.post('/emprestimo', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    response.send(yield emprestimoController.create(request.body));
}));
app.get('/emprestimo/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    response.send(yield emprestimoController.getById({ id }));
}));
app.delete('/emprestimo/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    response.send(yield emprestimoController.delete({ id }));
}));
app.put('/emprestimo/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const id = request.params.id;
    const body = request.body;
    const newEmprestimo = Object.assign({ id }, body);
    response.send(yield emprestimoController.update(newEmprestimo));
}));
