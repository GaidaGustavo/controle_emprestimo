import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { UpdatePessoaInput } from "./update-pessoa-input";
import { UpdatePessoaOutput } from "./update-pessoa-output";

export class UpdatePessoaUseCase {
    constructor(readonly pessoaRepository: PessoaRepository) {}
    
    execute(input: UpdatePessoaInput): UpdatePessoaOutput {
        return {} as UpdatePessoaOutput;
    }
}