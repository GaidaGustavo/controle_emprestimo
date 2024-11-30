import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreateTipoitemUseCase } from "../use-cases/create-tipo-item/create-tipo-item";
import { DeleteTipoItemUseCase } from "../use-cases/delete-tipo-item/delete-tipo-item";
import { DeleteTipoItemInput } from "../use-cases/delete-tipo-item/delete-tipo-item-input";
import { GetAllTipoitensUseCase } from "../use-cases/get-all-tipos-itens/get-all-tipos-itens";
import { GetTipoitemByIdUseCase } from "../use-cases/get-tipo-item-by-id/get-tipo-item-by-id";
import { GetTipoItemByIdInput } from "../use-cases/get-tipo-item-by-id/get-tipo-item-by-id-input";
import { UpdateTipoItemUseCase } from "../use-cases/update-tipo-item/update-tipo-item";

export class TipoItemController {
    constructor(private repositoryFactory: RepositoryFactory) {}

    async create(input: any) {
        try {
            const createTipoItemUseCase = new CreateTipoitemUseCase(this.repositoryFactory);
            return await createTipoItemUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao criar Tipo Item");
        }
    }

    async update(input: any) {
        try {
            const updateTipoItemUseCase = new UpdateTipoItemUseCase(this.repositoryFactory);
            return await updateTipoItemUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao atualizar Tipo Item");
        }
    }

    async getAll(input: any) {
        try {
            const getAllTipoItemUseCase = new GetAllTipoitensUseCase(this.repositoryFactory);
            return await getAllTipoItemUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao obter todos os Tipo Items");
        }
    }

    async getByID(input: GetTipoItemByIdInput) {
        try {
            const getTipoItemById = new GetTipoitemByIdUseCase(this.repositoryFactory);
            return await getTipoItemById.execute(input);
        } catch (error) {
            return { message: "Tipo Item não encontrado" };
        }
    }

    async delete(input: DeleteTipoItemInput) {
        try {
            const deleteTipoItemUseCase = new DeleteTipoItemUseCase(this.repositoryFactory);
            return await deleteTipoItemUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao deletar Tipo Item");
        }
    }
}
