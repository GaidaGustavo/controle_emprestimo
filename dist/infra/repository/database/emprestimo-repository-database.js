"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const emprestimo_1 = require("../../../domain/entity/emprestimo");
const item_1 = require("../../../domain/entity/item");
const pessoa_1 = require("../../../domain/entity/pessoa");
const tipo_item_1 = require("../../../domain/entity/tipo-item");
const usuario_1 = require("../../../domain/entity/usuario");
class EmprestimoRepositoryDatabase {
    constructor(connection) {
        this.connection = connection;
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const output = [];
            const emprestimosData = yield this.connection.execute(`
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
                const pessoa = new pessoa_1.Pessoa(emprestimoData.pessoa_nome, emprestimoData.pessoa_documento, emprestimoData.id_pessoa);
                const usuario = new usuario_1.Usuario(emprestimoData.usuario_id, pessoa, emprestimoData.usuario_nome_usuario);
                const tipoItem = new tipo_item_1.TipoItem(emprestimoData.nome_tipoitem, emprestimoData.tipo_item_id);
                const item = new item_1.Item(emprestimoData.item_nome, tipoItem, emprestimoData.item_id);
                const emprestimo = new emprestimo_1.Emprestimo(item, pessoa, usuario, emprestimoData.data_emprestimo, emprestimoData.data_devolucao);
                output.push(emprestimo);
            }
            return output;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [emprestimoData] = yield this.connection.execute(`
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
            where e.id = $1;`[id]);
            if (!emprestimoData) {
                throw new Error('Empréstimo não encontrado');
            }
            const pessoa = new pessoa_1.Pessoa(emprestimoData.pessoa_nome, emprestimoData.pessoa_documento, emprestimoData.pessoa_id);
            const usuario = new usuario_1.Usuario(emprestimoData.usuario_id, pessoa, emprestimoData.usuario_nome_usuario);
            const tipoItem = new tipo_item_1.TipoItem(emprestimoData.nome_tipoitem, emprestimoData.tipo_item_id);
            const item = new item_1.Item(emprestimoData.item_nome, tipoItem, emprestimoData.item_id);
            const emprestimo = new emprestimo_1.Emprestimo(item, pessoa, usuario, emprestimoData.data_emprestimo, emprestimoData.data_devolucao);
            return emprestimo;
        });
    }
    create(emprestimo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute(`
            insert into emprestimos(id, pessoa_id, usuario_id, item_id, data_emprestimo, data_devolucao)
            values ($1, $2, $3, $4, $5, $6)`, [emprestimo.getID, emprestimo.getPessoa().getID(),
                emprestimo.getUsuario().getID(), emprestimo.getItem().getID,
                emprestimo.getdataEmprestimo, emprestimo.getdataDevolucao]);
        });
    }
    update(emprestimo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.execute(`
            update emprestimos set
            pessoa_id = $1,
            usuario_id = $2,
            item_id = $3,
            data_emprestimo = $4,
            data_devolucao = $5
            wheere id = $6;
            `, [emprestimo.getPessoa().getID(), emprestimo.getUsuario().getID(),
                emprestimo.getItem().getID, emprestimo.getdataEmprestimo,
                emprestimo.getdataDevolucao, emprestimo.getID]);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Method not implemented.");
        });
    }
}
exports.default = EmprestimoRepositoryDatabase;
