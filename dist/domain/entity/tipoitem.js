"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoItem = void 0;
const uuid_1 = require("uuid");
class TipoItem {
    constructor(name, id) {
        if (!id) {
            id = (0, uuid_1.v4)();
        }
        ;
        this.id = id;
        this.name = name;
    }
    getID() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
exports.TipoItem = TipoItem;
