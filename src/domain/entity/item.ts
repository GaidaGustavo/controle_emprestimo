import { TipoItem } from "./tipoitem";
import { v4 } from 'uuid';

export class Item {
    readonly id?: string;
    private tipoItem: TipoItem;

    constructor(readonly name: string, tipoItem: TipoItem, id?: string) {
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
