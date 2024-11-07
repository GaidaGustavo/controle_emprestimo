import { Emprestimo } from "../../../domain/entity/emprestimo";
import { Item } from "../../../domain/entity/item";
import { Pessoa } from "../../../domain/entity/pessoa";
import { TipoItem } from "../../../domain/entity/tipoitem";
import { Usuario } from "../../../domain/entity/usuario";
import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { Connection } from "../../config-database/connection";


export default class EmprestimoRepositoryDatabase implements EmprestimoRepository{
    constructor(private connection: Connection){
    }
    async getAll(): Promise<Emprestimo[]> {
        throw new Error("Method not implemented.");
    }
    async getById(id: string): Promise<Emprestimo> {
        throw new Error("Method not implemented.");
    }
    async create(emprestimo: Emprestimo): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async update(emprestimo: Emprestimo): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}