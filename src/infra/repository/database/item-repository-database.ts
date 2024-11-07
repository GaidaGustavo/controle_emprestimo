import { Item } from "../../../domain/entity/item";
import { TipoItem } from "../../../domain/entity/tipoitem";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { Connection } from "../../config-database/connection";

export default class ItemRepositoryDatabase implements ItemRepository{
    constructor(private connection: Connection){
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