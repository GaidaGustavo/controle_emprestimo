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
        try {
            const createItemUseCase = new CreateItemUseCase(this.repositoryFactory);
            return await createItemUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao criar item");
        }
    }

    async update(input: any) {
        try {
            const updateItemUseCase = new UpdateItemUseCase(this.repositoryFactory);
            return await updateItemUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao atualizar item");
        }
    }

    async getAll(input: any) {
        try {
            const getAllItensUseCase = new GetAllItensUseCase(this.repositoryFactory);
            return await getAllItensUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao obter todos os itens");
        }
    }

    async getById(input: GetItemByIdInput) {
        try {
            const getItemByIdUseCase = new GetItemByIdUseCase(this.repositoryFactory);
            return await getItemByIdUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao obter item por ID");
        }
    }

    async delete(input: DeleteItemInput) {
        try {
            const deleteItemUseCase = new DeleteItemUseCase(this.repositoryFactory);
            return await deleteItemUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao deletar item");
        }
    }
}
