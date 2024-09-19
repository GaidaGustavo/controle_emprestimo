import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { CreatePessoaInput } from "./create-pessoa-input";
import { CreatePessoaOutput } from "./create-pessoa-output";

export class CreatePessoaUseCase {
    constructor(readonly pessoaRepository: PessoaRepository) {}
    
    execute(input: CreatePessoaInput): CreatePessoaOutput {
        return {} as CreatePessoaOutput;
    }
}