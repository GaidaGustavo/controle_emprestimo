"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoItemController = void 0;
const create_tipo_item_1 = require("../use-cases/create-tipo-item/create-tipo-item");
const delete_tipo_item_1 = require("../use-cases/delete-tipo-item/delete-tipo-item");
const get_all_tipos_itens_1 = require("../use-cases/get-all-tipos-itens/get-all-tipos-itens");
const get_tipo_item_by_id_1 = require("../use-cases/get-tipo-item-by-id/get-tipo-item-by-id");
const update_tipo_item_1 = require("../use-cases/update-tipo-item/update-tipo-item");
class TipoItemController {
    constructor(repositoryFactory) {
        this.repositoryFactory = repositoryFactory;
    }
    create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const createTipoItemUseCase = new create_tipo_item_1.CreateTipoitemUseCase(this.repositoryFactory);
            return yield createTipoItemUseCase.execute(input);
        });
    }
    update(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateTipoItemUseCase = new update_tipo_item_1.UpdateTipoItemUseCase(this.repositoryFactory);
            return yield updateTipoItemUseCase.execute(input);
        });
    }
    getAll(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllTipoItemUseCase = new get_all_tipos_itens_1.GetAllTipoitensUseCase(this.repositoryFactory);
            return yield getAllTipoItemUseCase.execute(input);
        });
    }
    getByID(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const getTipoItemById = new get_tipo_item_by_id_1.GetTipoitemByIdUseCase(this.repositoryFactory);
            return yield getTipoItemById.execute(input);
        });
    }
    delete(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteTipoItemUseCase = new delete_tipo_item_1.DeleteTipoItemUseCase(this.repositoryFactory);
            return yield deleteTipoItemUseCase.execute(input);
        });
    }
}
exports.TipoItemController = TipoItemController;
