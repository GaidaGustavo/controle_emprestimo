import { TipoItem } from "../../../domain/entity/tipoitem";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { CreateTipoItemInput } from "./create-tipo-item-input";
import { CreateTipoItemOutput } from "./create-tipo-item-output";

export class CreateTipoitemUseCase {
    constructor(readonly tipoItemRepository: TipoItemRepository) {}
    
    execute(input: CreateTipoItemInput): CreateTipoItemOutput {
        const tipoItem = new TipoItem(input.nome, input.id)

        this.tipoItemRepository.create(tipoItem);
        return {}
    }
}