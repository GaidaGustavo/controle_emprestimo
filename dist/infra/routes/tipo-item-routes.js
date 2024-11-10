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
const tipo_item_repository_memory_1 = require("../repository/memory/tipo-item-repository-memory");
const tipo_item_controller_1 = require("../../application/controller/tipo-item-controller");
//chama librare
const app = (0, express_1.default)();
const port = 3002;
app.use(express_1.default.json());
//define a porta para iniciar servidor
app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port);
});
const tipoItemRepositoryMemory = new tipo_item_repository_memory_1.TipoItemRepositoryMemory;
const tipoItemController = new tipo_item_controller_1.TipoItemController(tipoItemRepositoryMemory);
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
