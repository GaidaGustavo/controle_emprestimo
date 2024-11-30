import { Pessoa } from "../../../domain/entity/pessoa";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { Connection } from "../../config-database/connection";

export default class PessoaRepositoryDatabase implements PessoaRepository {
    constructor(private connection: Connection) {}

    async getAll(): Promise<Pessoa[]> {
        try {
            const output: Pessoa[] = [];
            const pessoasData = await this.connection.execute(`
                SELECT id, nome, documento 
                FROM pessoas;
            `);

            for (const pessoaData of pessoasData) {
                const pessoa = new Pessoa(pessoaData.nome, pessoaData.documento, pessoaData.id);
                output.push(pessoa);
            }

            return output;
        } catch (error) {
            throw new Error('Erro ao buscar pessoas');
        }
    }

    async getById(id: string): Promise<Pessoa> {
        try {
            const [pessoaData] = await this.connection.execute(`
                SELECT id, nome, documento 
                FROM pessoas
                WHERE id = $1;
            `, [id]);

            if (!pessoaData) {
                throw new Error('Pessoa não encontrada');
            }

            const pessoa = new Pessoa(pessoaData.nome, pessoaData.documento, pessoaData.id);
            return pessoa;
        } catch (error) {
            throw new Error('Erro ao buscar pessoa');
        }
    }

    async create(pessoa: Pessoa): Promise<void> {
        try {
            await this.connection.execute(`
                INSERT INTO pessoas(id, nome, documento)
                VALUES ($1, $2, $3);
            `, [pessoa.getID(), pessoa.getName(), pessoa.getDocumento()]);
        } catch (error) {
            throw new Error('Erro ao criar pessoa');
        }
    }

    async update(pessoa: Pessoa): Promise<void> {
        try {
            await this.connection.execute(`
                UPDATE pessoas
                SET nome = $1, documento = $2
                WHERE id = $3;
            `, [pessoa.getName(), pessoa.getDocumento(), pessoa.getID()]);
        } catch (error) {
            throw new Error('Erro ao atualizar pessoa');
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await this.connection.execute(`DELETE FROM pessoas WHERE id = $1;`, [id]);
        } catch (error) {
            throw new Error('Erro ao excluir pessoa');
        }
    }
}
