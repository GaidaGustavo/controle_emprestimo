import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { GetTipoItemByIdInput } from "./get-tipo-item-by-id-input";
import { GetTipoItemByIdOutput } from "./get-tipo-item-by-id-output";

export class GetTipoitemByIdUseCase {
    constructor(readonly tipoItemRepository: TipoItemRepository) {}
    
    execute(input: GetTipoItemByIdInput):GetTipoItemByIdOutput {
        return {} as GetTipoItemByIdOutput;
    }
}