"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllTipoitensUseCase = void 0;
class GetAllTipoitensUseCase {
    constructor(tipoItemRepository) {
        this.tipoItemRepository = tipoItemRepository;
    }
    execute(input) {
        const tiposItens = this.tipoItemRepository.getAll();
        const output = [];
        for (const tipoItem of tiposItens) {
            output.push({
                id: tipoItem.getID(),
                nome: tipoItem.getName(),
            });
        }
        return output;
    }
}
exports.GetAllTipoitensUseCase = GetAllTipoitensUseCase;
