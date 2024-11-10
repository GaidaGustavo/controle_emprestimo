import { TipoItem } from "../entity/tipo-item";

export interface TipoItemRepository {
    getAll(): Promise<TipoItem[]>;
    getById(id: string): Promise<TipoItem>;
    create(tipoItem: TipoItem): Promise<void>;
    update(tipoItem: TipoItem): Promise<void>;
    delete(id: string): Promise<void>;
}       