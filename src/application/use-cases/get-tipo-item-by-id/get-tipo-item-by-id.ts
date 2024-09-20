<<<<<<< HEAD
import { TipoItem } from "../../../domain/entity/tipoitem";
=======
>>>>>>> 7bec1cfd994556ba67505a996cdb44aed503d5ae
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { GetTipoItemByIdInput } from "./get-tipo-item-by-id-input";
import { GetTipoItemByIdOutput } from "./get-tipo-item-by-id-output";


export class GetTipoitemByIdUseCase {
<<<<<<< HEAD
    constructor(readonly tipoItem: TipoItemRepository) {}
=======
    constructor(readonly tipoItemRepository: TipoItemRepository) {}
>>>>>>> 7bec1cfd994556ba67505a996cdb44aed503d5ae
    
    execute(input: GetTipoItemByIdInput):GetTipoItemByIdOutput {
        return {} as GetTipoItemByIdOutput;
    }
}