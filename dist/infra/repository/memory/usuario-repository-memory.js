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
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.usuarios = yield this.usuarios.filter(value => value.getID() !== id);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usuarios;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = yield this.usuarios.find(valor => valor.getID() == id);
            if (!usuario) {
                throw new Error('User not Found');
            }
            return usuario;
        });
    }
    getByUserName(username) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
    create(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.usuarios.push(usuario);
        });
    }
    update(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioAntigo = yield this.usuarios.findIndex(value => value.getID() == usuario.getID());
            this.usuarios[usuarioAntigo] = usuario;
        });
    }
}
exports.default = UsuarioRepositoryMemory;
