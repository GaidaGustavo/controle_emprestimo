import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { DeleteTipoItemInput } from "./delete-tipo-item-input";
import { DeleteTipoItemOutput } from "./delete-tipo-item-output";

export class DeleteTipoItemUseCase {
    constructor(private readonly tipoItemRepository: TipoItemRepository) {}
    
    async execute(input: DeleteTipoItemInput):Promise<DeleteTipoItemOutput> {
        const item = await this.tipoItemRepository.delete(input.id);

        return {};
    }
}