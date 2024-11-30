import { Pessoa } from "../../../domain/entity/pessoa";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UpdatePessoaInput } from "./update-pessoa-input";
import { UpdatePessoaOutput } from "./update-pessoa-output";

export class UpdatePessoaUseCase {
    private pessoaRepository: PessoaRepository;

    constructor(private repositoryFactory: RepositoryFactory) {
        this.pessoaRepository = repositoryFactory.createPessoaRepository();
    }

    async execute(input: UpdatePessoaInput): Promise<UpdatePessoaOutput> {
        try {
            if (!input.id || !input.nome || !input.documento) {
                throw new Error('Dados incompletos: id, nome e documento são obrigatórios');
            }

            const newPessoa = new Pessoa(input.nome, input.documento, input.id);

            await this.pessoaRepository.update(newPessoa);

            return {
                message: 'Pessoa atualizada com sucesso',
                pessoaId: newPessoa.getID(),
            };

        } catch (error) {
            throw new Error('Erro ao atualizar pessoa');
        }
    }
}
