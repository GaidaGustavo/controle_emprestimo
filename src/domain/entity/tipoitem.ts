import { v4 } from 'uuid';

export class TipoItem {
    private id: string;
    private name: string;

    constructor(name: string, id: string) {
        if (!id) {
            id = v4();
        };
        this.id = id;
        this.name = name;
    }

    getID(): string{
        return this.id;
    }

    getName(): string{
        return this.name;
    }   
}
