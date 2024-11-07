import { v4 } from 'uuid';

export class TipoItem {
    readonly id?: string;
    private name: string;

    constructor(name: string, id?: string) {
        this.name = name;
        if (!id) {
        this.name = name;
            id = v4();
        };
        this.id = id;
    }

    getID(): string | undefined{
        return this.id;
    }

    getName(): string{
        return this.name;
    }   
}
