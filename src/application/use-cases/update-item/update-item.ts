import { Item } from "../../../domain/entity/item";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { UpdateItemInput } from "./update-item-input";
import { UpdateItemOutput } from "./update-item-output";

export class UpdateItemUseCase {
    constructor(readonly itemRepository: ItemRepository,
                readonly tipoItemRepository: TipoItemRepository
    ) {}
    
    async execute(input: UpdateItemInput): Promise<UpdateItemOutput> {
        const tipoItem = await this.tipoItemRepository.getById(input.tipoItemId)
        const newItem = new Item(input.nome, tipoItem, input.id)
        await this.itemRepository.update(newItem)
        return {}
    }
}