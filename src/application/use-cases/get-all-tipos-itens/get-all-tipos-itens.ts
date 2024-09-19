import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { GetAllTiposItensInput } from "./get-all-tipos-itens-input";
import { GetAllTiposItensOutput } from "./get-all-tipos-itens-output";

export class GetAllTipoitensUseCase {
    constructor(readonly tipoItemRepository: TipoItemRepository) {}
    
    execute(input: GetAllTiposItensInput):GetAllTiposItensOutput {
        return {} as GetAllTiposItensOutput;
    }
}