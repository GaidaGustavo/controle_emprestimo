import { Emprestimo } from "../../../domain/entity/emprestimo";
import { Item } from "../../../domain/entity/item";
import { Pessoa } from "../../../domain/entity/pessoa";
import { TipoItem } from "../../../domain/entity/tipoitem";
import { Usuario } from "../../../domain/entity/usuario";
import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";


export default class EmprestimoRepositoryPostgres implements EmprestimoRepository{
    constructor(private connection: Connection){
    }
    
    async getAll(): Promise<Emprestimo[]> {
        const output: Emprestimo[] = [];
        const emprestimosData = await this.connection.execute(`
            select e.id as emprestimo_id, e.data_emprestimo, e.data_devolucao,
            p.id as pessoa_id, p.nome as pessoa_nome, p.documento as pessoa_documento,
            u.id as usuario_id, u.nome_usuario as usuario_nome_usuario,
            i.id as item_id, i.nome as item_nome,
            ti.id as tipo_item_id, ti.nome as nome_tipoitem
            from emprestimos e
            left join pessoas p on e.pessoa_id = p.id
            left join usuarios u on e.usuario_id = u.id
            left join itens i on e.item_id = i.id
            left join tipos_item ti on i.tipo_item_id = ti.id;
        `);
    
        for (const emprestimoData of emprestimosData) {
            const pessoa = new Pessoa(
                emprestimoData.nome,
                emprestimoData.documento,
                emprestimoData.id
        )
    
            const usuario = new Usuario(
                emprestimoData.usuario_id,
                pessoa,
                emprestimoData.usuario_nome_usuario
            );
    
            const tipoItem = new TipoItem(
                emprestimoData.nome_tipoitem,
                emprestimoData.tipo_item_id
            );
    
            const item = new Item(
                emprestimoData.item_nome,
                tipoItem,
                emprestimoData.item_id
            );
    
            const emprestimo = new Emprestimo(
                item,
                emprestimoData.data_emprestimo,
                emprestimoData.data_devolucao,
                pessoa,
                usuario
            );
    
            output.push(emprestimo);
        }
    
        return output;
    }
    


    async getById(id: string): Promise<Emprestimo> {

        const emprestimoData = await this.connection.execute(`
            select e.id as emprestimo_id, e.data_emprestimo, e.data_devolucao,
            p.id as pessoa_id, p.nome as pessoa_nome, p.documento as pessoa_documento,
            u.id as usuario_id, u.nome_usuario as usuario_nome_usuario,
            i.id as item_id, i.nome as item_nome,
            ti.id as tipo_item_id, ti.nome as nome_tipoitem
            from emprestimos e
            left join pessoas p on e.pessoa_id = p.id
            left join usuarios u on e.usuario_id = u.id
            left join itens i on e.item_id = i.id
            left join tipos_item ti on i.tipo_item_id = ti.id
            where e.id = $1;`
            [id]
            );
    
            const pessoa = new Pessoa(
                emprestimoData.nome,
                emprestimoData.documento,
                emprestimoData.id
        )
    
            const usuario = new Usuario(
                emprestimoData.usuario_id,
                pessoa,
                emprestimoData.usuario_nome_usuario
            );
    
            const tipoItem = new TipoItem(
                emprestimoData.nome_tipoitem,
                emprestimoData.tipo_item_id
            );
    
            const item = new Item(
                emprestimoData.item_nome,
                tipoItem,
                emprestimoData.item_id
            );
    
            const emprestimo = new Emprestimo(
                item,
                emprestimoData.data_emprestimo,
                emprestimoData.data_devolucao,
                pessoa,
                usuario
            );
    
        return emprestimo;
    }


    async create(emprestimo: Emprestimo): Promise<void> {
        await this.connection.execute(`
            insert into emprestimos(id, pessoa_id, usuario_id, item_id, data_emprestimo, data_devolucao)
            values ($1, $2, $3, $4, $5, $6)`,
            [emprestimo.getID, emprestimo.getPessoa().getID(),
            emprestimo.getUsuario().getID(), emprestimo.getItem().getID,
            emprestimo.getdataEmprestimo, emprestimo.getdataDevolucao]);        
    }


    async update(emprestimo: Emprestimo): Promise<void> {
        await this.connection.execute(`
            update emprestimos set
            pessoa_id = $1,
            usuario_id = $2,
            item_id = $3,
            data_emprestimo = $4,
            data_devolucao = $5
            wheere id = $6;
            `,
            [emprestimo.getPessoa().getID(), emprestimo.getUsuario().getID(),
            emprestimo.getItem().getID, emprestimo.getdataEmprestimo,
            emprestimo.getdataDevolucao], emprestimo.getID);        
    }

    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}