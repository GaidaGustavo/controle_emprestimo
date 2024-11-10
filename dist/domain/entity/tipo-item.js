"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoItem = void 0;
const uuid_1 = require("uuid");
class TipoItem {
    constructor(name, id) {
        this.name = name;
        if (!id) {
            this.name = name;
            id = (0, uuid_1.v4)();
        }
        ;
        this.id = id;
    }
    getID() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
exports.TipoItem = TipoItem;
