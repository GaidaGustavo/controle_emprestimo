import { Item } from "../entity/item";

export interface ItemRepository {
    getAll(): Item[];
    getById(id: string): Item;
    create(item: Item): void;
    update(item: Item): void;
}