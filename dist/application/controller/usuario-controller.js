"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const create_usuario_1 = require("../use-cases/create-usuario/create-usuario");
const get_all_usuarios_1 = require("../use-cases/get-all-usuarios/get-all-usuarios");
const get_usuario_by_id_1 = require("../use-cases/get-usuario-by-id/get-usuario-by-id");
const update_usuario_1 = require("../use-cases/update-usuario/update-usuario");
class UsuarioController {
    constructor(usuarioRepository, pessoaRepository) {
        this.usuarioRepository = usuarioRepository;
        this.pessoaRepository = pessoaRepository;
    }
    create(input) {
        const createUsuarioUseCase = new create_usuario_1.CreateUsuarioUseCase(this.usuarioRepository, this.pessoaRepository);
        return createUsuarioUseCase.execute(input);
    }
    update(input) {
        const updateUsuarioUseCase = new update_usuario_1.UpdateUsuarioUseCase(this.usuarioRepository);
        return updateUsuarioUseCase.execute(input);
    }
    getAll(input) {
        const getAllUsuarioUseCase = new get_all_usuarios_1.GetAllUsuariosUseCase(this.usuarioRepository);
        return getAllUsuarioUseCase.execute(input);
    }
    getById(input) {
        const getUsuarioByIdUseCase = new get_usuario_by_id_1.GetUsuarioByIdUseCase(this.usuarioRepository);
        return getUsuarioByIdUseCase.execute(input);
    }
}
exports.UsuarioController = UsuarioController;
