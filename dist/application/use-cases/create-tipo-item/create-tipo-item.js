"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTipoitemUseCase = void 0;
const tipoitem_1 = require("../../../domain/entity/tipoitem");
class CreateTipoitemUseCase {
    constructor(tipoItemRepository) {
        this.tipoItemRepository = tipoItemRepository;
    }
    execute(input) {
        const tipoItem = new tipoitem_1.TipoItem(input.nome, input.id);
        this.tipoItemRepository.create(tipoItem);
        return {};
    }
}
exports.CreateTipoitemUseCase = CreateTipoitemUseCase;
