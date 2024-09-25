import { ItemRepository } from "../../../domain/repository/item-repository";
import { GetItemByIdInput } from "./get-item-by-id-input";
import { GetItemByIdOutput } from "./get-item-by-id-output";


export class GetItemByIdUseCase {
    constructor(private readonly itemRepository: ItemRepository) {}
    
    execute(input: GetItemByIdInput):GetItemByIdOutput {
        const item = this.itemRepository.getById(input.id);
        
        const output: GetItemByIdOutput = {
                id: item.getID(),
                name: item.getName(),
                tipoItem: {
                    id: item.getItem().getID(),
                    name: item.getItem().getName(),
                }
        
        }

        return output;
    }
}