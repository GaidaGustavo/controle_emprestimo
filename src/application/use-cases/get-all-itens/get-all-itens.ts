import { ItemRepository } from "../../../domain/repository/item-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { GetAllItensInput } from "./get-all-itens-input";
import { GetAllItensOutput } from "./get-all-itens-output";


export class GetAllItensUseCase {
    private itemRepository: ItemRepository;
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.itemRepository = repositoryFactory.createItemRepository();
    }
    
    async execute(input: GetAllItensInput):Promise<GetAllItensOutput[]> {
        const itens = await this.itemRepository.getAll();

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
