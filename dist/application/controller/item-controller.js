"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemController = void 0;
const create_item_1 = require("../use-cases/create-item/create-item");
const get_all_itens_1 = require("../use-cases/get-all-itens/get-all-itens");
const get_item_by_id_1 = require("../use-cases/get-item-by-id/get-item-by-id");
const update_item_1 = require("../use-cases/update-item/update-item");
class ItemController {
    constructor(itemRepository, tipoItemRepository) {
        this.itemRepository = itemRepository;
        this.tipoItemRepository = tipoItemRepository;
    }
    create(input) {
        const createItemUseCase = new create_item_1.CreateItemUseCase(this.itemRepository, this.tipoItemRepository);
        return createItemUseCase.execute(input);
    }
    update(input) {
        const updateItemUseCase = new update_item_1.UpdateItemUseCase(this.itemRepository);
        return updateItemUseCase.execute(input);
    }
    getAll(input) {
        const getAllItensUseCase = new get_all_itens_1.GetAllItensUseCase(this.itemRepository);
        return getAllItensUseCase.execute(input);
    }
    getById(input) {
        const getItemByIdUseCase = new get_item_by_id_1.GetItemByIdUseCase(this.itemRepository);
        return getItemByIdUseCase.execute(input);
    }
}
exports.ItemController = ItemController;
