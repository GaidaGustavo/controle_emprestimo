"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmprestimoController = void 0;
const create_emprestimo_1 = require("../use-cases/create-emprestimo/create-emprestimo");
const get_all_emprestimos_1 = require("../use-cases/get-all-emprestimos/get-all-emprestimos");
const get_emprestimo_by_id_1 = require("../use-cases/get-emprestimo-by-id/get-emprestimo-by-id");
const update_emprestimo_1 = require("../use-cases/update-emprestimo/update-emprestimo");
class EmprestimoController {
    constructor(emprestimoRepository) {
        this.emprestimoRepository = emprestimoRepository;
    }
    create(input) {
        const createEmprestimoUseCase = new create_emprestimo_1.CreateEmprestimoUseCase(this.emprestimoRepository);
        createEmprestimoUseCase.execute(input);
    }
    update(input) {
        const updateEmprestimoUseCase = new update_emprestimo_1.UpdateEmprestimoUseCase(this.emprestimoRepository);
        updateEmprestimoUseCase.execute(input);
    }
    getAll(input) {
        const getAllEmprestimoUseCase = new get_all_emprestimos_1.GetAllEmprestimosUseCase(this.emprestimoRepository);
        getAllEmprestimoUseCase.execute(input);
    }
    getById(input) {
        const getEmprestimoByIdUseCase = new get_emprestimo_by_id_1.GetEmprestimoByIdUseCase(this.emprestimoRepository);
        getEmprestimoByIdUseCase.execute(input);
    }
}
exports.EmprestimoController = EmprestimoController;
