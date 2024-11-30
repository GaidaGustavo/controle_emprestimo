import { Item } from "../../../domain/entity/item";
import { ItemEPI } from "../../../domain/entity/value-object/item-epi";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { UpdateItemInput } from "./update-item-input";
import { UpdateItemOutput } from "./update-item-output";

export class UpdateItemUseCase {
    private itemRepository: ItemRepository;
    private tipoItemRepository: TipoItemRepository;
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.itemRepository = repositoryFactory.createItemRepository();
        this.tipoItemRepository = repositoryFactory.createTipoItemRepository();
    }
    
    async execute(input: UpdateItemInput): Promise<UpdateItemOutput> {
        const tipoItem = await this.tipoItemRepository.getById(input.tipoItemId)
        var item
        if (!input.itemEPI) {
            item = new Item(input.nome, tipoItem, input.id);
        } else {
            const itemEPI = new ItemEPI(input.itemEPI.ca, new Date(input.itemEPI.validade));

            item = new Item(input.nome, tipoItem, input.id, itemEPI);
            console.log(item)
        }
        await this.itemRepository.update(item)
        return {}
    }
}