import { TipoItem } from "../../../domain/entity/tipoitem";
import { GetTipoItemByIdInput } from "./get-tipo-item-by-id-input";
import { GetTipoItemByIdOutput } from "./get-tipo-item-by-id-output";


export class GetTipoitemByIdUseCase {
    constructor(readonly tipoItem: TipoItem) {}
    
    execute(input: GetTipoItemByIdInput):GetTipoItemByIdOutput {
        return {} as GetTipoItemByIdOutput;
    }
}