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
const pessoa_repository_memory_1 = require("../repository/memory/pessoa-repository-memory");
const pessoa_controller_1 = require("../../application/controller/pessoa-controller");
//chama librare
const app = (0, express_1.default)();
const port = 3002;
app.use(express_1.default.json());
//define a porta para iniciar servidor
app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port);
});
const pessoaRepositoryMemory = new pessoa_repository_memory_1.PessoaRepositoryMemory;
const pessoaController = new pessoa_controller_1.PessoaController(pessoaRepositoryMemory);
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
