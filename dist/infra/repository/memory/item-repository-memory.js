"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRepositoryMemory = void 0;
const item_1 = require("../../../domain/entity/item");
const tipoitem_1 = require("../../../domain/entity/tipoitem");
class ItemRepositoryMemory {
    constructor() {
        const tipoItem1 = new tipoitem_1.TipoItem('Copos', '4694690b-d32a-4050-86a9-041a90765e7f');
        const tipoItem2 = new tipoitem_1.TipoItem('Compudadores', '30bc02ee-6bad-4c6c-82f4-7b1e9d8d3e39');
        this.itens = [
            new item_1.Item('Copo de Café', 'eb51e356-16c1-4b1e-bfea-aadc07a2c60c', tipoItem1),
            new item_1.Item('Copo de Agua', 'ef887170-3137-4d5e-89f7-cae4279720e6', tipoItem1),
            new item_1.Item('Computador desktop dell', '63867047-bb25-468d-932a-8d471401a5c4', tipoItem2)
        ];
    }
    create(item) {
    }
    getAll() {
        return this.itens;
    }
    getById(id) {
        const item = this.itens.find(valor => valor.getID() == id);
        if (!item) {
            throw new Error('User not Found');
        }
        return item;
    }
    update(item) {
    }
}
exports.ItemRepositoryMemory = ItemRepositoryMemory;
