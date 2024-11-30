import { ItemRepository } from "../../../domain/repository/item-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { GetItemByIdInput } from "./get-item-by-id-input";
import { GetItemByIdOutput } from "./get-item-by-id-output";

export class GetItemByIdUseCase {
    private itemRepository: ItemRepository;

    constructor(private repositoryFactory: RepositoryFactory) {
        this.itemRepository = repositoryFactory.createItemRepository();
    }
    
    async execute(input: GetItemByIdInput): Promise<GetItemByIdOutput> {
        try {
            if (!input.id) {
                throw new Error('Insira um id válido');
            }
            const item = await this.itemRepository.getById(input.id);

            const output: GetItemByIdOutput = {
                id: item.getID(),
                name: item.getName(),
                itemEPI: item.getItemEPI(),
                tipoItem: {
                    id: item.getTipoItem().getID(),
                    name: item.getTipoItem().getName(),
                }
            };

            return output;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar o item');
        }
    }
}
