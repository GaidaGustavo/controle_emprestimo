import { Pessoa } from "../../../domain/entity/pessoa";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { UpdatePessoaInput } from "./update-pessoa-input";
import { UpdatePessoaOutput } from "./update-pessoa-output";

export class UpdatePessoaUseCase {
    constructor(readonly pessoaRepository: PessoaRepository) {}
    
    async execute(input: UpdatePessoaInput): Promise<UpdatePessoaOutput> {
        const newPessoa = new Pessoa(input.nome, input.id)
        await this.pessoaRepository.update(newPessoa)
        return {}
    }
}