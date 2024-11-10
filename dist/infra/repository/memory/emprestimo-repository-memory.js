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
const tipoitem_1 = require("../../../domain/entity/tipoitem");
const usuario_1 = require("../../../domain/entity/usuario");
class EmprestimoRepositoryMemory {
    constructor() {
        const tipoItem = new tipoitem_1.TipoItem('Copos', '4694690b-d32a-4050-86a9-041a90765e7f');
        const item = new item_1.Item('Copo de Café', tipoItem, 'eb51e356-16c1-4b1e-bfea-aadc07a2c60c');
        const pessoa = new pessoa_1.Pessoa('Jacson Santos', '2151eb0d-642a-4224-8229-aefd5832ad85');
        const usuario = new usuario_1.Usuario('jacson_santos', pessoa, '7e461e53-0793-4ba3-8c34-dc5f45481b31', '123');
        const date = new Date();
        this.emprestimos = [
            new emprestimo_1.Emprestimo(item, pessoa, usuario, '7bb91674-3f3c-4f86-923e-dd1f266dfca4', date)
        ];
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.emprestimos = yield this.emprestimos.filter(value => value.getID() !== id);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.emprestimos;
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const emprestimo = yield this.emprestimos.find(valor => valor.getID() == id);
            if (!emprestimo) {
                throw new Error('User not Found');
            }
            return emprestimo;
        });
    }
    create(emprestimo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.emprestimos.push(emprestimo);
        });
    }
    update(emprestimo) {
        return __awaiter(this, void 0, void 0, function* () {
            const emprestimoAntigo = yield this.emprestimos.findIndex(value => value.getID() == emprestimo.getID());
            this.emprestimos[emprestimoAntigo] = emprestimo;
        });
    }
}
exports.default = EmprestimoRepositoryMemory;
