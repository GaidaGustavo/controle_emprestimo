"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaController = void 0;
const create_pessoa_1 = require("../use-cases/create-pessoa/create-pessoa");
const get_all_pessoas_1 = require("../use-cases/get-all-pessoas/get-all-pessoas");
const get_pessoa_by_id_1 = require("../use-cases/get-pessoa-by-id/get-pessoa-by-id");
const update_pessoa_1 = require("../use-cases/update-pessoa/update-pessoa");
class PessoaController {
    constructor(pessoaRepository) {
        this.pessoaRepository = pessoaRepository;
    }
    create(input) {
        const createPessoaUseCase = new create_pessoa_1.CreatePessoaUseCase(this.pessoaRepository);
        createPessoaUseCase.execute(input);
    }
    update(input) {
        const updatePessoaUseCase = new update_pessoa_1.UpdatePessoaUseCase(this.pessoaRepository);
        updatePessoaUseCase.execute(input);
    }
    getAll(input) {
        const getAllPessoasUseCase = new get_all_pessoas_1.GetAllPessoasUseCase(this.pessoaRepository);
        getAllPessoasUseCase.execute(input);
    }
    getById(input) {
        const getPessoaByIdUseCase = new get_pessoa_by_id_1.GetPessoaByIdUseCase(this.pessoaRepository);
        getPessoaByIdUseCase.execute(input);
    }
}
exports.PessoaController = PessoaController;
