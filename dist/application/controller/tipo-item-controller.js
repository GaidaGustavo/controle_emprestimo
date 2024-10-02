"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoItemController = void 0;
const create_tipo_item_1 = require("../use-cases/create-tipo-item/create-tipo-item");
const get_all_tipos_itens_1 = require("../use-cases/get-all-tipos-itens/get-all-tipos-itens");
const get_tipo_item_by_id_1 = require("../use-cases/get-tipo-item-by-id/get-tipo-item-by-id");
const update_tipo_item_1 = require("../use-cases/update-tipo-item/update-tipo-item");
class TipoItemController {
    constructor(tipoItemRepository) {
        this.tipoItemRepository = tipoItemRepository;
    }
    create(input) {
        const createTipoItemUseCase = new create_tipo_item_1.CreateTipoitemUseCase(this.tipoItemRepository);
        return createTipoItemUseCase.execute(input);
    }
    update(input) {
        const updateTipoItemUseCase = new update_tipo_item_1.UpdateTipoItemUseCase(this.tipoItemRepository);
        return updateTipoItemUseCase.execute(input);
    }
    getAll(input) {
        const getAllTipoItemUseCase = new get_all_tipos_itens_1.GetAllTipoitensUseCase(this.tipoItemRepository);
        return getAllTipoItemUseCase.execute(input);
    }
    getByID(input) {
        const getTipoItemById = new get_tipo_item_by_id_1.GetTipoitemByIdUseCase(this.tipoItemRepository);
        return getTipoItemById.execute(input);
    }
}
exports.TipoItemController = TipoItemController;
