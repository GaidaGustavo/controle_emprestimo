import { Usuario } from "../entity/usuario";

export interface UsuarioRepository {
    getAll(): Promise<Usuario[]>;
    getById(id: string): Promise<Usuario>;
    create(usuario: Usuario): Promise<void>;
    update(usuario: Usuario): Promise<void>;
    delete(id: string): Promise<void>;
    getByUsername(username: string): Promise<Usuario>
}