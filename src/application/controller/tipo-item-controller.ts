import { TipoItemRepository } from "../../domain/repository/tipoitem-repository";
import { CreateTipoitemUseCase } from "../use-cases/create-tipo-item/create-tipo-item";
import { DeleteTipoItemUseCase } from "../use-cases/delete-tipo-item/delete-tipo-item";
import { DeleteTipoItemInput } from "../use-cases/delete-tipo-item/delete-tipo-item-input";
import { GetAllTipoitensUseCase } from "../use-cases/get-all-tipos-itens/get-all-tipos-itens";
import { GetTipoitemByIdUseCase } from "../use-cases/get-tipo-item-by-id/get-tipo-item-by-id";
import { GetTipoItemByIdInput } from "../use-cases/get-tipo-item-by-id/get-tipo-item-by-id-input";
import { UpdateTipoItemUseCase } from "../use-cases/update-tipo-item/update-tipo-item";

export class TipoItemController{
    constructor(private readonly tipoItemRepository: TipoItemRepository){}

    async create(input: any){
        const createTipoItemUseCase = new CreateTipoitemUseCase(this.tipoItemRepository);
        return await createTipoItemUseCase.execute(input);
    }

    async update(input: any){
        const updateTipoItemUseCase = new UpdateTipoItemUseCase(this.tipoItemRepository);
        return await updateTipoItemUseCase.execute(input);
    }

    async getAll(input: any){
        const getAllTipoItemUseCase = new GetAllTipoitensUseCase(this.tipoItemRepository);
        return await getAllTipoItemUseCase.execute(input);
    }

    async getByID(input: GetTipoItemByIdInput){
        const getTipoItemById = new GetTipoitemByIdUseCase(this.tipoItemRepository);
        return await getTipoItemById.execute(input);
    }

    async delete(input: DeleteTipoItemInput){
        const deleteTipoItemUseCase = new DeleteTipoItemUseCase(this.tipoItemRepository);
        return await deleteTipoItemUseCase.execute(input);
    }
}