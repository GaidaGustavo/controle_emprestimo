import { TipoItem } from "../../../domain/entity/tipoitem";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";


export class TipoItemRepositoryMemory implements TipoItemRepository{
    private tipoItens: TipoItem[];
    
    constructor(){
    this.tipoItens = [
        new TipoItem('Copos', '4694690b-d32a-4050-86a9-041a90765e7f')
    ]
}
    getAll(): TipoItem[] {
        throw new Error("Method not implemented.");
    }
    getById(id: string): TipoItem {
        const tipoItem = this.tipoItens.find(valor => valor.getID() == id);

        if (!tipoItem) {
            throw new Error('User not Found');
        }

        return tipoItem;
    }
    create(tipoItem: TipoItem): void {
        throw new Error("Method not implemented.");
    }
    update(tipoItem: TipoItem): void {
        throw new Error("Method not implemented.");
    }

}