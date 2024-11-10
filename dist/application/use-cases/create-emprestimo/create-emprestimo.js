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
exports.CreateEmprestimoUseCase = void 0;
const emprestimo_1 = require("../../../domain/entity/emprestimo");
class CreateEmprestimoUseCase {
    constructor(repositoryFactory) {
        this.repositoryFactory = repositoryFactory;
        this.itemRepository = repositoryFactory.createItemRepository();
        this.pessoaRepository = repositoryFactory.createPessoaRepository();
        this.usuarioRepository = repositoryFactory.createUsuarioRepository();
        this.emprestimoRepository = repositoryFactory.createEmprestimoRepository();
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.itemRepository.getById(input.itemId);
            const pessoa = yield this.pessoaRepository.getById(input.pessoaId);
            const usuario = yield this.usuarioRepository.getById(input.usuarioId);
            const emprestimo = new emprestimo_1.Emprestimo(item, pessoa, usuario);
            yield this.emprestimoRepository.create(emprestimo);
            return {};
        });
    }
}
exports.CreateEmprestimoUseCase = CreateEmprestimoUseCase;
