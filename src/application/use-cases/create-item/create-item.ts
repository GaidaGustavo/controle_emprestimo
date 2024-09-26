import { CreateItemInput } from "./create-item-input";
import { CreateItemOutput } from "./create-item-output";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { Item } from "../../../domain/entity/item";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";

export class CreateItemUseCase {
    constructor(
        readonly itemRepository: ItemRepository,
        readonly tipoItemRepository: TipoItemRepository
    ) {}
    
    execute(input: CreateItemInput): CreateItemOutput {
        const tipoItem = this.tipoItemRepository.getById(input.tipoItemId)
        
        const item = new Item(input.nome, tipoItem);

        this.itemRepository.create(item);

        return {}
    }
}