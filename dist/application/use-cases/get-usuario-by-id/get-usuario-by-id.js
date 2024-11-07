"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsuarioByIdUseCase = void 0;
class GetUsuarioByIdUseCase {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    execute(input) {
        const usuario = this.usuarioRepository.getById(input.id);
        const output = {
            id: usuario.getID(),
            nome: usuario.getName(),
            pessoa: {
                id: usuario.getPessoa().getID(),
                nome: usuario.getPessoa().getName(),
            },
        };
        return output;
    }
}
exports.GetUsuarioByIdUseCase = GetUsuarioByIdUseCase;
