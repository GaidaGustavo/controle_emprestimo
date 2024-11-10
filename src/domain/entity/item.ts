import { ItemEPI } from "./value-object/item-epi";
import { TipoItem } from "./tipo-item";
import { v4 } from 'uuid';

export class Item {
    readonly id?: string;
    private tipoItem: TipoItem;
    private itemEPI?: ItemEPI;

    constructor(readonly name: string, tipoItem: TipoItem, id?: string, itemEPI?: ItemEPI) {
        if (!id) {
            id = v4();
        };
        this.name = name;
        this.tipoItem = tipoItem;
        this.id = id;
        this.itemEPI = itemEPI;
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

    getItemEPI(): ItemEPI | undefined{
        return this.itemEPI;
    }
}
