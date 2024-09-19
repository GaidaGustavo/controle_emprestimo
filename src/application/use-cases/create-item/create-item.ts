import { CreateItemInput } from "./create-item-input";
import { CreateItemOutput } from "./create-item-output";
import { ItemRepository } from "../../../domain/repository/item-repository";

export class CreateItemUseCase {
    constructor(readonly itemRepository: ItemRepository) {}
    
    execute(input: CreateItemInput): CreateItemOutput {
        return {} as CreateItemOutput;
    }
}