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
const item_1 = require("../../../domain/entity/item");
const tipo_item_1 = require("../../../domain/entity/tipo-item");
class ItemRepositoryDatabase {
    constructor(connection) {
        this.connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const output = [];
            const itensData = yield this.connection.execute(`
            select i.id, i.nome. ti.id as tipo_item_id, ti.nome as nome_tipoitem
            from itens i
            left join tipos_item ti on i.tipo_item_id = ti.id
            `);
            for (const itemData of itensData) {
                const tipoItem = new tipo_item_1.TipoItem(itemData.nome_tipoitem, itemData.tipo_item_id);
                const item = new item_1.Item(itemData.nome, tipoItem, itemData.id);
                output.push(item);
            }
            return output;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [itemData] = yield this.connection.execute(`
            select i.id, i.nome, ti.id as tipo_item_id, ti.nome as nome_tipoitem
            from itens i 
            left join tipos_item ti on i.tipo_item_id = ti.id
            where i.id = $1`, [id]);
            if (!itemData) {
                throw new Error('Item não encontrado');
            }
            const tipoItem = new tipo_item_1.TipoItem(itemData.nome_tipoitem, itemData.tipo_item_id);
            const item = new item_1.Item(itemData.nome, tipoItem, itemData.id);
            return item;
        });
    }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute(`
            insert into itens(id, nome, tipo_item_id)
            values ($1, $2, $3)`, [item.name, item.id, item.getTipoItem().getID()]);
        });
    }
    update(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute(`
            update itens set
            nome = $1,
            tipo_item_id = $2
            where id = $3
            `, [item.name, item.getTipoItem().getID(), item.id]);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
}
exports.default = ItemRepositoryDatabase;
