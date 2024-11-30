import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { DeleteTipoItemInput } from "./delete-tipo-item-input";
import { DeleteTipoItemOutput } from "./delete-tipo-item-output";

export class DeleteTipoItemUseCase {
    private tipoItemRepository: TipoItemRepository;

    constructor(private repositoryFactory: RepositoryFactory) {
        this.tipoItemRepository = repositoryFactory.createTipoItemRepository();
    }
    
    async execute(input: DeleteTipoItemInput): Promise<DeleteTipoItemOutput> {
        try {
            if (!input.id) {
                throw new Error('Insira um id válido');
            }

            await this.tipoItemRepository.delete(input.id);

            return {};
        } catch (error) {
            throw new Error('Erro ao deletar tipo de item');
        }
    }
}
