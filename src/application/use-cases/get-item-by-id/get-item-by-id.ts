import { ItemRepository } from "../../../domain/repository/item-repository";
import { GetItemByIdInput } from "./get-item-by-id-input";
import { GetItemByIdOutput } from "./get-item-by-id-output";


export class GetItemByIdUseCase {
    constructor(readonly itemRepository: ItemRepository) {}
    
    execute(input: GetItemByIdInput):GetItemByIdOutput {
        return {} as GetItemByIdOutput;
    }
}