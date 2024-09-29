import { TipoItem } from "./tipoitem";
import { v4 } from 'uuid';

export class Item {
    private id?: string;
    private name: string;
    private tipoItem: TipoItem;

    constructor(name: string, tipoItem: TipoItem, id?: string) {
        if (!id) {
            id = v4();
        };
        this.name = name;
        this.tipoItem = tipoItem;
        this.id = id;
    }

    getID(): string | undefined{
        return this.id;
    }

    getName(): string{
        return this.name;
    }   

    getTipoItem(): TipoItem{
        return this.tipoItem;
    }
}
