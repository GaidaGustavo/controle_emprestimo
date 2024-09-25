"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllPessoasUseCase = void 0;
class GetAllPessoasUseCase {
    constructor(pessoaRepository) {
        this.pessoaRepository = pessoaRepository;
    }
    execute(input) {
        const pessoas = this.pessoaRepository.getAll();
        const output = [];
        for (const pessoa of pessoas) {
            output.push({
                id: pessoa.getID(),
                nome: pessoa.getName(),
            });
        }
        return output;
    }
}
exports.GetAllPessoasUseCase = GetAllPessoasUseCase;
