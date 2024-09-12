import { TipoItem } from "../entity/tipoitem";

export interface TipoItemRepository {
    getAll(): TipoItem[];
    getById(id: string): TipoItem;
    create(item: TipoItem): void;
    update(item: TipoItem): void;
}