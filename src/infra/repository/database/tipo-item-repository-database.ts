import { TipoItem } from "../../../domain/entity/tipo-item";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { Connection } from "../../config-database/connection";

export default class TipoItemRepositoryDatabase implements TipoItemRepository {
    constructor(private connection: Connection) {}

    async getAll(): Promise<TipoItem[]> {
        try {
            const output: TipoItem[] = [];
            const tipoItemData = await this.connection.execute(`
                SELECT id, nome
                FROM tipos_item;
            `);

            for (const tipoItem of tipoItemData) {
                output.push(new TipoItem(tipoItem.nome, tipoItem.id));
            }

            return output;
        } catch (error) {
            throw new Error('Erro ao buscar tipos de item');
        }
    }

    async getById(id: string): Promise<TipoItem> {
        try {
            const [tipoItemData] = await this.connection.execute(`
                SELECT id, nome
                FROM tipos_item
                WHERE id = $1;
            `, [id]);

            if (!tipoItemData) {
                throw new Error('Tipo de item não encontrado');
            }

            return new TipoItem(tipoItemData.nome, tipoItemData.id);
        } catch (error) {
            throw new Error('Erro ao buscar tipo de item');
        }
    }

    async create(tipoItem: TipoItem): Promise<void> {
        try {
            await this.connection.execute(`
                INSERT INTO tipos_item (id, nome)
                VALUES ($1, $2);
            `, [tipoItem.getID(), tipoItem.getName()]);
        } catch (error) {
            throw new Error('Erro ao criar tipo de item');
        }
    }

    async update(itemType: TipoItem): Promise<void> {
        try {
            await this.connection.execute(`
                UPDATE tipos_item
                SET nome = $1
                WHERE id = $2;
            `, [itemType.getName(), itemType.getID()]);
        } catch (error) {
            throw new Error('Erro ao atualizar tipo de item');
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await this.connection.execute(`
                DELETE FROM tipos_item
                WHERE id = $1;
            `, [id]);
        } catch (error) {
            throw new Error('Erro ao excluir tipo de item');
        }
    }
}
