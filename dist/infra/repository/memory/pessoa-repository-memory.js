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
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.pessoas = yield this.pessoas.filter(value => value.getID() !== id);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.pessoas;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const pessoa = yield this.pessoas.find(valor => valor.getID() == id);
            if (!pessoa) {
                throw new Error('User not Found');
            }
            return pessoa;
        });
    }
    create(pessoa) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.pessoas.push(pessoa);
        });
    }
    update(pessoa) {
        return __awaiter(this, void 0, void 0, function* () {
            const pessoaAntiga = yield this.pessoas.findIndex(value => value.getID() == pessoa.getID());
            this.pessoas[pessoaAntiga] = pessoa;
        });
    }
}
exports.PessoaRepositoryMemory = PessoaRepositoryMemory;
