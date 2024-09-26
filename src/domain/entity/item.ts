import { TipoItem } from "./tipoitem";
import { v4 } from 'uuid';

export class Item {
    private id?: string;
    private name: string;
    private tipo: TipoItem;

    constructor(name: string, tipo: TipoItem, id?: string) {
        if (!id) {
            id = v4();
        };
        this.name = name;
        this.tipo = tipo;
        this.id = id;
    }

    getID(): string | undefined{
        return this.id;
    }

    getName(): string{
        return this.name;
    }   

    getItem(): TipoItem{
        return this.tipo;
    }
}
