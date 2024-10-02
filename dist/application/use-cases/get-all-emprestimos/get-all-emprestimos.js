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
                        id: emprestimo.getItem().getTipoItem().getID(),
                        nome: emprestimo.getItem().getTipoItem().getName(),
                    },
                },
                dataEmprestimo: emprestimo.getdataEmprestimo(),
                dataDevolucao: emprestimo.getdataDevolucao(),
                pessoa: {
                    id: emprestimo.getPessoa().getID(),
                    nome: emprestimo.getPessoa().getName(),
                },
                usuario: {
                    id: emprestimo.getUsuario().getID(),
                    username: emprestimo.getUsuario().getName(),
                    senha: emprestimo.getUsuario().getSenha(),
                    pessoa: {
                        id: emprestimo.getUsuario().getPessoa().getID(),
                        nome: emprestimo.getUsuario().getPessoa().getName()
                    }
                }
            });
        }
        return output;
    }
}
exports.GetAllEmprestimosUseCase = GetAllEmprestimosUseCase;
