import { ItemRepository } from "../../../domain/repository/item-repository";
import { GetAllItensInput } from "./get-all-itens-input";
import { GetAllItensOutput } from "./get-all-itens-output";


export class GetAllItensUseCase {
    constructor(readonly itemRespository: ItemRepository) {}
    
    async execute(input: GetAllItensInput):Promise<GetAllItensOutput[]> {
        const itens = await this.itemRespository.getAll();

        const output: GetAllItensOutput[] = [];

        for(const item of itens){
            output.push(
            {
                    id: item.getID(),
                    name: item.getName(),
                    tipoItem: {
                        id: item.getTipoItem().getID(),
                        name: item.getTipoItem().getName(),
                    }
            }
            )
        }

        return output;
            
    }
}
