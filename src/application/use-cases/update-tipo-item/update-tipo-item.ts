import { TipoItem } from "../../../domain/entity/tipoitem";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { UpdateTipoItemInput } from "./update-tipo-item-input";
import { UpdateTipoItemOutput } from "./update-tipo-item-output";

export class UpdateTipoItemUseCase {
    constructor(readonly tipoItemRepository: TipoItemRepository) {}
    
    execute(input: UpdateTipoItemInput): UpdateTipoItemOutput {
        const newTipoItem = new TipoItem(input.nome, input.id)
        this.tipoItemRepository.update(newTipoItem)
        return {}
    }
}