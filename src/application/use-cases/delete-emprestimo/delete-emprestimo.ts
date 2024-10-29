import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { DeleteEmprestimoInput } from "./delete-emprestimo-input";
import { DeleteEmprestimoOutput } from "./delete-emprestimo-output";

export class DeleteEmprestimoUseCase {
    constructor(private readonly emprestimoRepository: EmprestimoRepository) {}
    
    async execute(input: DeleteEmprestimoInput):Promise<DeleteEmprestimoOutput> {
        const item = await this.emprestimoRepository.delete(input.id);

        return {};
    }
}