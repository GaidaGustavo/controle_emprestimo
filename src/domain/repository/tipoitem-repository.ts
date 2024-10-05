import { TipoItem } from "../entity/tipoitem";

export interface TipoItemRepository {
    getAll(): TipoItem[];
    getById(id: string): TipoItem;
    create(tipoItem: TipoItem): void;
    update(tipoItem: TipoItem): void;
    delete(id: string): void;
}       