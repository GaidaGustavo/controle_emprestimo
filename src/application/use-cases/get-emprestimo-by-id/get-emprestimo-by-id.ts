import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { GetEmprestimoByIdInput } from "./get-emprestimo-by-id-input";
import { GetEmprestimoByIdOutput } from "./get-emprestimo-by-id-output";


export class GetEmprestimoByIdUseCase {
    constructor(readonly emprestimoRepository: EmprestimoRepository) {}
    
    execute(input: GetEmprestimoByIdInput):GetEmprestimoByIdOutput {
        return {} as GetEmprestimoByIdOutput;
    }
}