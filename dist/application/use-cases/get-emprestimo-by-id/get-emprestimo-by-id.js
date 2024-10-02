"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEmprestimoByIdUseCase = void 0;
class GetEmprestimoByIdUseCase {
    constructor(emprestimoRepository) {
        this.emprestimoRepository = emprestimoRepository;
    }
    execute(input) {
        const emprestimo = this.emprestimoRepository.getById(input.id);
        const output = {
            id: emprestimo.getID(),
            item: {
                id: emprestimo.getItem().getID(),
                nome: emprestimo.getItem().getName(),
                tipoItem: {
                    id: emprestimo.getItem().getTipoItem().getID(),
                    nome: emprestimo.getItem().getTipoItem().getName(),
                },
            },
            dataEmprestimo: emprestimo.getdataEmprestimo(),
            dataDevolucao: emprestimo.getdataDevolucao(),
            pessoa: {
                id: emprestimo.getPessoa().getID(),
                nome: emprestimo.getPessoa().getName(),
            }
        };
        return output;
    }
}
exports.GetEmprestimoByIdUseCase = GetEmprestimoByIdUseCase;
