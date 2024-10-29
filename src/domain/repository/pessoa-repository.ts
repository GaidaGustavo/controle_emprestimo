import { Pessoa } from "../entity/pessoa";

export interface PessoaRepository {
    getAll(): Promise<Pessoa[]>;
    getById(id: string): Promise<Pessoa>;
    create(pessoa: Pessoa): Promise<void>;
    update(pessoa: Pessoa): Promise<void>;
    delete(id: string): Promise<void>;
}