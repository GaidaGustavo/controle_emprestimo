"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaRepositoryMemory = void 0;
const pessoa_1 = require("../../../domain/entity/pessoa");
class PessoaRepositoryMemory {
    constructor() {
        this.pessoas = [
            new pessoa_1.Pessoa('Jacson Santos', '2151eb0d-642a-4224-8229-aefd5832ad85'),
            new pessoa_1.Pessoa('Gabriel do Anel', 'a1fc0591-9bed-40b5-aba3-ab0ecde05f7e'),
            new pessoa_1.Pessoa('Cicero Nicodem', 'ec481a8f-0fd0-4b84-8f79-33cb1d2577c6')
        ];
    }
    getAll() {
        return this.pessoas;
    }
    getById(id) {
        const pessoa = this.pessoas.find(valor => valor.getID() == id);
        if (!pessoa) {
            throw new Error('User not Found');
        }
        return pessoa;
    }
    create(pessoa) {
        this.pessoas.push(pessoa);
    }
    update(pessoa) {
        throw new Error("Method not implemented.");
    }
}
exports.PessoaRepositoryMemory = PessoaRepositoryMemory;
