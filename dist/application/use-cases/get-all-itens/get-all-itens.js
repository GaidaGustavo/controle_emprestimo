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
exports.GetAllItensUseCase = void 0;
class GetAllItensUseCase {
    constructor(repositoryFactory) {
        this.repositoryFactory = repositoryFactory;
        this.itemRepository = repositoryFactory.createItemRepository();
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const itens = yield this.itemRepository.getAll();
            const output = [];
            for (const item of itens) {
                output.push({
                    id: item.getID(),
                    name: item.getName(),
                    itemEPI: item.getItemEPI(),
                    tipoItem: {
                        id: item.getTipoItem().getID(),
                        name: item.getTipoItem().getName(),
                    }
                });
            }
            return output;
        });
    }
}
exports.GetAllItensUseCase = GetAllItensUseCase;
