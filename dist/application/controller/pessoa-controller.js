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
exports.PessoaController = void 0;
const create_pessoa_1 = require("../use-cases/create-pessoa/create-pessoa");
const delete_pessoa_1 = require("../use-cases/delete-pessoa/delete-pessoa");
const get_all_pessoas_1 = require("../use-cases/get-all-pessoas/get-all-pessoas");
const get_pessoa_by_id_1 = require("../use-cases/get-pessoa-by-id/get-pessoa-by-id");
const update_pessoa_1 = require("../use-cases/update-pessoa/update-pessoa");
class PessoaController {
    constructor(repositoryFactory) {
        this.repositoryFactory = repositoryFactory;
    }
    create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const createPessoaUseCase = new create_pessoa_1.CreatePessoaUseCase(this.repositoryFactory);
            return yield createPessoaUseCase.execute(input);
        });
    }
    update(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatePessoaUseCase = new update_pessoa_1.UpdatePessoaUseCase(this.repositoryFactory);
            return yield updatePessoaUseCase.execute(input);
        });
    }
    getAll(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllPessoasUseCase = new get_all_pessoas_1.GetAllPessoasUseCase(this.repositoryFactory);
            return yield getAllPessoasUseCase.execute(input);
        });
    }
    getById(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const getPessoaByIdUseCase = new get_pessoa_by_id_1.GetPessoaByIdUseCase(this.repositoryFactory);
            return yield getPessoaByIdUseCase.execute(input);
        });
    }
    delete(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletePessoaUseCase = new delete_pessoa_1.DeletePessoaUseCase(this.repositoryFactory);
            return yield deletePessoaUseCase.execute(input);
        });
    }
}
exports.PessoaController = PessoaController;
