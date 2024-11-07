"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTipoitemByIdUseCase = void 0;
class GetTipoitemByIdUseCase {
    constructor(tipoItemRepository) {
        this.tipoItemRepository = tipoItemRepository;
    }
    execute(input) {
        const tipoItem = this.tipoItemRepository.getById(input.id);
        const output = {
            id: tipoItem.getID(),
            nome: tipoItem.getName(),
        };
        return output;
    }
}
exports.GetTipoitemByIdUseCase = GetTipoitemByIdUseCase;
