import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { DeletePessoaInput } from "./delete-pessoa-input";
import { DeletePessoaOutput } from "./delete-pessoa-output";

export class DeletePessoaUseCase {
    private pessoaRepository: PessoaRepository
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.pessoaRepository = repositoryFactory.createPessoaRepository();
    }
    
    async execute(input: DeletePessoaInput):Promise<DeletePessoaOutput> {
        const item = await this.pessoaRepository.delete(input.id);

        return {};
    }
}