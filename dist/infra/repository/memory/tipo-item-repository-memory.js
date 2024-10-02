"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoItemRepositoryMemory = void 0;
const tipoitem_1 = require("../../../domain/entity/tipoitem");
class TipoItemRepositoryMemory {
    constructor() {
        this.tipoItens = [
            new tipoitem_1.TipoItem('Copos', '4694690b-d32a-4050-86a9-041a90765e7f'),
            new tipoitem_1.TipoItem('Compudadores', '30bc02ee-6bad-4c6c-82f4-7b1e9d8d3e39')
        ];
    }
    getAll() {
        return this.tipoItens;
    }
    getById(id) {
        const tipoItem = this.tipoItens.find(valor => valor.getID() == id);
        if (!tipoItem) {
            throw new Error('User not Found');
        }
        return tipoItem;
    }
    create(tipoItem) {
        this.tipoItens.push(tipoItem);
    }
    update(tipoItem) {
        throw new Error("Method not implemented.");
    }
}
exports.TipoItemRepositoryMemory = TipoItemRepositoryMemory;
