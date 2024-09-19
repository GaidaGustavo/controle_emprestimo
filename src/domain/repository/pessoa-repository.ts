import { Pessoa } from "../entity/pessoa";

export interface PessoaRepository {
    getAll(): Pessoa[];
    getById(id: string): Pessoa;
    create(pessoa: Pessoa): void;
    update(pessoa: Pessoa): void;
}