import { Usuario } from "../entity/usuario";

export interface UsuarioRepository {
    getAll(): Usuario[];
    getById(id: string): Usuario;
    getByUserName(username: string): Usuario;
    create(item: Usuario): void;
    update(item: Usuario): void;
}