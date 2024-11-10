
import { TipoItem } from "../../../domain/entity/tipo-item";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";


export class TipoItemRepositoryMemory implements TipoItemRepository{
    private tipoItens: TipoItem[];
    
    constructor(){
    this.tipoItens = [
        new TipoItem('Copos', '4694690b-d32a-4050-86a9-041a90765e7f'),
        new TipoItem('Compudadores', '30bc02ee-6bad-4c6c-82f4-7b1e9d8d3e39')
    ]
}
    async delete(id: string): Promise<void> {
        this.tipoItens = await this.tipoItens.filter(value => value.getID() !== id);
    }
    async getAll(): Promise<TipoItem[]> {
        return await this.tipoItens;
    }
    async getById(id: string): Promise<TipoItem> {
        const tipoItem = await this.tipoItens.find(valor => valor.getID() == id);

        if (!tipoItem) {
            throw new Error('User not Found');
        }

        return tipoItem;
    }
    async create(tipoItem: TipoItem): Promise<void> {
        await this.tipoItens.push(tipoItem)
    }
    async update(tipoItem: TipoItem): Promise<void> {
        const tipoItemAntigo = await this.tipoItens.findIndex(value => value.getID() == tipoItem.getID());
        this.tipoItens[tipoItemAntigo] = tipoItem;
    }

}