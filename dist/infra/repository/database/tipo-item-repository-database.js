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
const tipo_item_1 = require("../../../domain/entity/tipo-item");
class TipoItemRepositoryDatabase {
    constructor(connection) {
        this.connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const output = [];
            const tipoItemData = yield this.connection.execute(`select id, nome from tipos_item`);
            for (const tipoItem of tipoItemData) {
                output.push(new tipo_item_1.TipoItem(tipoItem.nome, tipoItem.id));
            }
            return output;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [tipoItemData] = yield this.connection.execute(`
            select id, nome from tipos_item
            where id = $1
            `, [id]);
            if (!tipoItemData) {
                throw new Error('TipoItem não encontrado');
            }
            return new tipo_item_1.TipoItem(tipoItemData.nome, tipoItemData.id);
        });
    }
    create(tipoItem) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute(`insert into tipos_item (id, nome)
            values($1, $2)`, [tipoItem.getID(), tipoItem.getName()]);
        });
    }
    update(itemType) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute(`update tipos_item set
            nome = $1
            where id = $2`, [itemType.getName(), itemType.getID()]);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
}
exports.default = TipoItemRepositoryDatabase;
