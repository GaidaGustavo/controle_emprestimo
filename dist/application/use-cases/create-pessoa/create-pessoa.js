"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePessoaUseCase = void 0;
const pessoa_1 = require("../../../domain/entity/pessoa");
class CreatePessoaUseCase {
    constructor(pessoaRepository) {
        this.pessoaRepository = pessoaRepository;
    }
    execute(input) {
        const pessoa = new pessoa_1.Pessoa(input.nome, input.id);
        this.pessoaRepository.create(pessoa);
        return {};
    }
}
exports.CreatePessoaUseCase = CreatePessoaUseCase;
