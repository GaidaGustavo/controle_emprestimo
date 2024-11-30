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

    constructor(private repositoryFactory: RepositoryFactory) {
        this.itemRepository = repositoryFactory.createItemRepository();
        this.tipoItemRepository = repositoryFactory.createTipoItemRepository();
    }

    async execute(input: CreateItemInput): Promise<CreateItemOutput> {
        try {
            if (!input.nome) {
                throw new Error('Insira um nome para o item');
            }

            if (!input.tipoItemId) {
                throw new Error('Insira um tipo de item');
            }

            const tipoItem = await this.tipoItemRepository.getById(input.tipoItemId);

            if (!tipoItem) {
                throw new Error('Tipo de item não encontrado');
            }

            let item;
            if (!input.itemEPI.ca || input.itemEPI.ca == '' || !input.itemEPI.validade || input.itemEPI.validade == "0NaN-NaN-NaNTNaN:NaN:NaN.NaN+NaN:NaN") {
                item = new Item(input.nome, tipoItem, input.id);
            } else {
                const itemEPI = new ItemEPI(input.itemEPI.ca, new Date(input.itemEPI.validade));
                item = new Item(input.nome, tipoItem, input.id, itemEPI);
            }

            await this.itemRepository.create(item);

            return {};
        } catch (error) {
            throw new Error(`Erro ao criar item`);
        }
    }
}
