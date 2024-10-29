import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { DeletePessoaInput } from "./delete-pessoa-input";
import { DeletePessoaOutput } from "./delete-pessoa-output";

export class DeletePessoaUseCase {
    constructor(private readonly pessoaRepository: PessoaRepository) {}
    
    async execute(input: DeletePessoaInput):Promise<DeletePessoaOutput> {
        const item = await this.pessoaRepository.delete(input.id);

        return {};
    }
}