export class ItemEPI{
    private ca: string;
    private validade: Date;

    constructor(ca: string, validade: Date){
        this.ca = ca;
        this.validade = validade;
    }

    getCa(): string{
        return this.ca;
    }

    getValidade(): Date{
        return this.validade;
    }   
}
