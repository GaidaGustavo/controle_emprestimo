"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmprestimoUseCase = void 0;
const emprestimo_1 = require("../../../domain/entity/emprestimo");
class CreateEmprestimoUseCase {
    constructor(emprestimoRespository, itemRepository, pessoaRepository, usuarioRepository) {
        this.emprestimoRespository = emprestimoRespository;
        this.itemRepository = itemRepository;
        this.pessoaRepository = pessoaRepository;
        this.usuarioRepository = usuarioRepository;
    }
    execute(input) {
        const item = this.itemRepository.getById(input.itemId);
        const pessoa = this.pessoaRepository.getById(input.pessoaId);
        const usuario = this.usuarioRepository.getById(input.usuarioId);
        const emprestimo = new emprestimo_1.Emprestimo(item, pessoa, usuario);
        this.emprestimoRespository.create(emprestimo);
        return {};
    }
}
exports.CreateEmprestimoUseCase = CreateEmprestimoUseCase;
