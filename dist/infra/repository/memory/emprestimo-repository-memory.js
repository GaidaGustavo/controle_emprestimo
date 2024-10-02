"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emprestimo_1 = require("../../../domain/entity/emprestimo");
const item_1 = require("../../../domain/entity/item");
const pessoa_1 = require("../../../domain/entity/pessoa");
const tipoitem_1 = require("../../../domain/entity/tipoitem");
const usuario_1 = require("../../../domain/entity/usuario");
class EmprestimoRepositoryMemory {
    constructor() {
        const tipoItem = new tipoitem_1.TipoItem('Copos', '4694690b-d32a-4050-86a9-041a90765e7f');
        const item = new item_1.Item('Copo de Café', tipoItem, 'eb51e356-16c1-4b1e-bfea-aadc07a2c60c');
        const pessoa = new pessoa_1.Pessoa('Jacson Santos', '2151eb0d-642a-4224-8229-aefd5832ad85');
        const usuario = new usuario_1.Usuario('jacson_santos', pessoa, '123', '7e461e53-0793-4ba3-8c34-dc5f45481b31');
        const date = new Date();
        // padrão para date >> '2024-10-01T21:40:20'
        this.emprestimos = [
            new emprestimo_1.Emprestimo(item, pessoa, usuario, '7bb91674-3f3c-4f86-923e-dd1f266dfca4', date)
        ];
    }
    getAll() {
        return this.emprestimos;
    }
    getById(id) {
        throw new Error("Method not implemented.");
    }
    create(emprestimo) {
        this.emprestimos.push(emprestimo);
    }
    update(emprestimo) {
        throw new Error("Method not implemented.");
    }
}
exports.default = EmprestimoRepositoryMemory;
