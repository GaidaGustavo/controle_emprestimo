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
exports.EmprestimoController = void 0;
const create_emprestimo_1 = require("../use-cases/create-emprestimo/create-emprestimo");
const delete_emprestimo_1 = require("../use-cases/delete-emprestimo/delete-emprestimo");
const get_all_emprestimos_1 = require("../use-cases/get-all-emprestimos/get-all-emprestimos");
const get_emprestimo_by_id_1 = require("../use-cases/get-emprestimo-by-id/get-emprestimo-by-id");
const update_emprestimo_1 = require("../use-cases/update-emprestimo/update-emprestimo");
class EmprestimoController {
    constructor(repositoryFactory) {
        this.repositoryFactory = repositoryFactory;
    }
    create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const createEmprestimoUseCase = new create_emprestimo_1.CreateEmprestimoUseCase(this.repositoryFactory);
            return yield createEmprestimoUseCase.execute(input);
        });
    }
    update(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateEmprestimoUseCase = new update_emprestimo_1.UpdateEmprestimoUseCase(this.repositoryFactory);
            return yield updateEmprestimoUseCase.execute(input);
        });
    }
    getAll(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllEmprestimoUseCase = new get_all_emprestimos_1.GetAllEmprestimosUseCase(this.repositoryFactory);
            return yield getAllEmprestimoUseCase.execute(input);
        });
    }
    getById(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const getEmprestimoByIdUseCase = new get_emprestimo_by_id_1.GetEmprestimoByIdUseCase(this.repositoryFactory);
            return yield getEmprestimoByIdUseCase.execute(input);
        });
    }
    delete(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteEmprestimoUseCase = new delete_emprestimo_1.DeleteEmprestimoUseCase(this.repositoryFactory);
            return yield deleteEmprestimoUseCase.execute(input);
        });
    }
}
exports.EmprestimoController = EmprestimoController;
