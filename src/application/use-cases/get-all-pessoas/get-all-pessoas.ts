import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { GetAllPessoasInput } from "./get-all-pessoas-input";
import { GetAllPessoasOutput } from "./get-all-pessoas-output";

export class GetAllPessoasUseCase {
    private pessoaRepository: PessoaRepository;

    constructor(private repositoryFactory: RepositoryFactory) {
        this.pessoaRepository = repositoryFactory.createPessoaRepository();
    }

    async execute(input: GetAllPessoasInput): Promise<GetAllPessoasOutput[]> {
        try {
            const pessoas = await this.pessoaRepository.getAll();

            if (pessoas.length == 0) {
                throw new Error('Nenhum dado encontrado');
            }

            const output: GetAllPessoasOutput[] = pessoas.map((pessoa) => ({
                id: pessoa.getID(),
                nome: pessoa.getName(),
                documento: pessoa.getDocumento(),
            }));

            return output;
        } catch (error) {
            throw new Error('Erro ao obter pessoas');
        }
    }
}
