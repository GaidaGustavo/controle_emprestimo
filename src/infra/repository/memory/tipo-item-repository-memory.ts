import { TipoItem } from "../../../domain/entity/tipoitem";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";


export class TipoItemRepositoryMemory implements TipoItemRepository{
    private tipoItens: TipoItem[];
    
    constructor(){
    this.tipoItens = [
        new TipoItem('Copos', '4694690b-d32a-4050-86a9-041a90765e7f'),
        new TipoItem('Compudadores', '30bc02ee-6bad-4c6c-82f4-7b1e9d8d3e39')
    ]
}
    getAll(): TipoItem[] {
        return this.tipoItens;
    }
    getById(id: string): TipoItem {
        const tipoItem = this.tipoItens.find(valor => valor.getID() == id);

        if (!tipoItem) {
            throw new Error('User not Found');
        }

        return tipoItem;
    }
    create(tipoItem: TipoItem): void {
        this.tipoItens.push(tipoItem)
    }
    update(tipoItem: TipoItem): void {
        throw new Error("Method not implemented.");
    }

}