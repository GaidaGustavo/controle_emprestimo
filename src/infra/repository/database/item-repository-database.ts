import { GetTipoitemByIdUseCase } from "../../../application/use-cases/get-tipo-item-by-id/get-tipo-item-by-id";
import { Item } from "../../../domain/entity/item";
import { TipoItem } from "../../../domain/entity/tipo-item";
import { ItemEPI } from "../../../domain/entity/value-object/item-epi";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { Connection } from "../../config-database/connection";

export default class ItemRepositoryDatabase implements ItemRepository{
    constructor(private connection: Connection){
    }
    
    async getAll(): Promise<Item[]> {
    
        const output: Item[] = [];
        const itensData = await this.connection.execute(`
            select i.id, i.nome, ti.id AS tipo_item_id, ti.nome AS nome_tipoitem, ie.ca, ie.validade
            from itens i left join tipos_item ti on i.tipo_item_id = ti.id
            left join itens_epi ie on i.id = ie.item_id;
            `);
        
        for(const itemData of itensData) {
            const tipoItem = new TipoItem(
                itemData.nome_tipoitem,
                itemData.tipo_item_id
            )

            const itenEpi = new ItemEPI(
                itemData.ca,
                itemData.validade
            )

            const item = new Item(
                itemData.nome,
                tipoItem,
                itemData.id,
                itenEpi
            )

        output.push(item)

        }

        return output;
    }


    async getById(id: string): Promise<Item> {
    
        const [ itemData ] = await this.connection.execute(`
            SELECT i.id, i.nome, ti.id AS tipo_item_id, ti.nome AS nome_tipoitem, ie.ca, ie.validade
            from itens i left join tipos_item ti on i.tipo_item_id = ti.id
            left join itens_epi ie on i.id = ie.item_id
            where i.id = $1`,
            [id]
        );
        
        if(!itemData){
            throw new Error('Item não encontrado');
        }

        const tipoItem = new TipoItem(
            itemData.nome_tipoitem,
            itemData.tipo_item_id
        )

        const itenEpi = new ItemEPI(
            itemData.ca,
            itemData.validade
        )

        const item = new Item(
            itemData.nome,
            tipoItem,
            itemData.id,
            itenEpi
        )

        return item;
    }


    async create(item: Item): Promise<void> {

        if(item.getItemEPI() !== null){

            await this.connection.execute(`            
                insert into itens(id, nome, tipo_item_id)
                values ($1, $2, $3);
                
                insert into itens_epi(item_id, ca, validade)
                values ($1, $4, $5);
                `,
                [item.id, item.name, item.getTipoItem().getID(), item.getItemEPI()?.getCa,
                    item.getItemEPI()?.getValidade, item.getTipoItem().getID
                ]);   

        } else {
            await this.connection.execute(`            
                insert into itens(id, nome, tipo_item_id)
                values ($1, $2, $3);
                `,
                [item.id, item.name, item.getTipoItem().getID()]);   
        }
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