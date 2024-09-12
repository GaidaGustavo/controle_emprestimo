import { TipoItem } from "./tipoitem";
import { v4 } from 'uuid';

export class Item {
    private id: string;
    private name: string;
    private tipo: TipoItem;

    constructor(name: string, id: string, tipo: TipoItem) {
        if (!id) {
            id = v4();
        };
        this.id = id;
        this.name = name;
        this.tipo = tipo;
    }

    getID(): string{
        return this.id;
    }

    getName(): string{
        return this.name;
    }   

    getItem(): TipoItem{
        return this.tipo;
    }
}
