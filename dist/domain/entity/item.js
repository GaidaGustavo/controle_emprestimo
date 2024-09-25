"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const uuid_1 = require("uuid");
class Item {
    constructor(name, id, tipo) {
        if (!id) {
            id = (0, uuid_1.v4)();
        }
        ;
        this.id = id;
        this.name = name;
        this.tipo = tipo;
    }
    getID() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getItem() {
        return this.tipo;
    }
}
exports.Item = Item;
