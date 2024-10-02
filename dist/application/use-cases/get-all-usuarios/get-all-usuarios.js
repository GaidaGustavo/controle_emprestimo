"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsuariosUseCase = void 0;
class GetAllUsuariosUseCase {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    execute(input) {
        const usuarios = this.usuarioRepository.getAll();
        const output = [];
        for (const usuario of usuarios) {
            output.push({
                id: usuario.getID(),
                nome: usuario.getName(),
                senha: usuario.getSenha(),
                pessoa: {
                    id: usuario.getPessoa().getID(),
                    nome: usuario.getPessoa().getName(),
                },
            });
        }
        return output;
    }
}
exports.GetAllUsuariosUseCase = GetAllUsuariosUseCase;
