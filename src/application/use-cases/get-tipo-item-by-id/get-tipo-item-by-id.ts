import { TipoItem } from "../../../domain/entity/tipoitem";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { GetTipoItemByIdInput } from "./get-tipo-item-by-id-input";
import { GetTipoItemByIdOutput } from "./get-tipo-item-by-id-output";


export class GetTipoitemByIdUseCase {
    constructor(readonly tipoItem: TipoItemRepository) {}
    
    execute(input: GetTipoItemByIdInput):GetTipoItemByIdOutput {
        return {} as GetTipoItemByIdOutput;
    }
}