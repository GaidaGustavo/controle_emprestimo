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
exports.GetItemByIdUseCase = void 0;
class GetItemByIdUseCase {
    constructor(repositoryFactory) {
        this.repositoryFactory = repositoryFactory;
        this.itemRepository = repositoryFactory.createItemRepository();
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.itemRepository.getById(input.id);
            const output = {
                id: item.getID(),
                name: item.getName(),
                itemEPI: item.getItemEPI(),
                tipoItem: {
                    id: item.getTipoItem().getID(),
                    name: item.getTipoItem().getName(),
                }
            };
            return output;
        });
    }
}
exports.GetItemByIdUseCase = GetItemByIdUseCase;
