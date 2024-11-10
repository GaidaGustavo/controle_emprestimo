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
class PessoaRepositoryDatabase {
    constructor(connection) {
        this.connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const output = [];
            const pessoasData = yield this.connection.execute(`
            select id, nome, documento 
            from pessoas
            `);
            for (const pessoaData of pessoasData) {
                const pessoa = new pessoa_1.Pessoa(pessoaData.nome, pessoaData.documento, pessoaData.id);
                output.push(pessoa);
            }
            return output;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [pessoaData] = yield this.connection.execute(`
            select id, nome, documento 
            from pessoas
            where id = $1`, [id]);
            if (!pessoaData) {
                throw new Error('Pessoa não encontrada');
            }
            const pessoa = new pessoa_1.Pessoa(pessoaData.nome, pessoaData.documento, pessoaData.id);
            return pessoa;
        });
    }
    create(pessoa) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute(`
            insert into pessoas(id, nome, documento)
            values ($1, $2, $3)`, [pessoa.getID, pessoa.getName, pessoa.getDocumento]);
        });
    }
    update(pessoa) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute(`
            update pessoas set
            id = $1,
            nome = $2,
            documento = $3
            where id = $4`, [pessoa.getID, pessoa.getName, pessoa.getDocumento]);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
}
exports.default = PessoaRepositoryDatabase;
