"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const create_usuario_1 = require("../use-cases/create-usuario/create-usuario");
const get_all_usuarios_1 = require("../use-cases/get-all-usuarios/get-all-usuarios");
const get_usuario_by_id_1 = require("../use-cases/get-usuario-by-id/get-usuario-by-id");
const update_usuario_1 = require("../use-cases/update-usuario/update-usuario");
class UsuarioController {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    create(input) {
        const createUsuarioUseCase = new create_usuario_1.CreateUsuarioUseCase(this.usuarioRepository);
        createUsuarioUseCase.execute(input);
    }
    update(input) {
        const updateUsuarioUseCase = new update_usuario_1.UpdateUsuarioUseCase(this.usuarioRepository);
        updateUsuarioUseCase.execute(input);
    }
    getAll(input) {
        const getAllUsuarioUseCase = new get_all_usuarios_1.GetAllUsuariosUseCase(this.usuarioRepository);
        getAllUsuarioUseCase.execute(input);
    }
    getById(input) {
        const getUsuarioByIdUseCase = new get_usuario_by_id_1.GetUsuarioByIdUseCase(this.usuarioRepository);
        getUsuarioByIdUseCase.execute(input);
    }
}
exports.UsuarioController = UsuarioController;
