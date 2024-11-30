import { v4 } from 'uuid';

export class TipoItem {
    private id?: string;
    private name: string;

    constructor(name: string, id?: string) {
        this.name = name;
        if (!id) {
            id = v4();
        }
        this.id = id;
    }

   
     getID(): string  {
        return this.id;
    }

     getName(): string {
        return this.name;
    }

}
