import { ItemRepository } from "../../../domain/repository/item-repository";
import { GetAllItemInput } from "./getAll-item-input";
import { GetAllItemOutput } from "./getAll-item-output";


export class GetAllItemUseCase {
    constructor(readonly itemRespository: ItemRepository) {}
    
    execute(input: GetAllItemInput):GetAllItemOutput {
        return {} as GetAllItemOutput;
    }
}