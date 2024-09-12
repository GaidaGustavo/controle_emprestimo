import { Pessoa } from "../entity/pessoa";

export interface PessoaRepository {
    getAll(): Pessoa[];
    getById(id: string): Pessoa;
    create(item: Pessoa): void;
    update(item: Pessoa): void;
}