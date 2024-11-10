"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemEPI = void 0;
class ItemEPI {
    constructor(ca, validade) {
        this.ca = ca;
        this.validade = validade;
    }
    getCa() {
        return this.ca;
    }
    getValidade() {
        return this.validade;
    }
}
exports.ItemEPI = ItemEPI;
