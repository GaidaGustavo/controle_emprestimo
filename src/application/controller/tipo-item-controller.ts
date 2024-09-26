import { TipoItemRepository } from "../../domain/repository/tipoitem-repository";
import { CreateTipoitemUseCase } from "../use-cases/create-tipo-item/create-tipo-item";
import { GetAllTipoitensUseCase } from "../use-cases/get-all-tipos-itens/get-all-tipos-itens";
import { GetTipoitemByIdUseCase } from "../use-cases/get-tipo-item-by-id/get-tipo-item-by-id";
import { UpdateTipoItemUseCase } from "../use-cases/update-tipo-item/update-tipo-item";

export class TipoItemController{
    constructor(private readonly tipoItemRepository: TipoItemRepository){}

    create(input: any){
        const createTipoItemUseCase = new CreateTipoitemUseCase(this.tipoItemRepository);
        createTipoItemUseCase.execute(input);
    }

    update(input: any){
        const updateTipoItemUseCase = new UpdateTipoItemUseCase(this.tipoItemRepository);
        updateTipoItemUseCase.execute(input);
    }

    getAll(input: any){
        const getAllTipoItemUseCase = new GetAllTipoitensUseCase(this.tipoItemRepository);
        return getAllTipoItemUseCase.execute(input);
    }

    getByID(input: any){
        const getTipoItemById = new GetTipoitemByIdUseCase(this.tipoItemRepository);
        return getTipoItemById.execute(input);
    }
}