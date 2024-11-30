import { Item } from "../../../domain/entity/item";
import { TipoItem } from "../../../domain/entity/tipo-item";
import { ItemEPI } from "../../../domain/entity/value-object/item-epi";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { Connection } from "../../config-database/connection";

export default class ItemRepositoryDatabase implements ItemRepository {
    constructor(private connection: Connection) {}

    async getAll(): Promise<Item[]> {
        try {
            const output: Item[] = [];
            const itensData = await this.connection.execute(`
                SELECT i.id, i.nome, ti.id AS tipo_item_id, ti.nome AS nome_tipoitem, 
                    ie.ca, ie.validade
                FROM itens i 
                LEFT JOIN tipos_item ti ON i.tipo_item_id = ti.id
                LEFT JOIN itens_epi ie ON i.id = ie.item_id;
            `);

            for (const itemData of itensData) {
                const tipoItem = new TipoItem(itemData.nome_tipoitem, itemData.tipo_item_id);
                const itemEpi = new ItemEPI(itemData.ca, itemData.validade);
                const item = new Item(itemData.nome, tipoItem, itemData.id, itemEpi);
                output.push(item);
            }

            return output;
        } catch (error) {
            throw new Error('Erro ao buscar itens');
        }
    }

    async getById(id: string): Promise<Item> {
        try {
            const [itemData] = await this.connection.execute(`
                SELECT i.id, i.nome, ti.id AS tipo_item_id, ti.nome AS nome_tipoitem, 
                    ie.ca, ie.validade
                FROM itens i
                LEFT JOIN tipos_item ti ON i.tipo_item_id = ti.id
                LEFT JOIN itens_epi ie ON i.id = ie.item_id
                WHERE i.id = $1;
            `, [id]);

            if (!itemData) {
                throw new Error(`Item com ID ${id} não encontrado`);
            }

            const tipoItem = new TipoItem(itemData.nome_tipoitem, itemData.tipo_item_id);
            const itemEpi = new ItemEPI(itemData.ca || '', itemData.validade || '');
            const item = new Item(itemData.nome, tipoItem, itemData.id, itemEpi);

            return item;
        } catch (error) {
            throw new Error('Erro ao buscar o item');
        }
    }

    async create(item: Item): Promise<void> {
        try {
            if (item.getItemEPI() !== null) {
                await this.connection.execute(`
                    INSERT INTO itens(id, nome, tipo_item_id)
                    VALUES ($1, $2, $3);
                    INSERT INTO itens_epi(item_id, ca, validade)
                    VALUES ($1, $4, $5);
                `, [
                    item.id, item.name, item.getTipoItem().getID(),
                    item.getItemEPI()?.getCa(), item.getItemEPI()?.getValidade()
                ]);
            } else {
                await this.connection.execute(`
                    INSERT INTO itens(id, nome, tipo_item_id)
                    VALUES ($1, $2, $3);
                `, [item.id, item.name, item.getTipoItem().getID()]);
            }
        } catch (error) {
            throw new Error('Erro ao criar item');
        }
    }

    async update(item: Item): Promise<void> {
        try {
            if (!item.getItemEPI()) {
                await this.connection.execute(`
                    UPDATE itens
                    SET nome = $1, tipo_item_id = $2
                    WHERE id = $3;
                `, [item.name, item.getTipoItem().getID(), item.id]);
            } else {
                await this.connection.execute(`
                    UPDATE itens
                    SET nome = $1, tipo_item_id = $2
                    WHERE id = $3;
                    UPDATE itens_epi
                    SET ca = $4, validade = $5
                    WHERE item_id = $3;
                `, [
                    item.name, item.getTipoItem().getID(), item.id,
                    item.getItemEPI()?.getCa(), item.getItemEPI()?.getValidade()
                ]);
            }
        } catch (error) {
            throw new Error('Erro ao atualizar item');
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await this.connection.execute(`DELETE FROM itens WHERE id = $1;`, [id]);
        } catch (error) {
            throw new Error('Erro ao excluir item');
        }
    }
}
