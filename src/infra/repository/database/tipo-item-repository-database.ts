import { TipoItem } from "../../../domain/entity/tipoitem";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";

export default class TipoItemRepositoryPostgres implements TipoItemRepository{
    constructor(private connection: Connection){
    }
    
    async getAll(): Promise<TipoItem[]> {
    
        const output: TipoItem[] = [];
        const tipoItemData = await this.connection.execute(`select id, nome from tipos_item`);

        for (const itemTypeData of tipoItemData) {
            output.push(new TipoItem(tipoItemData.nome, tipoItemData.id));
        }
        return output;
    }


    async getById(id: string): Promise<TipoItem> {
    
        const [ tipoItemData ] = await this.connection.execute(`
            select id, nome from tipos_item
            where id = $1
            `,
            [id]
        );
        
        if(!tipoItemData){
            throw new Error('Item não encontrado');
        }

        return new TipoItem(tipoItemData.nome, tipoItemData.id);
    }


    async create(tipoItem: TipoItem): Promise<void> {
        await this.connection.execute(`insert into tipos_item (id, nome)
            values($1, $2)`,
        [tipoItem.getID(), tipoItem.getName()])
    }


    async update(itemType: TipoItem): Promise<void> {
        await this.connection.execute(`update tipos_item set
            nome = $1
            where id = $2`, 
            [itemType.getName(), itemType.getID()]);
    }

    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}







