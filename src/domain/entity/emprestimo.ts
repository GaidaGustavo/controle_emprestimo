import { Item } from "./item"
import { Pessoa } from "./pessoa"
import { Usuario } from "./usuario";
import { v4 } from 'uuid';

export class Emprestimo {
    private id?: string;
    private item: Item;
    private dataEmprestimo?: Date;
    private dataDevolucao?: Date | undefined;
    private pessoa: Pessoa;
    private usuario: Usuario;

    constructor(item: Item, pessoa: Pessoa, usuario: Usuario, id?: string, dataDevolucao?: Date, dataEmprestimo?: Date) {
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

    getID(): string | undefined{
        return this.id;
    }

    getItem(): Item{
        return this.item;
    }   

    getdataDevolucao(): Date | undefined {
        return this.dataDevolucao;
    }

    getdataEmprestimo(): Date | undefined{
        return this.dataEmprestimo;
    }

    getUsuario(): Usuario {
        return this.usuario
    }

    getPessoa(): Pessoa {
        return this.pessoa;
    }
}
