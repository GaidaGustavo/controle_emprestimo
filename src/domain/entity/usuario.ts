import { Pessoa } from "./pessoa";
import { v4 } from 'uuid';

export class Usuario {
    private id: string;
    private username: string;
    private senha: string;
    private pessoa: Pessoa;

    constructor(username: string, id: string, senha: string, pessoa: Pessoa) {
        if (!id) {
            id = v4();
        };
        this.id = id;
        this.username = username;
        this.senha = senha;
        this.pessoa = pessoa;
    }

    getID(): string{
        return this.id;
    }

    getName(): string{
        return this.username;
    }   

    getSenha(): string{
        return this.senha;
    }

    getPessoa(): Pessoa{
        return this.pessoa;
    }
}
