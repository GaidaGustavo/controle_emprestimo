import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { GetAllEmprestimosInput } from "./get-all-emprestimos-input";
import { GetAllEmprestimosOutput } from "./get-all-emprestimos-output";


export class GetAllEmprestimosUseCase {
    constructor(readonly emprestimoRepository: EmprestimoRepository) {}
    
    execute(input: GetAllEmprestimosInput):GetAllEmprestimosOutput {
        return {} as GetAllEmprestimosOutput;
    }
}