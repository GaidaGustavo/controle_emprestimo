import { Item } from "../../../domain/entity/item";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { UpdateItemInput } from "./update-item-input";
import { UpdateItemOutput } from "./update-item-output";

export class UpdateItemUseCase {
    constructor(readonly itemRepository: ItemRepository,
                readonly tipoItemRepository: TipoItemRepository
    ) {}
    
    execute(input: UpdateItemInput): UpdateItemOutput {
        const tipoItem = this.tipoItemRepository.getById(input.tipoItemId)
        const newItem = new Item(input.nome, tipoItem, input.id)
        this.itemRepository.update(newItem)
        return {}
    }
}