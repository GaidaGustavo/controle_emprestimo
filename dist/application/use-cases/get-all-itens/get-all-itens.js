"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllItensUseCase = void 0;
class GetAllItensUseCase {
    constructor(itemRespository) {
        this.itemRespository = itemRespository;
    }
    execute(input) {
        const itens = this.itemRespository.getAll();
        const output = [];
        for (const item of itens) {
            output.push({
                id: item.getID(),
                name: item.getName(),
                tipoItem: {
                    id: item.getTipoItem().getID(),
                    name: item.getTipoItem().getName(),
                }
            });
        }
        return output;
    }
}
exports.GetAllItensUseCase = GetAllItensUseCase;
