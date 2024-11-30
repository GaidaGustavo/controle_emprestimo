import { ItemRepository } from "../../../domain/repository/item-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { GetAllItensInput } from "./get-all-itens-input";
import { GetAllItensOutput } from "./get-all-itens-output";

export class GetAllItensUseCase {
    private itemRepository: ItemRepository;

    constructor(private repositoryFactory: RepositoryFactory) {
        this.itemRepository = repositoryFactory.createItemRepository();
    }

    async execute(input: GetAllItensInput): Promise<GetAllItensOutput[]> {
        try {
            const itens = await this.itemRepository.getAll();

            if (itens.length == 0) {
                throw new Error('Nenhum dado encontrado');
            }

            const output: GetAllItensOutput[] = itens.map((item) => ({
                id: item.getID(),
                name: item.getName(),
                itemEPI: item.getItemEPI(),
                tipoItem: {
                    id: item.getTipoItem().getID(),
                    name: item.getTipoItem().getName(),
                }
            }));

            return output;
        } catch (error) {
            throw new Error('Erro ao obter itens');
        }
    }
}

