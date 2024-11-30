import { TipoItem } from "../../../domain/entity/tipo-item";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { UpdateTipoItemInput } from "./update-tipo-item-input";
import { UpdateTipoItemOutput } from "./update-tipo-item-output";

export class UpdateTipoItemUseCase {
    private tipoItemRepository: TipoItemRepository;

    constructor(private repositoryFactory: RepositoryFactory) {
        this.tipoItemRepository = repositoryFactory.createTipoItemRepository();
    }

    async execute(input: UpdateTipoItemInput): Promise<UpdateTipoItemOutput> {
        try {
            if (!input.id || !input.nome) {
                throw new Error('Dados incompletos: id e nome são obrigatórios');
            }

            const newTipoItem = new TipoItem(input.nome, input.id);

            await this.tipoItemRepository.update(newTipoItem);

            return {
                message: 'Tipo de item atualizado com sucesso',
                tipoItemId: newTipoItem.getID(),
            };

        } catch (error) {
            throw new Error('Erro ao atualizar tipo de item');
        }
    }
}
