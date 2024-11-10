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
exports.TipoItemRepositoryMemory = void 0;
const tipoitem_1 = require("../../../domain/entity/tipoitem");
class TipoItemRepositoryMemory {
    constructor() {
        this.tipoItens = [
            new tipoitem_1.TipoItem('Copos', '4694690b-d32a-4050-86a9-041a90765e7f'),
            new tipoitem_1.TipoItem('Compudadores', '30bc02ee-6bad-4c6c-82f4-7b1e9d8d3e39')
        ];
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.tipoItens = yield this.tipoItens.filter(value => value.getID() !== id);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.tipoItens;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoItem = yield this.tipoItens.find(valor => valor.getID() == id);
            if (!tipoItem) {
                throw new Error('User not Found');
            }
            return tipoItem;
        });
    }
    create(tipoItem) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.tipoItens.push(tipoItem);
        });
    }
    update(tipoItem) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoItemAntigo = yield this.tipoItens.findIndex(value => value.getID() == tipoItem.getID());
            this.tipoItens[tipoItemAntigo] = tipoItem;
        });
    }
}
exports.TipoItemRepositoryMemory = TipoItemRepositoryMemory;
