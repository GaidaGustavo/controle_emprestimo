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
exports.CreateItemUseCase = void 0;
const item_1 = require("../../../domain/entity/item");
class CreateItemUseCase {
    constructor(repositoryFactory) {
        this.repositoryFactory = repositoryFactory;
        this.itemRepository = repositoryFactory.createItemRepository();
        this.tipoItemRepository = repositoryFactory.createTipoItemRepository();
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoItem = yield this.tipoItemRepository.getById(input.tipoItemId);
            const item = new item_1.Item(input.nome, tipoItem, input.id, input.itemEPI);
            yield this.itemRepository.create(item);
            return {};
        });
    }
}
exports.CreateItemUseCase = CreateItemUseCase;
