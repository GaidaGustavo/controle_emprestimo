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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRepositoryMemory = void 0;
const item_1 = require("../../../domain/entity/item");
const tipoitem_1 = require("../../../domain/entity/tipoitem");
class ItemRepositoryMemory {
    constructor() {
        const tipoItem1 = new tipoitem_1.TipoItem('Copos', '4694690b-d32a-4050-86a9-041a90765e7f');
        const tipoItem2 = new tipoitem_1.TipoItem('Compudadores', '30bc02ee-6bad-4c6c-82f4-7b1e9d8d3e39');
        this.itens = [
            new item_1.Item('Copo de Café', tipoItem1, 'eb51e356-16c1-4b1e-bfea-aadc07a2c60c'),
            new item_1.Item('Copo de Agua', tipoItem1, 'ef887170-3137-4d5e-89f7-cae4279720e6'),
            new item_1.Item('Computador desktop dell', tipoItem2, '63867047-bb25-468d-932a-8d471401a5c4')
        ];
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.itens = yield this.itens.filter(value => value.getID() !== id);
        });
    }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.itens.push(item);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.itens;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            const item = yield this.itens.find(valor => valor.getID() == id);
            if (!item) {
                throw new Error('User not Found');
            }
            return item;
        });
    }
    update(item) {
        return __awaiter(this, void 0, void 0, function* () {
            const itemAntigo = yield this.itens.findIndex(value => value.getID() == item.getID());
            this.itens[itemAntigo] = item;
        });
    }
}
exports.ItemRepositoryMemory = ItemRepositoryMemory;
