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
const item_repository_memory_1 = require("../repository/memory/item-repository-memory");
const tipo_item_repository_memory_1 = require("../repository/memory/tipo-item-repository-memory");
const item_controller_1 = require("../../application/controller/item-controller");
//chama librare
const app = (0, express_1.default)();
const port = 3002;
app.use(express_1.default.json());
//define a porta para iniciar servidor
app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port);
});
const itemRepositoryMemory = new item_repository_memory_1.ItemRepositoryMemory();
const tipoItemRepositoryMemory = new tipo_item_repository_memory_1.TipoItemRepositoryMemory;
const itemController = new item_controller_1.ItemController(itemRepositoryMemory, tipoItemRepositoryMemory);
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
