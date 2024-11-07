import { Pessoa } from "../../../domain/entity/pessoa";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";

export default class PessoaRepositoryPostgres implements PessoaRepository{
    constructor(){
    }
    async getAll(): Promise<Pessoa[]> {
        throw new Error("Method not implemented.");
    }
    async getById(id: string): Promise<Pessoa> {
        throw new Error("Method not implemented.");
    }
    async create(pessoa: Pessoa): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async update(pessoa: Pessoa): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}