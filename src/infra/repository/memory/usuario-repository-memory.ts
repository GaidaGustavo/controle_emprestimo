import { Pessoa } from "../../../domain/entity/pessoa";
import { Usuario } from "../../../domain/entity/usuario";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";


export default class UsuarioRepositoryMemory implements UsuarioRepository{
    private usuarios: Usuario[];
    constructor(){
        const pessoa1 = new Pessoa('Jacson Santos', '2151eb0d-642a-4224-8229-aefd5832ad85')
        const pessoa2 = new Pessoa('Gabriel do Anel', 'a1fc0591-9bed-40b5-aba3-ab0ecde05f7e')
        this.usuarios = [
            new Usuario('jacson_santos', pessoa1, '7e461e53-0793-4ba3-8c34-dc5f45481b31', '123'),
            new Usuario('gabriel_anel', pessoa2, '3b4596dd-45d4-4f0e-ac57-d7e18d46fdfe', '123')
        ]
    }
    async delete(id: string): Promise<void> {
        this.usuarios = await this.usuarios.filter(value => value.getID() !== id);
    }
    
    async getAll(): Promise<Usuario[]> {
        return await this.usuarios;
    }
    async getById(id: string): Promise<Usuario> {
        const usuario = await this.usuarios.find(valor => valor.getID() == id);

        if (!usuario) {
           throw new Error('User not Found');
        }

        return usuario;
    }
    async getByUserName(username: string): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
    async create(usuario: Usuario): Promise<void> {
        await this.usuarios.push(usuario)
    }
    async update(usuario: Usuario): Promise<void> {
        const usuarioAntigo = await this.usuarios.findIndex(value => value.getID() == usuario.getID());
        this.usuarios[usuarioAntigo] = usuario;
    }    
}