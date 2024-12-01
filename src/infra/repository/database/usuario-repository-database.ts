import { hash } from "bcrypt";
import { Pessoa } from "../../../domain/entity/pessoa";
import { Usuario } from "../../../domain/entity/usuario";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { Connection } from "../../config-database/connection";

export default class UsuarioRepositoryDatabase implements UsuarioRepository {
    constructor(private connection: Connection) {}

    async getAll(): Promise<Usuario[]> {
        try {
            const output: Usuario[] = [];
            const usuariosData = await this.connection.execute(`
                SELECT u.id AS usuario_id, 
                    u.nome_usuario, 
                    u.senha, 
                    p.id AS pessoa_id, 
                    p.nome AS pessoa_nome, 
                    p.documento AS pessoa_documento
                FROM usuarios u
                JOIN pessoas p ON u.pessoa_id = p.id
                WHERE u.ativo = TRUE
                AND p.ativo = TRUE;
            `);

            for (const usuarioData of usuariosData) {
                const pessoa = new Pessoa(
                    usuarioData.pessoa_nome,
                    usuarioData.pessoa_documento,
                    usuarioData.pessoa_id
                );

                const usuario = new Usuario(
                    usuarioData.nome_usuario,
                    pessoa,
                    usuarioData.senha,
                    usuarioData.usuario_id
                );

                output.push(usuario);
            }

            return output;
        } catch (error) {
            throw new Error('Erro ao buscar usuários');
        }
    }

    async getById(id: string): Promise<Usuario> {
        try {
            const [usuarioData] = await this.connection.execute(`
                SELECT u.id AS usuario_id, 
                    u.nome_usuario, 
                    u.senha, 
                    p.id AS pessoa_id, 
                    p.nome AS pessoa_nome, 
                    p.documento AS pessoa_documento
                FROM usuarios u
                JOIN pessoas p ON u.pessoa_id = p.id
                WHERE u.id = $1
                AND u.ativo = TRUE
                AND p.ativo = TRUE;
            `, [id]);

            if (!usuarioData) {
                throw new Error('Usuário não encontrado');
            }

            const pessoa = new Pessoa(
                usuarioData.pessoa_nome,
                usuarioData.pessoa_documento,
                usuarioData.pessoa_id
            );

            return new Usuario(
                usuarioData.nome_usuario,
                pessoa,
                usuarioData.senha,
                usuarioData.usuario_id
            );
        } catch (error) {
            throw new Error('Erro ao buscar usuário');
        }
    }

    async create(usuario: Usuario): Promise<void> {
        try {
            const senha = usuario.getSenha()!;
            const senhaCriptografada = await hash(senha, 10);
            await this.connection.execute(`
                INSERT INTO usuarios(id, pessoa_id, nome_usuario, senha, ativo)
                VALUES ($1, $2, $3, $4, TRUE);
            `, [usuario.getID(), usuario.getPessoa().getID(), usuario.getName(), senhaCriptografada]);
        } catch (error) {
            throw new Error('Erro ao criar usuário');
        }
    }

    async update(usuario: Usuario): Promise<void> {
        try {
            const senha = usuario.getSenha()!;
            const senhaCriptografada = await hash(senha, 10);
            await this.connection.execute(`
                UPDATE usuarios
                SET pessoa_id = $1, nome_usuario = $2, senha = $3
                WHERE id = $4;
            `, [usuario.getPessoa().getID(), usuario.getName(), senhaCriptografada, usuario.getID()]);
        } catch (error) {
            throw new Error('Erro ao atualizar usuário');
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await this.connection.execute(`
                UPDATE usuarios
                SET ativo = FALSE
                WHERE id = $1;
                ;
            `, [id]);
        } catch (error) {
            throw new Error('Erro ao excluir usuário');
        }
    }

    async getByUsername(username: string): Promise<Usuario> {
        try {
            const [ usuarioData ] = await this.connection.execute(`
                SELECT u.id AS usuario_id, 
                    u.nome_usuario, 
                    u.senha, 
                    p.id AS pessoa_id, 
                    p.nome AS pessoa_nome, 
                    p.documento AS pessoa_documento
                FROM usuarios u
                JOIN pessoas p ON u.pessoa_id = p.id
                WHERE u.nome_usuario = $1
                AND u.ativo = TRUE
                AND p.ativo = TRUE;
            `, [username]);

            if (!usuarioData) {
                throw new Error('Usuário não encontrado');
            }

            const pessoa = new Pessoa(
                usuarioData.pessoa_nome,
                usuarioData.pessoa_documento,
                usuarioData.pessoa_id
            );

            return new Usuario(
                usuarioData.nome_usuario,
                pessoa,
                usuarioData.senha,
                usuarioData.usuario_id,
            );
        } catch (error) {
            throw new Error('Erro ao buscar usuário pelo nome');
        }
    }
}
