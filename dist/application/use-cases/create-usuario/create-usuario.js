"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsuarioUseCase = void 0;
const usuario_1 = require("../../../domain/entity/usuario");
class CreateUsuarioUseCase {
    constructor(usuarioRepository, pessoaRepository) {
        this.usuarioRepository = usuarioRepository;
        this.pessoaRepository = pessoaRepository;
    }
    execute(input) {
        const pessoa = this.pessoaRepository.getById(input.pessoaId);
        const usuario = new usuario_1.Usuario(input.username, pessoa, input.id, input.senha);
        this.usuarioRepository.create(usuario);
        return {};
    }
}
exports.CreateUsuarioUseCase = CreateUsuarioUseCase;
