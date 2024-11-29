import { Pessoa } from "../../../domain/entity/pessoa";
import { Usuario } from "../../../domain/entity/usuario";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { Connection } from "../../config-database/connection";

export default class UsuarioRepositoryDatabase implements UsuarioRepository{
    constructor(private connection: Connection){
    }
    
    async getAll(): Promise<Usuario[]> {
    
        const output: Usuario[] = [];
        const usuariosData = await this.connection.execute(`
            SELECT u.id AS usuario_id,u.nome_usuario, u.senha, p.id AS pessoa_id, p.nome AS pessoa_nome, p.documento AS pessoa_documento
            FROM usuarios u JOIN pessoas p ON u.pessoa_id = p.id;
            `);
        
        for (const usuarioData of usuariosData) {
            const pessoa = new Pessoa(
                usuarioData.pessoa_nome,
                usuarioData.pessoa_documento,
                usuarioData.pessoa_id
            )

            const usuario = new Usuario(
                usuarioData.nome_usuario,
                pessoa,
                usuarioData.usuario_id,
                usuarioData.senha
            )
    
            output.push(usuario)

        }
    
        return output;
    }


    async getById(id: string): Promise<Usuario> {
    
        const [ usuarioData ] = await this.connection.execute(`
            SELECT u.id AS usuario_id,u.nome_usuario, u.senha, p.id AS pessoa_id, p.nome AS pessoa_nome, p.documento AS pessoa_documento
            FROM usuarios u JOIN pessoas p ON u.pessoa_id = p.id
            where u.id = $1`,
            [id]
        );
        
        if(!usuarioData){
            throw new Error('Usuário não encontrado');
        }
        
            const pessoa = new Pessoa(
                usuarioData.pessoa_nome,
                usuarioData.pessoa_documento,
                usuarioData.pessoa_id
            )

            const usuario = new Usuario(
                usuarioData.nome_usuario,
                pessoa,
                usuarioData.usuario_id,
                usuarioData.senha
            )

        return usuario;
    }


    async create(usuario: Usuario): Promise<void> {
        await this.connection.execute(`
            insert into usuarios(id, pessoa_id, nome_usuario, senha)
            values ($1, $2, $3, $4)`,
            [usuario.getID(), usuario.getPessoa().getID(), usuario.username, usuario.senha]);        
    }

    async update(usuario: Usuario): Promise<void> {
        await this.connection.execute(`
            update usuarios set
            pessoa_id = $1,
            nome_usuario = $2,
            senha = $3
            where id = $4
            `,
            [usuario.getPessoa().getID(), usuario.username, usuario.senha, usuario.id]);        
    }

    async delete(id: string): Promise<void> {
        await this.connection.execute(`delete from usuarios where id = $1`, [id])    
    }

    async getByUsername(username: string): Promise<Usuario> {
        const [ usuarioData ] = await this.connection.execute(`
            SELECT u.id AS usuario_id,u.nome_usuario, u.senha, p.id AS pessoa_id, p.nome AS pessoa_nome, p.documento AS pessoa_documento
            FROM usuarios u JOIN pessoas p ON u.pessoa_id = p.id
            where u.nome_usuario = $1`,
            [username]
        );
        
        if(!usuarioData){
            throw new Error('Usuário não encontrado');
        }
        
            const pessoa = new Pessoa(
                usuarioData.pessoa_nome,
                usuarioData.pessoa_documento,
                usuarioData.pessoa_id
            )

            const usuario = new Usuario(
                usuarioData.nome_usuario,
                pessoa,
                usuarioData.usuario_id,
                usuarioData.senha
            )

        return usuario;    
    }
}