"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const uuid_1 = require("uuid");
class Item {
    constructor(name, tipoItem, id, itemEPI) {
        this.name = name;
        if (!id) {
            id = (0, uuid_1.v4)();
        }
        ;
        this.name = name;
        this.tipoItem = tipoItem;
        this.id = id;
        this.itemEPI = itemEPI;
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
    getItemEPI() {
        return this.itemEPI;
    }
}
exports.Item = Item;
