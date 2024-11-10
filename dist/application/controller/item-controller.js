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
exports.ItemController = void 0;
const create_item_1 = require("../use-cases/create-item/create-item");
const delete_item_1 = require("../use-cases/delete-item/delete-item");
const get_all_itens_1 = require("../use-cases/get-all-itens/get-all-itens");
const get_item_by_id_1 = require("../use-cases/get-item-by-id/get-item-by-id");
const update_item_1 = require("../use-cases/update-item/update-item");
class ItemController {
    constructor(repositoryFactory) {
        this.repositoryFactory = repositoryFactory;
    }
    create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const createItemUseCase = new create_item_1.CreateItemUseCase(this.repositoryFactory);
            return yield createItemUseCase.execute(input);
        });
    }
    update(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateItemUseCase = new update_item_1.UpdateItemUseCase(this.repositoryFactory);
            return yield updateItemUseCase.execute(input);
        });
    }
    getAll(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllItensUseCase = new get_all_itens_1.GetAllItensUseCase(this.repositoryFactory);
            return yield getAllItensUseCase.execute(input);
        });
    }
    getById(input) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(input);
            const getItemByIdUseCase = new get_item_by_id_1.GetItemByIdUseCase(this.repositoryFactory);
            return yield getItemByIdUseCase.execute(input);
        });
    }
    delete(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteItemUseCase = new delete_item_1.DeleteItemUseCase(this.repositoryFactory);
            return yield deleteItemUseCase.execute(input);
        });
    }
}
exports.ItemController = ItemController;
