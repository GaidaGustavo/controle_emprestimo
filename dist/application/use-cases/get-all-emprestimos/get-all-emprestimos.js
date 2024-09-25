"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllEmprestimosUseCase = void 0;
class GetAllEmprestimosUseCase {
    constructor(emprestimoRepository) {
        this.emprestimoRepository = emprestimoRepository;
    }
    execute(input) {
        const emprestimos = this.emprestimoRepository.getAll();
        const output = [];
        for (const emprestimo of emprestimos) {
            output.push({
                id: emprestimo.getID(),
                item: {
                    id: emprestimo.getItem().getID(),
                    nome: emprestimo.getItem().getName(),
                    tipoItem: {
                        id: emprestimo.getItem().getItem().getID(),
                        nome: emprestimo.getItem().getItem().getName(),
                    },
                },
                dataEmprestimo: emprestimo.getdataEmprestimo(),
                dataDevolucao: emprestimo.getdataDevolucao(),
                pessoa: {
                    id: emprestimo.getPessoa().getID(),
                    nome: emprestimo.getPessoa().getName(),
                }
            });
        }
        return output;
    }
}
exports.GetAllEmprestimosUseCase = GetAllEmprestimosUseCase;
