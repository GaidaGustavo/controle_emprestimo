import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { GetTipoItemByIdInput } from "./get-tipo-item-by-id-input";
import { GetTipoItemByIdOutput } from "./get-tipo-item-by-id-output";


export class GetTipoitemByIdUseCase {
    constructor(readonly tipoItemRepository: TipoItemRepository) {}
    
    execute(input: GetTipoItemByIdInput):GetTipoItemByIdOutput {
        const tipoItem = this.tipoItemRepository.getById(input.id);
        
        const output: GetTipoItemByIdOutput = {
                id: tipoItem.getID(),
                name: tipoItem.getName(),
              
        
        }

        return output;
    }
}