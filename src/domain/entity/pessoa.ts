import { v4 } from 'uuid';

export class Pessoa {
    private id: string;
    private name: string;
    private documento: string;
    
    constructor(name: string, documento: string, id?: string) {
        if (!id) {
            id = v4();
        }
        this.id = id;
        this.name = name;
        this.documento = documento;
    }

    // Métodos Getter
    getID(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getDocumento(): string {
        return this.documento;
    }
}
