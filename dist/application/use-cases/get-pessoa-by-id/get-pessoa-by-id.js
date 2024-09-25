"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPessoaByIdUseCase = void 0;
class GetPessoaByIdUseCase {
    constructor(pessoaRepository) {
        this.pessoaRepository = pessoaRepository;
    }
    execute(input) {
        const pessoa = this.pessoaRepository.getById(input.id);
        const output = {
            id: pessoa.getID(),
            nome: pessoa.getName(),
        };
        return output;
    }
}
exports.GetPessoaByIdUseCase = GetPessoaByIdUseCase;
