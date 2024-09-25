"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetItemByIdUseCase = void 0;
class GetItemByIdUseCase {
    constructor(itemRepository) {
        this.itemRepository = itemRepository;
    }
    execute(input) {
        const item = this.itemRepository.getById(input.id);
        const output = {
            id: item.getID(),
            name: item.getName(),
            tipoItem: {
                id: item.getItem().getID(),
                name: item.getItem().getName(),
            }
        };
        return output;
    }
}
exports.GetItemByIdUseCase = GetItemByIdUseCase;
