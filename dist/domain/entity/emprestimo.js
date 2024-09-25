"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emprestimo = void 0;
const uuid_1 = require("uuid");
class Emprestimo {
    constructor(item, dataEmprestimo, pessoa, usuario, id, dataDevolucao) {
        this.item = item;
        this.dataDevolucao = dataDevolucao;
        this.dataEmprestimo = dataEmprestimo;
        this.pessoa = pessoa;
        this.usuario = usuario;
        if (!id) {
            id = (0, uuid_1.v4)();
        }
        ;
        this.id = id;
    }
    getID() {
        return this.id;
    }
    getItem() {
        return this.item;
    }
    getdataDevolucao() {
        return this.dataDevolucao;
    }
    getdataEmprestimo() {
        return this.dataEmprestimo;
    }
    getPessoa() {
        return this.pessoa;
    }
}
exports.Emprestimo = Emprestimo;
