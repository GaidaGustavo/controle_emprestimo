import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { GetAllPessoasInput } from "./get-all-pessoas-input";
import { GetAllPessoasOutput } from "./get-all-pessoas-output";


export class GetAllPessoasUseCase {
    constructor(readonly pessoaRepository: PessoaRepository) {}
    
    async execute(input: GetAllPessoasInput):Promise<GetAllPessoasOutput[]> {
        const pessoas = await this.pessoaRepository.getAll();

        const output: GetAllPessoasOutput[] = [];

        for(const pessoa of pessoas){
            output.push(
            {
                    id: pessoa.getID(),
                    nome: pessoa.getName(),
            }
            )
        }

        return output;
    }
}