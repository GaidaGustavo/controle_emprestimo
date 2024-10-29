import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { GetPessoaByIdInput } from "./get-pessoa-by-id-input";
import { GetPessoaByIdOutput } from "./get-pessoa-by-id-output";


export class GetPessoaByIdUseCase {
    constructor(readonly pessoaRepository: PessoaRepository) { }

    async execute(input: GetPessoaByIdInput): Promise<GetPessoaByIdOutput> {
        const pessoa = await this.pessoaRepository.getById(input.id);

        const output: GetPessoaByIdOutput = {
            id: pessoa.getID(),
            nome: pessoa.getName(),
        }
        return output;
    }
}