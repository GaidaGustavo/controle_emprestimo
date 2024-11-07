import { Pessoa } from "../../../domain/entity/pessoa";
import { Usuario } from "../../../domain/entity/usuario";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { Connection } from "../../config-database/connection";

export default class UsuarioRepositoryDatabase implements UsuarioRepository{
    constructor(private connection: Connection){
    }
    async getAll(): Promise<Usuario[]> {
        throw new Error("Method not implemented.");
    }
    async getById(id: string): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
    async create(usuario: Usuario): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async update(usuario: Usuario): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}