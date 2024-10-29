import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { GetTipoItemByIdInput } from "./get-tipo-item-by-id-input";
import { GetTipoItemByIdOutput } from "./get-tipo-item-by-id-output";

export class GetTipoitemByIdUseCase {
    constructor(readonly tipoItemRepository: TipoItemRepository) {}
    
    async execute(input: GetTipoItemByIdInput):Promise<GetTipoItemByIdOutput> {
        const tipoItem = await this.tipoItemRepository.getById(input.id);
        
        const output: GetTipoItemByIdOutput = {
                id: tipoItem.getID(),
                nome: tipoItem.getName(),
        }

        return output;
    }
}