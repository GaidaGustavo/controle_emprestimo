import { Pessoa } from "../../../domain/entity/pessoa";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { Connection } from "../../config-database/connection";

export default class PessoaRepositoryDatabase implements PessoaRepository{
    constructor(private connection: Connection){
    }
    
    async getAll(): Promise<Pessoa[]> {
    
        const output: Pessoa[] = [];
        const pessoasData = await this.connection.execute(`
            select id, nome, documento 
            from pessoas
            `);
        
        for(const pessoaData of pessoasData) {
            const pessoa = new Pessoa(
                pessoaData.nome,
                pessoaData.documento,
                pessoaData.id
            )

        output.push(pessoa)

        }

        return output;
    }


    async getById(id: string): Promise<Pessoa> {
    
        const [ pessoaData ] = await this.connection.execute(`
            select id, nome, documento 
            from pessoas
            where id = $1`,
            [id]
        );
        
        if(!pessoaData){
            throw new Error('Pessoa não encontrada');
        }
        
        const pessoa = new Pessoa(
                pessoaData.nome,
                pessoaData.documento,
                pessoaData.id
        )

        return pessoa;
    }


    async create(pessoa: Pessoa): Promise<void> {
        await this.connection.execute(`
            insert into pessoas(id, nome, documento)
            values ($1, $2, $3)`,
            [pessoa.getID(), pessoa.getName(), pessoa.getDocumento()]);        
    }

    async update(pessoa: Pessoa): Promise<void> {
        await this.connection.execute(`
            update pessoas set
            nome = $1,
            documento = $2
            where id = $3`,
            [pessoa.getName(), pessoa.getDocumento(), pessoa.getID()]);        
    }

    async delete(id: string): Promise<void> {
        await this.connection.execute(`delete from pessoas where id = $1`, [id])
    }
}