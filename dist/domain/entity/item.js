"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const uuid_1 = require("uuid");
class Item {
    constructor(name, tipoItem, id) {
        if (!id) {
            id = (0, uuid_1.v4)();
        }
        ;
        this.name = name;
        this.tipoItem = tipoItem;
        this.id = id;
    }
    getID() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getTipoItem() {
        return this.tipoItem;
    }
}
exports.Item = Item;
