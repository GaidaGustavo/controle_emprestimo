import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { UpdateEmprestimoInput } from "./update-emprestimo-input";
import { UpdateEmprestimoOutput } from "./update-emprestimo-output";

export class UpdateEmprestimoUseCase {
    constructor(readonly emprestimoRepository: EmprestimoRepository) {}
    
    execute(input: UpdateEmprestimoInput): UpdateEmprestimoOutput {
        return {} as UpdateEmprestimoOutput;
    }
}