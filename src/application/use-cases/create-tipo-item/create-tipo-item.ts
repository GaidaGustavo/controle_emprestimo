import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { CreateTipoItemInput } from "./create-tipo-item-input";
import { CreateTipoItemOutput } from "./create-tipo-item-output";

export class CreateTipoitemUseCase {
    constructor(readonly tipoitemRepository: TipoItemRepository) {}
    
    execute(input: CreateTipoItemInput): CreateTipoItemOutput {
        return {} as CreateTipoItemOutput;
    }
}