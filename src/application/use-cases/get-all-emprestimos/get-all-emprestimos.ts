import { Pessoa } from "../../../domain/entity/pessoa";
import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { GetAllEmprestimosInput } from "./get-all-emprestimos-input";
import { GetAllEmprestimosOutput } from "./get-all-emprestimos-output";


export class GetAllEmprestimosUseCase {
    constructor(readonly emprestimoRepository: EmprestimoRepository) {}
    
    execute(input: GetAllEmprestimosInput):GetAllEmprestimosOutput[] {
        const emprestimos = this.emprestimoRepository.getAll();

        const output: GetAllEmprestimosOutput[] = [];

        for(const emprestimo of emprestimos){
            output.push(
            {
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
            }
            )
        }

        return output;
    }
}