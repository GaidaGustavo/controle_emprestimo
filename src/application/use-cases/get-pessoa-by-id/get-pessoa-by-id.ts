import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { GetPessoaByIdInput } from "./get-pessoa-by-id-input";
import { GetPessoaByIdOutput } from "./get-pessoa-by-id-output";

export class GetPessoaByIdUseCase {
    private pessoaRepository: PessoaRepository;

    constructor(private repositoryFactory: RepositoryFactory) {
        this.pessoaRepository = repositoryFactory.createPessoaRepository();
    }

    async execute(input: GetPessoaByIdInput): Promise<GetPessoaByIdOutput> {
        try {
            if (!input.id) {
                throw new Error('Insira um id válido');
            }

            const pessoa = await this.pessoaRepository.getById(input.id);

            if (!pessoa) {
                throw new Error('Pessoa não encontrada');
            }

            const output: GetPessoaByIdOutput = {
                id: pessoa.getID(),
                nome: pessoa.getName(),
                documento: pessoa.getDocumento(),
            };

            return output;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar a pessoa');
        }
    }
}
