"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = require("../../../domain/entity/pessoa");
const usuario_1 = require("../../../domain/entity/usuario");
class UsuarioRepositoryMemory {
    constructor() {
        const pessoa1 = new pessoa_1.Pessoa('Jacson Santos', '2151eb0d-642a-4224-8229-aefd5832ad85');
        const pessoa2 = new pessoa_1.Pessoa('Gabriel do Anel', 'a1fc0591-9bed-40b5-aba3-ab0ecde05f7e');
        this.usuarios = [
            new usuario_1.Usuario('jacson_santos', pessoa1, '7e461e53-0793-4ba3-8c34-dc5f45481b31', '123'),
            new usuario_1.Usuario('gabriel_anel', pessoa2, '3b4596dd-45d4-4f0e-ac57-d7e18d46fdfe', '123')
        ];
    }
    getAll() {
        return this.usuarios;
    }
    getById(id) {
        const usuario = this.usuarios.find(valor => valor.getID() == id);
        if (!usuario) {
            throw new Error('User not Found');
        }
        return usuario;
    }
    getByUserName(username) {
        throw new Error("Method not implemented.");
    }
    create(usuario) {
        this.usuarios.push(usuario);
    }
    update(usuario) {
        throw new Error("Method not implemented.");
    }
}
exports.default = UsuarioRepositoryMemory;
