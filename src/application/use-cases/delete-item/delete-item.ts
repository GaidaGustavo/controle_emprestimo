import { ItemRepository } from "../../../domain/repository/item-repository";
import { DeleteItemInput } from "./delete-item-input";
import { DeleteItemOutput } from "./delete-item-output";

export class DeleteItemUseCase {
    constructor(private readonly itemRepository: ItemRepository) {}
    
    async execute(input: DeleteItemInput):Promise<DeleteItemOutput> {
        const item = await this.itemRepository.delete(input.id);

        return {};
    }
}