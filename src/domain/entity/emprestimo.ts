import { Item } from "./item"
import { Pessoa } from "./pessoa"
import { Usuario } from "./usuario";
import { v4 } from 'uuid';

export class Emprestimo {
    private id: string;
    private item: Item;
    private dataEmprestimo: Date;
    private dataDevolucao: Date | undefined;
    private pessoa: Pessoa;
    private usuario: Usuario;

    constructor(item: Item,  dataEmprestimo: Date, pessoa: Pessoa, usuario: Usuario, id?: string, dataDevolucao?: Date,) {
        this.item = item;
        this.dataDevolucao = dataDevolucao;
        this.dataEmprestimo = dataEmprestimo;
        this.pessoa = pessoa;
        this.usuario = usuario;
        if (!id) {
            id = v4();
        };
        this.id = id;
    }

    getID(): string{
        return this.id;
    }

    getItem(): Item{
        return this.item;
    }   

    getdataDevolucao(): Date | undefined {
        return this.dataDevolucao;
    }

    getdataEmprestimo(): Date {
        return this.dataEmprestimo;
    }

    getPessoa(): Pessoa {
        return this.pessoa;
    }
}
