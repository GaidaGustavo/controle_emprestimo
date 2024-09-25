import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { GetEmprestimoByIdInput } from "./get-emprestimo-by-id-input";
import { GetEmprestimoByIdOutput } from "./get-emprestimo-by-id-output";


export class GetEmprestimoByIdUseCase {
    constructor(private readonly emprestimoRepository: EmprestimoRepository) { }

    execute(input: GetEmprestimoByIdInput): GetEmprestimoByIdOutput {
        const emprestimo = this.emprestimoRepository.getById(input.id);

        const output: GetEmprestimoByIdOutput = {
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


        return output;
    }
}