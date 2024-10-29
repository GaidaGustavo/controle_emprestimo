import { Item } from "../../../domain/entity/item";
import { TipoItem } from "../../../domain/entity/tipoitem";
import { ItemRepository } from "../../../domain/repository/item-repository";

export default class ItemRepositoryPostgres implements ItemRepository{
    constructor(){
    }
    async getAll(): Promise<Item[]> {
        throw new Error("Method not implemented.");
    }
    async getById(id: string): Promise<Item> {
        throw new Error("Method not implemented.");
    }
    async create(item: Item): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async update(item: Item): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}