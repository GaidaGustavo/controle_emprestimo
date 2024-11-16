import { Emprestimo } from "../../../domain/entity/emprestimo";
import { Item } from "../../../domain/entity/item";
import { Pessoa } from "../../../domain/entity/pessoa";
import { TipoItem } from "../../../domain/entity/tipo-item";
import { Usuario } from "../../../domain/entity/usuario";
import { ItemEPI } from "../../../domain/entity/value-object/item-epi";
import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { Connection } from "../../config-database/connection";


export default class EmprestimoRepositoryDatabase implements EmprestimoRepository{
    constructor(private connection: Connection){
    }
    
    async getAll(): Promise<Emprestimo[]> {
        const output: Emprestimo[] = [];
        const emprestimosData = await this.connection.execute(`
            SELECT 
    e.id AS emprestimo_id, 
    e.data_emprestimo, 
    e.data_devolucao,
    p.id AS pessoa_id, 
    p.nome AS pessoa_nome, 
    p.documento AS pessoa_documento,
    u.id AS usuario_id, 
    u.nome_usuario AS usuario_nome_usuario,
    i.id AS item_id, 
    i.nome AS item_nome,
    ti.id AS tipo_item_id, 
    ti.nome AS nome_tipoitem,
    ie.ca AS item_epi_ca, 
    ie.validade AS item_epi_validade
FROM 
    emprestimos e
LEFT JOIN 
    pessoas p ON e.pessoa_id = p.id
LEFT JOIN 
    usuarios u ON e.usuario_id = u.id
LEFT JOIN 
    itens i ON e.item_id = i.id
LEFT JOIN 
    tipos_item ti ON i.tipo_item_id = ti.id
LEFT JOIN 
    itens_epi ie ON i.id = ie.item_id;

        `);
    
        for (const emprestimoData of emprestimosData) {
            const pessoa = new Pessoa(
                emprestimoData.pessoa_nome,
                emprestimoData.pessoa_documento,
                emprestimoData.id_pessoa
        )
    
            const usuario = new Usuario(
                emprestimoData.usuario_nome_usuario,
                pessoa,
                emprestimoData.usuario_id,
            );
            
            const itemEPI = new ItemEPI(
                emprestimoData.item_epi_ca,
                emprestimoData.item_epi_validade
            );
    
            const tipoItem = new TipoItem(
                emprestimoData.nome_tipoitem,
                emprestimoData.tipo_item_id
            );
    
            const item = new Item(
                emprestimoData.item_nome,
                tipoItem,
                emprestimoData.item_id,
                itemEPI
            );
    
            const emprestimo = new Emprestimo(
                item,
                pessoa,
                usuario,
                emprestimoData.emprestimo_id,
                emprestimoData.data_devolucao,
                emprestimoData.data_emprestimo,
            );
    
            output.push(emprestimo);
        }
    
        return output;
    }
    


    async getById(id: string): Promise<Emprestimo> {

        const [ emprestimoData ] = await this.connection.execute(`
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
            where e.id = $1;`,
            [id]
            );

        if(!emprestimoData){
            throw new Error('Empréstimo não encontrado');
        }
    
            const pessoa = new Pessoa(
                emprestimoData.pessoa_nome,
                emprestimoData.pessoa_documento,
                emprestimoData.pessoa_id
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
                pessoa,
                usuario,
                emprestimoData.data_emprestimo,
                emprestimoData.data_devolucao,
            );
    
        return emprestimo;
    }


    async create(emprestimo: Emprestimo): Promise<void> {
        await this.connection.execute(`
            insert into emprestimos(id, pessoa_id, usuario_id, item_id, data_emprestimo)
            values ($1, $2, $3, $4, $5)`,
            [
                emprestimo.getID(),
                emprestimo.getPessoa().getID(),
                emprestimo.getUsuario().getID(),
                emprestimo.getItem().getID(), // Adicione os parênteses após getID
                emprestimo.getdataEmprestimo()
            ]
        );        
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
            emprestimo.getdataDevolucao, emprestimo.getID]);        
    }

    async delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}