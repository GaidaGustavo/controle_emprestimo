import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { GetAllPessoasInput } from "./get-all-pessoas-input";
import { GetAllPessoasOutput } from "./get-all-pessoas-output";


export class GetAllPessoasUseCase {
    private pessoaRepository: PessoaRepository
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.pessoaRepository = repositoryFactory.createPessoaRepository();
    }
    
    async execute(input: GetAllPessoasInput):Promise<GetAllPessoasOutput[]> {
        const pessoas = await this.pessoaRepository.getAll();

        const output: GetAllPessoasOutput[] = [];

        for(const pessoa of pessoas){
            output.push(
            {
                    id: pessoa.getID(),
                    nome: pessoa.getName(),
                    documento: pessoa.getDocumento()
            }
            )
        }
        if(!output){
            throw new Error('Nunhum dado encontrado')
        }

        return output;
    }
}