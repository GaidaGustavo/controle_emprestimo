import { TipoItem } from "../../../domain/entity/tipoitem";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { CreateTipoItemInput } from "./create-tipo-item-input";
import { CreateTipoItemOutput } from "./create-tipo-item-output";

export class CreateTipoitemUseCase {
    constructor(readonly tipoItemRepository: TipoItemRepository) {}
    
    async execute(input: CreateTipoItemInput): Promise<CreateTipoItemOutput> {
        const tipoItem = new TipoItem(input.nome, input.id)

        await this.tipoItemRepository.create(tipoItem);
        return {}
    }
}