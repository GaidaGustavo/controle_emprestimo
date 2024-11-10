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
exports.UpdatePessoaUseCase = void 0;
const pessoa_1 = require("../../../domain/entity/pessoa");
class UpdatePessoaUseCase {
    constructor(repositoryFactory) {
        this.repositoryFactory = repositoryFactory;
        this.pessoaRepository = repositoryFactory.createPessoaRepository();
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPessoa = new pessoa_1.Pessoa(input.nome, input.documento, input.id);
            yield this.pessoaRepository.update(newPessoa);
            return {};
        });
    }
}
exports.UpdatePessoaUseCase = UpdatePessoaUseCase;
