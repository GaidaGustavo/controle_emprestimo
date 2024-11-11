import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreateItemUseCase } from "../use-cases/create-item/create-item";
import { DeleteItemUseCase } from "../use-cases/delete-item/delete-item";
import { DeleteItemInput } from "../use-cases/delete-item/delete-item-input";
import { GetAllItensUseCase } from "../use-cases/get-all-itens/get-all-itens";
import { GetItemByIdUseCase } from "../use-cases/get-item-by-id/get-item-by-id";
import { GetItemByIdInput } from "../use-cases/get-item-by-id/get-item-by-id-input";
import { UpdateItemUseCase } from "../use-cases/update-item/update-item";

export class ItemController {
    constructor(private repositoryFactory: RepositoryFactory) { }

    async create(input: any) {
        const createItemUseCase = new CreateItemUseCase(this.repositoryFactory)
        return await createItemUseCase.execute(input);
    }

    async update(input: any) {
        const updateItemUseCase = new UpdateItemUseCase(this.repositoryFactory)
        return await updateItemUseCase.execute(input);
    }

    async getAll(input: any) {
        const getAllItensUseCase = new GetAllItensUseCase(this.repositoryFactory)
        return await getAllItensUseCase.execute(input);
    }

    async getById(input: GetItemByIdInput) {

        const getItemByIdUseCase = new GetItemByIdUseCase(this.repositoryFactory)
        return await getItemByIdUseCase.execute(input);
    }

    async delete(input: DeleteItemInput) {
        const deleteItemUseCase = new DeleteItemUseCase(this.repositoryFactory)
        return await deleteItemUseCase.execute(input);
    }

}