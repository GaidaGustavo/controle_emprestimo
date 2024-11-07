import { TipoItem } from "../../../domain/entity/tipoitem";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";

export default class TipoItemRepositoryPostgres implements TipoItemRepository{
    constructor(){
    }
    async getAll(): Promise<TipoItem[]> {
        throw new Error("Method not implemented.");
    }
    async getById(id: string): Promise<TipoItem> {
        throw new Error("Method not implemented.");
    }
    async create(tipoItem: TipoItem): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async update(tipoItem: TipoItem): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}