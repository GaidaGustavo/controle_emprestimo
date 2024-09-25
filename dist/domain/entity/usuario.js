"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const uuid_1 = require("uuid");
class Usuario {
    constructor(username, id, senha, pessoa) {
        if (!id) {
            id = (0, uuid_1.v4)();
        }
        ;
        this.id = id;
        this.username = username;
        this.senha = senha;
        this.pessoa = pessoa;
    }
    getID() {
        return this.id;
    }
    getName() {
        return this.username;
    }
    getSenha() {
        return this.senha;
    }
    getPessoa() {
        return this.pessoa;
    }
}
exports.Usuario = Usuario;
