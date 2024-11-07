import { Pessoa } from "../../../domain/entity/pessoa";
import { Usuario } from "../../../domain/entity/usuario";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";

export default class UsuarioRepositoryPostgres implements UsuarioRepository{
    constructor(private connection: Connection){
    }
    
    async getAll(): Promise<Usuario[]> {
    
        const output: Usuario[] = [];
        const usuariosData = await this.connection.execute(`
            select p.id as pessoa_id, p.nome as pessoa_nome, p.documento as pessoa_documento, 
            u.id as usuario_id, u.nome_usuario as usuario_nome_usuario, u.senha as usuario_senha 
            from pessoas p 
            left join usuarios u on p.id = u.pessoa_id;
            `);
        
        for (const usuarioData of usuariosData) {
            const pessoa = new Pessoa(
                usuarioData.nome_pessoa,
                usuarioData.id_pessoa
            )

            const usuario = new Usuario(
                usuarioData.id,
                pessoa,
                usuarioData.nome_usuario
                )
    
            output.push(usuario)

        }
    
        return output;
    }


    async getById(id: string): Promise<Usuario> {
    
        const usuarioData = await this.connection.execute(`
            select p.id as pessoa_id, p.nome as pessoa_nome, p.documento as pessoa_documento, 
            u.id as usuario_id, u.nome_usuario as usuario_nome_usuario, u.senha as usuario_senha 
            from pessoas p 
            left join usuarios u on p.id = u.pessoa_id;
            `);
        
            const pessoa = new Pessoa(
                usuarioData.nome_pessoa,
                usuarioData.id_pessoa
            )

            const usuario = new Usuario(
                usuarioData.id,
                pessoa,
                usuarioData.nome_usuario
                )

        return usuario;
    }


    async create(usuario: Usuario): Promise<void> {
        await this.connection.execute(`
            insert into usuarios(id, pessoa_id, nome_usuario, senha)
            values ($1, $2, $3, $4)`,
            [usuario.getID, usuario.getPessoa().getID(), usuario.username, usuario.senha]);        
    }


    

    async update(usuario: Usuario): Promise<void> {
        await this.connection.execute(`
            update usuarios set
            pessoa_id = $1,
            nome_usuario = $2,
            senha = $3
            where id $4
            `,
            [usuario.getPessoa().getID(), usuario.username, usuario.senha, usuario.id]);        
    }

    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}