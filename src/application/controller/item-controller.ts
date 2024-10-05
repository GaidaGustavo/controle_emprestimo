import { ItemRepository } from "../../domain/repository/item-repository";
import { TipoItemRepository } from "../../domain/repository/tipoitem-repository";
import { CreateItemUseCase } from "../use-cases/create-item/create-item";
import { DeleteItemUseCase } from "../use-cases/delete-item/delete-item";
import { DeleteItemInput } from "../use-cases/delete-item/delete-item-input";
import { GetAllItensUseCase } from "../use-cases/get-all-itens/get-all-itens";
import { GetItemByIdUseCase } from "../use-cases/get-item-by-id/get-item-by-id";
import { GetItemByIdInput } from "../use-cases/get-item-by-id/get-item-by-id-input";
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
        const updateItemUseCase = new UpdateItemUseCase(this.itemRepository, this.tipoItemRepository)
        return updateItemUseCase.execute(input);
    }

    getAll(input: any) {
        const getAllItensUseCase = new GetAllItensUseCase(this.itemRepository)
        return getAllItensUseCase.execute(input);

    }

    getById(input: GetItemByIdInput) {
        console.log(input);
        const getItemByIdUseCase = new GetItemByIdUseCase(this.itemRepository)
        return getItemByIdUseCase.execute(input);
    }

    delete(input: DeleteItemInput) {
        const deleteItemUseCase = new DeleteItemUseCase(this.itemRepository)
        return deleteItemUseCase.execute(input);
    }

}