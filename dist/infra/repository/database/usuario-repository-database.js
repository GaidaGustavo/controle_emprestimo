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
class UsuarioRepositoryDatabase {
    constructor(connection) {
        this.connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const output = [];
            const usuariosData = yield this.connection.execute(`
            select p.id as pessoa_id, p.nome as pessoa_nome, p.documento as pessoa_documento, 
            u.id as usuario_id, u.nome_usuario as usuario_nome_usuario, u.senha as usuario_senha 
            from pessoas p 
            left join usuarios u on p.id = u.pessoa_id;
            `);
            for (const usuarioData of usuariosData) {
                const pessoa = new pessoa_1.Pessoa(usuarioData.nome_pessoa, usuarioData.id_pessoa);
                const usuario = new usuario_1.Usuario(usuarioData.id, pessoa, usuarioData.nome_usuario);
                output.push(usuario);
            }
            return output;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [usuarioData] = yield this.connection.execute(`
            select p.id as pessoa_id, p.nome as pessoa_nome, p.documento as pessoa_documento, 
            u.id as usuario_id, u.nome_usuario as usuario_nome_usuario, u.senha as usuario_senha 
            from pessoas p 
            left join usuarios u on p.id = u.pessoa_id;
            `);
            if (!usuarioData) {
                throw new Error('Usuário não encontrado');
            }
            const pessoa = new pessoa_1.Pessoa(usuarioData.nome_pessoa, usuarioData.id_pessoa);
            const usuario = new usuario_1.Usuario(usuarioData.id, pessoa, usuarioData.nome_usuario);
            return usuario;
        });
    }
    create(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute(`
            insert into usuarios(id, pessoa_id, nome_usuario, senha)
            values ($1, $2, $3, $4)`, [usuario.getID, usuario.getPessoa().getID(), usuario.username, usuario.senha]);
        });
    }
    update(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute(`
            update usuarios set
            pessoa_id = $1,
            nome_usuario = $2,
            senha = $3
            where id $4
            `, [usuario.getPessoa().getID(), usuario.username, usuario.senha, usuario.id]);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
}
exports.default = UsuarioRepositoryDatabase;
