import { ItemRepository } from "../../../domain/repository/item-repository";
import { UpdateItemInput } from "./update-item-input";
import { UpdateItemOutput } from "./update-item-output";

export class UpdateItemUseCase {
    constructor(readonly itemRepository: ItemRepository) {}
    
    execute(input: UpdateItemInput): UpdateItemOutput {
        return {} as UpdateItemOutput;
    }
}