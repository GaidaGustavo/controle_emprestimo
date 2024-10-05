import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { DeleteEmprestimoInput } from "./delete-emprestimo-input";
import { DeleteEmprestimoOutput } from "./delete-emprestimo-output";

export class DeleteEmprestimoUseCase {
    constructor(private readonly emprestimoRepository: EmprestimoRepository) {}
    
    execute(input: DeleteEmprestimoInput):DeleteEmprestimoOutput {
        const item = this.emprestimoRepository.delete(input.id);

        return {};
    }
}