import { Item } from "../../../domain/entity/item";
import { TipoItem } from "../../../domain/entity/tipoitem";
import { ItemRepository } from "../../../domain/repository/item-repository";

export class ItemRepositoryMemory implements ItemRepository {
    private itens: Item[];
    constructor() {
        const tipoItem1 = new TipoItem('Copos', '4694690b-d32a-4050-86a9-041a90765e7f')
        const tipoItem2 = new TipoItem('Compudadores', '30bc02ee-6bad-4c6c-82f4-7b1e9d8d3e39')
        this.itens = [
            new Item('Copo de Café', tipoItem1, 'eb51e356-16c1-4b1e-bfea-aadc07a2c60c'),
            new Item('Copo de Agua', tipoItem1, 'ef887170-3137-4d5e-89f7-cae4279720e6', ),
            new Item('Computador desktop dell',  tipoItem2, '63867047-bb25-468d-932a-8d471401a5c4',)
        ]
    }

    delete(id: string): void {
        this.itens = this.itens.filter(value => value.getID() !== id); 
    }


    create(item: Item): void {
        this.itens.push(item)
    }

    getAll(): Item[] {
        return this.itens;
    }

    getById(id: string): Item {
        console.log(id);
        const item = this.itens.find(valor => valor.getID() == id);

        if (!item) {
            throw new Error('User not Found');
        }

        return item;
    }

    update(item: Item): void {
        const itemAntigo = this.itens.findIndex(value => value.getID() == item.getID());
        this.itens[itemAntigo] = item;
    }
}