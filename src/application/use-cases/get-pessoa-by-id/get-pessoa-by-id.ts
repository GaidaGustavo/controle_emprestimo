import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { GetPessoaByIdInput } from "./get-pessoa-by-id-input";
import { GetPessoaByIdOutput } from "./get-pessoa-by-id-output";


export class GetPessoaByIdUseCase {
    constructor(readonly pessoaRepository: PessoaRepository) {}
    
    execute(input: GetPessoaByIdInput):GetPessoaByIdOutput {
        return {} as GetPessoaByIdOutput;
    }
}