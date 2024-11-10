import { v4 } from 'uuid';

export class Pessoa {
    readonly id?: string;
    
    constructor(readonly name: string, readonly documento:string, id?: string) {
        if (!id) {
            id = v4();
        };
        this.id = id;
        this.name = name;
        this.documento = documento;
    }

    getID(): string | undefined{
        return this.id;
    }

    getName(): string{
        return this.name;
    }   

    getDocumento(): string{
        return this.documento;
    }   
}
