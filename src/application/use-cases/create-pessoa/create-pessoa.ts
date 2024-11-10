import { Pessoa } from "../../../domain/entity/pessoa";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { CreatePessoaInput } from "./create-pessoa-input";
import { CreatePessoaOutput } from "./create-pessoa-output";

export class CreatePessoaUseCase {
    private pessoaRepository: PessoaRepository
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.pessoaRepository = repositoryFactory.createPessoaRepository();
    }
    
    async execute(input: CreatePessoaInput): Promise<CreatePessoaOutput> {
        if(!input.nome){
            throw new Error('Insira um nome!')
        }
        if(!input.documento){
            throw new Error('Insira um documento valido!')
        }
        const pessoa = new Pessoa(input.nome, input.documento, input.id)
        await this.pessoaRepository.create(pessoa)
        return {}
    }
}