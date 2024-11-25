import { CreateItemInput } from "./create-item-input";
import { CreateItemOutput } from "./create-item-output";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { Item } from "../../../domain/entity/item";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { ItemEPI } from "../../../domain/entity/value-object/item-epi";

export class CreateItemUseCase {
    private itemRepository: ItemRepository;
    private tipoItemRepository: TipoItemRepository;
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.itemRepository = repositoryFactory.createItemRepository();
        this.tipoItemRepository = repositoryFactory.createTipoItemRepository();
    }

    async execute(input: CreateItemInput): Promise<CreateItemOutput> {
        if (!input.nome) {
            throw new Error('Insira um nome para o item');
        }
        if (!input.tipoItemId) {
            throw new Error('Insira um tipo de item');
        }

        const tipoItem = await this.tipoItemRepository.getById(input.tipoItemId);

        var item
        if (input.itemEPI.ca == '' || !input.itemEPI.ca || input.itemEPI.validade == "0NaN-NaN-NaNTNaN:NaN:NaN.NaN+NaN:NaN" || !input.itemEPI.validade) {
            item = new Item(input.nome, tipoItem, input.id);
        } else {
            // Criando o Value Object diretamente com os dados do input
            const itemEPI = new ItemEPI(input.itemEPI.ca, new Date(input.itemEPI.validade));

            // Criando o Item com o Value Object
            item = new Item(input.nome, tipoItem, input.id, itemEPI);
            console.log(item)
        }

        // Persiste o item no banco
        await this.itemRepository.create(item);

        return {};
    }


}