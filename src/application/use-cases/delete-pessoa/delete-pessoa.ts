import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { DeletePessoaInput } from "./delete-pessoa-input";
import { DeletePessoaOutput } from "./delete-pessoa-output";

export class DeletePessoaUseCase {
    constructor(private readonly pessoaRepository: PessoaRepository) {}
    
    execute(input: DeletePessoaInput):DeletePessoaOutput {
        const item = this.pessoaRepository.delete(input.id);

        return {};
    }
}