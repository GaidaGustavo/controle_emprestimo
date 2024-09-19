import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { UpdateTipoItemInput } from "./update-tipo-item-input";
import { UpdateTipoItemOutput } from "./update-tipo-item-output";

export class UpdatePessoaUseCase {
    constructor(readonly tipoItemRepository: TipoItemRepository) {}
    
    execute(input: UpdateTipoItemInput): UpdateTipoItemOutput {
        return {} as UpdateTipoItemOutput;
    }
}