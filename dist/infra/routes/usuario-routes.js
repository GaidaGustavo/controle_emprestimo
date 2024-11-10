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
const usuario_repository_memory_1 = __importDefault(require("../repository/memory/usuario-repository-memory"));
const usuario_controller_1 = require("../../application/controller/usuario-controller");
const pessoa_repository_memory_1 = require("../repository/memory/pessoa-repository-memory");
//chama librare
const app = (0, express_1.default)();
const port = 3002;
app.use(express_1.default.json());
//define a porta para iniciar servidor
app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port);
});
const usuarioRepositoryMemory = new usuario_repository_memory_1.default;
const pessoaRepositoryMemory = new pessoa_repository_memory_1.PessoaRepositoryMemory;
const usuarioController = new usuario_controller_1.UsuarioController(usuarioRepositoryMemory, pessoaRepositoryMemory);
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
