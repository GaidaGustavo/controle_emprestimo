import { Pessoa } from "../../../domain/entity/pessoa";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { CreatePessoaInput } from "./create-pessoa-input";
import { CreatePessoaOutput } from "./create-pessoa-output";

export class CreatePessoaUseCase {
    constructor(readonly pessoaRepository: PessoaRepository) {}
    
    execute(input: CreatePessoaInput): CreatePessoaOutput {
        const pessoa = new Pessoa(input.nome, input.id)
        this.pessoaRepository.create(pessoa)
        return {}
    }
}