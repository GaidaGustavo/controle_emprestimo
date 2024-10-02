import { ItemRepository } from "../../domain/repository/item-repository";
import { TipoItemRepository } from "../../domain/repository/tipoitem-repository";
import { CreateItemUseCase } from "../use-cases/create-item/create-item";
import { GetAllItensUseCase } from "../use-cases/get-all-itens/get-all-itens";
import { GetItemByIdUseCase } from "../use-cases/get-item-by-id/get-item-by-id";
import { UpdateItemUseCase } from "../use-cases/update-item/update-item";

export class ItemController {
    constructor(
        private readonly itemRepository: ItemRepository,
        readonly tipoItemRepository: TipoItemRepository
    ) { }

    create(input: any) {
        const createItemUseCase = new CreateItemUseCase(this.itemRepository, this.tipoItemRepository)
        return createItemUseCase.execute(input);
    }

    update(input: any) {
        const updateItemUseCase = new UpdateItemUseCase(this.itemRepository)
        return updateItemUseCase.execute(input);
    }

    getAll(input: any) {
        const getAllItensUseCase = new GetAllItensUseCase(this.itemRepository)
        return getAllItensUseCase.execute(input);

    }

    getById(input: any) {
        const getItemByIdUseCase = new GetItemByIdUseCase(this.itemRepository)
        return getItemByIdUseCase.execute(input);
    }

}