import { Usuario } from "../entity/usuario";

export interface UsuarioRepository {
    getAll(): Usuario[];
    getById(id: string): Usuario;
    getByUserName(username: string): Usuario;
    create(usuario: Usuario): void;
    update(usuario: Usuario): void;
    delete(id: string): void;
}