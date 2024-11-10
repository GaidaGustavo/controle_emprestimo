import { Pessoa } from "../../../domain/entity/pessoa";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UpdatePessoaInput } from "./update-pessoa-input";
import { UpdatePessoaOutput } from "./update-pessoa-output";

export class UpdatePessoaUseCase {
    private pessoaRepository: PessoaRepository
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.pessoaRepository = repositoryFactory.createPessoaRepository();
    }
    
    async execute(input: UpdatePessoaInput): Promise<UpdatePessoaOutput> {
        const newPessoa = new Pessoa(input.nome, input.documento, input.id)
        await this.pessoaRepository.update(newPessoa)
        return {}
    }
}