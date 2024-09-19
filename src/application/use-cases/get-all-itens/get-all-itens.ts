import { ItemRepository } from "../../../domain/repository/item-repository";
import { GetAllItensInput } from "./get-all-itens-input";
import { GetAllItensOutput } from "./get-all-itens-output";


export class GetAllItensUseCase {
    constructor(readonly itemRespository: ItemRepository) {}
    
    execute(input: GetAllItensInput):GetAllItensOutput {
        return {} as GetAllItensOutput;
    }
}