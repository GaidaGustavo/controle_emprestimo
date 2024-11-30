import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { DeleteEmprestimoInput } from "./delete-emprestimo-input";
import { DeleteEmprestimoOutput } from "./delete-emprestimo-output";

export class DeleteEmprestimoUseCase {
    private emprestimoRepository: EmprestimoRepository;

    constructor(private repositoryFactory: RepositoryFactory) {
        this.emprestimoRepository = repositoryFactory.createEmprestimoRepository();
    }

    async execute(input: DeleteEmprestimoInput): Promise<DeleteEmprestimoOutput> {
        try {
            if (!input.id) {
                throw new Error('Insira um id válido');
            }

            await this.emprestimoRepository.delete(input.id);

            return {};
        } catch (error) {
            throw new Error('Erro ao deletar empréstimo');
        }
    }
}
