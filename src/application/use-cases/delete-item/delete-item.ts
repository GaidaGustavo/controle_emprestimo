import { ItemRepository } from "../../../domain/repository/item-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { DeleteItemInput } from "./delete-item-input";
import { DeleteItemOutput } from "./delete-item-output";

export class DeleteItemUseCase {
    private itemRepository: ItemRepository;
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.itemRepository = repositoryFactory.createItemRepository();
    }
    
    async execute(input: DeleteItemInput):Promise<DeleteItemOutput> {
        if(!input.id){
            throw new Error('Insira um id válido')
        }
        const item = await this.itemRepository.delete(input.id);

        return {};
    }
}