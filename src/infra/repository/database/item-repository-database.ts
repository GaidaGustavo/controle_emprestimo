import { Item } from "../../../domain/entity/item";
import { TipoItem } from "../../../domain/entity/tipoitem";
import { ItemRepository } from "../../../domain/repository/item-repository";

export default class ItemRepositoryDatabase implements ItemRepository{
    constructor(private connection: Connection){
    }
    
    async getAll(): Promise<Item[]> {
    
        const output: Item[] = [];
        const itensData = await this.connection.execute(`
            select i.id, i.nome. ti.id as tipo_item_id, ti.nome as nome_tipoitem
            from itens i
            left join tipos_item ti on i.tipo_item_id = ti.id
            `);
        
        for(const itemData of itensData) {
            const tipoItem = new TipoItem(
                itemData.nome_tipoitem,
                itemData.tipo_item_id
            )

            const item = new Item(
                itemData.nome,
                tipoItem,
                itemData.id
            )

        output.push(item)

        }

        return output;
    }


    async getById(id: string): Promise<Item> {
    
        const [ itemData ] = await this.connection.execute(`
            select i.id, i.nome, ti.id as tipo_item_id, ti.nome as nome_tipoitem
            from itens i 
            left join tipos_item ti on i.tipo_item_id = ti.id
            where i.id = $1`,
            [id]
        );
        
        if(!itemData){
            throw new Error('TipoItem não encontrado');
        }

        const tipoItem = new TipoItem(
            itemData.nome_tipoitem,
            itemData.tipo_item_id
        )

        const item = new Item(
            itemData.nome,
            tipoItem,
            itemData.id
        )

        return item;
    }


    async create(item: Item): Promise<void> {
        await this.connection.execute(`
            insert into itens(id, nome, tipo_item_id)
            values ($1, $2, $3)`,
            [item.name, item.id, item.getTipoItem().getID()]);        
    }



    async update(item: Item): Promise<void> {
        await this.connection.execute(`
            update itens set
            nome = $1,
            tipo_item_id = $2
            where id = $3
            `,
            [item.name, item.getTipoItem().getID(), item.id]);
    }

    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}