import { Pessoa } from "../../../domain/entity/pessoa";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { CreatePessoaInput } from "./create-pessoa-input";
import { CreatePessoaOutput } from "./create-pessoa-output";

export class CreatePessoaUseCase {
    constructor(readonly pessoaRepository: PessoaRepository) {}
    
    async execute(input: CreatePessoaInput): Promise<CreatePessoaOutput> {
        const pessoa = new Pessoa(input.nome, input.id)
        await this.pessoaRepository.create(pessoa)
        return {}
    }
}