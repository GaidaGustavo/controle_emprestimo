import { Emprestimo } from "../../../domain/entity/emprestimo";
import { Item } from "../../../domain/entity/item";
import { Pessoa } from "../../../domain/entity/pessoa";
import { TipoItem } from "../../../domain/entity/tipo-item";
import { Usuario } from "../../../domain/entity/usuario";
import { ItemEPI } from "../../../domain/entity/value-object/item-epi";
import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { Connection } from "../../config-database/connection";

export default class EmprestimoRepositoryDatabase implements EmprestimoRepository {
    constructor(private connection: Connection) {}

    async getAll(): Promise<Emprestimo[]> {
        try {
            const output: Emprestimo[] = [];
            const emprestimosData = await this.connection.execute(`
                SELECT e.id AS emprestimo_id, e.data_emprestimo, e.data_devolucao,
                    p.id AS pessoa_id, p.nome AS pessoa_nome, p.documento AS pessoa_documento,
                    u.id AS usuario_id, u.nome_usuario AS usuario_nome_usuario,
                    i.id AS item_id, i.nome AS item_nome,
                    ti.id AS tipo_item_id, ti.nome AS nome_tipoitem,
                    ie.ca AS item_epi_ca, ie.validade AS item_epi_validade
                FROM emprestimos e
                LEFT JOIN pessoas p ON e.pessoa_id = p.id
                LEFT JOIN usuarios u ON e.usuario_id = u.id
                LEFT JOIN itens i ON e.item_id = i.id
                LEFT JOIN tipos_item ti ON i.tipo_item_id = ti.id
                LEFT JOIN itens_epi ie ON i.id = ie.item_id;
            `);

            for (const emprestimoData of emprestimosData) {
                const pessoa = new Pessoa(emprestimoData.pessoa_nome, emprestimoData.pessoa_documento, emprestimoData.pessoa_id);
                const usuario = new Usuario(emprestimoData.usuario_nome_usuario, pessoa, emprestimoData.usuario_id);
                const itemEPI = new ItemEPI(emprestimoData.item_epi_ca, emprestimoData.item_epi_validade);
                const tipoItem = new TipoItem(emprestimoData.nome_tipoitem, emprestimoData.tipo_item_id);
                const item = new Item(emprestimoData.item_nome, tipoItem, emprestimoData.item_id, itemEPI);
                const emprestimo = new Emprestimo(item, pessoa, usuario, emprestimoData.data_emprestimo, emprestimoData.data_devolucao, emprestimoData.emprestimo_id);
                output.push(emprestimo);
            }

            return output;
        } catch (error) {
            throw new Error('Erro ao buscar empréstimos');
        }
    }

    async getById(id: string): Promise<Emprestimo> {
        try {
            const [emprestimoData] = await this.connection.execute(`
                SELECT e.id AS emprestimo_id, e.data_emprestimo, e.data_devolucao,
                    p.id AS pessoa_id, p.nome AS pessoa_nome, p.documento AS pessoa_documento,
                    u.id AS usuario_id, u.nome_usuario AS usuario_nome_usuario,
                    i.id AS item_id, i.nome AS item_nome,
                    ti.id AS tipo_item_id, ti.nome AS nome_tipoitem,
                    ie.ca AS item_epi_ca, ie.validade AS item_epi_validade
                FROM emprestimos e
                LEFT JOIN pessoas p ON e.pessoa_id = p.id
                LEFT JOIN usuarios u ON e.usuario_id = u.id
                LEFT JOIN itens i ON e.item_id = i.id
                LEFT JOIN tipos_item ti ON i.tipo_item_id = ti.id
                LEFT JOIN itens_epi ie ON i.id = ie.item_id
                WHERE e.id = $1;
            `, [id]);

            if (!emprestimoData) {
                throw new Error('Empréstimo não encontrado');
            }

            const pessoa = new Pessoa(emprestimoData.pessoa_nome, emprestimoData.pessoa_documento, emprestimoData.pessoa_id);
            const usuario = new Usuario(emprestimoData.usuario_nome_usuario, pessoa, emprestimoData.usuario_id);
            const itemEPI = new ItemEPI(emprestimoData.item_epi_ca, emprestimoData.item_epi_validade);
            const tipoItem = new TipoItem(emprestimoData.nome_tipoitem, emprestimoData.tipo_item_id);
            const item = new Item(emprestimoData.item_nome, tipoItem, emprestimoData.item_id, itemEPI);

            return new Emprestimo(item, pessoa, usuario, emprestimoData.data_emprestimo, emprestimoData.data_devolucao, emprestimoData.emprestimo_id);
        } catch (error) {
            throw new Error('Erro ao buscar o empréstimo');
        }
    }

    async create(emprestimo: Emprestimo): Promise<void> {
        try {
            await this.connection.execute(`
                INSERT INTO emprestimos (id, pessoa_id, usuario_id, item_id, data_emprestimo)
                VALUES ($1, $2, $3, $4, $5);
            `, [
                emprestimo.getID(),
                emprestimo.getPessoa().getID(),
                emprestimo.getUsuario().getID(),
                emprestimo.getItem().getID(),
                emprestimo.getdataEmprestimo()
            ]);
        } catch (error) {
            throw new Error('Erro ao criar empréstimo');
        }
    }

    async update(emprestimo: Emprestimo): Promise<void> {
        try {
            await this.connection.execute(`
                UPDATE emprestimos 
                SET pessoa_id = $1, usuario_id = $2, item_id = $3, data_emprestimo = $4, data_devolucao = $5
                WHERE id = $6;
            `, [
                emprestimo.getPessoa().getID(),
                emprestimo.getUsuario().getID(),
                emprestimo.getItem().getID(),
                emprestimo.getdataEmprestimo(),
                emprestimo.getdataDevolucao(),
                emprestimo.getID()
            ]);
        } catch (error) {
            throw new Error('Erro ao atualizar empréstimo');
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await this.connection.execute(`
                DELETE FROM emprestimos WHERE id = $1;
            `, [id]);
        } catch (error) {
            throw new Error('Erro ao excluir empréstimo');
        }
    }
}
