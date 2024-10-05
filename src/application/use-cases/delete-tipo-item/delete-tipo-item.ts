import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { DeleteTipoItemInput } from "./delete-tipo-item-input";
import { DeleteTipoItemOutput } from "./delete-tipo-item-output";

export class DeleteTipoItemUseCase {
    constructor(private readonly tipoItemRepository: TipoItemRepository) {}
    
    execute(input: DeleteTipoItemInput):DeleteTipoItemOutput {
        const item = this.tipoItemRepository.delete(input.id);

        return {};
    }
}