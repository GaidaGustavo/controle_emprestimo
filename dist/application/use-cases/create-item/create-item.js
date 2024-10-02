"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateItemUseCase = void 0;
const item_1 = require("../../../domain/entity/item");
class CreateItemUseCase {
    constructor(itemRepository, tipoItemRepository) {
        this.itemRepository = itemRepository;
        this.tipoItemRepository = tipoItemRepository;
    }
    execute(input) {
        const tipoItem = this.tipoItemRepository.getById(input.tipoItemId);
        const item = new item_1.Item(input.nome, tipoItem, input.id);
        this.itemRepository.create(item);
        return {};
    }
}
exports.CreateItemUseCase = CreateItemUseCase;
