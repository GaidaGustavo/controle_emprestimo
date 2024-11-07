import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { GetPessoaByIdInput } from "./get-pessoa-by-id-input";
import { GetPessoaByIdOutput } from "./get-pessoa-by-id-output";


export class GetPessoaByIdUseCase {
    private pessoaRepository: PessoaRepository
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.pessoaRepository = repositoryFactory.createPessoaRepository();
    }

    async execute(input: GetPessoaByIdInput): Promise<GetPessoaByIdOutput> {
        const pessoa = await this.pessoaRepository.getById(input.id);

        const output: GetPessoaByIdOutput = {
            id: pessoa.getID(),
            nome: pessoa.getName(),
        }
        return output;
    }
}