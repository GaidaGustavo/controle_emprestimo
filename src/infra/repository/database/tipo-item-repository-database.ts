import { TipoItem } from "../../../domain/entity/tipoitem";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { Connection } from "../../config-database/connection";

export default class TipoItemRepositoryDatabase implements TipoItemRepository{
    constructor(private connection: Connection){
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