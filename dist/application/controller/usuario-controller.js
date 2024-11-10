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
exports.UsuarioController = void 0;
const create_usuario_1 = require("../use-cases/create-usuario/create-usuario");
const delete_usuario_1 = require("../use-cases/delete-usuario/delete-usuario");
const get_all_usuarios_1 = require("../use-cases/get-all-usuarios/get-all-usuarios");
const get_usuario_by_id_1 = require("../use-cases/get-usuario-by-id/get-usuario-by-id");
const update_usuario_1 = require("../use-cases/update-usuario/update-usuario");
class UsuarioController {
    constructor(repositoryFactory) {
        this.repositoryFactory = repositoryFactory;
    }
    create(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const createUsuarioUseCase = new create_usuario_1.CreateUsuarioUseCase(this.repositoryFactory);
            return yield createUsuarioUseCase.execute(input);
        });
    }
    update(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateUsuarioUseCase = new update_usuario_1.UpdateUsuarioUseCase(this.repositoryFactory);
            return yield updateUsuarioUseCase.execute(input);
        });
    }
    getAll(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const getAllUsuarioUseCase = new get_all_usuarios_1.GetAllUsuariosUseCase(this.repositoryFactory);
            return yield getAllUsuarioUseCase.execute(input);
        });
    }
    getById(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const getUsuarioByIdUseCase = new get_usuario_by_id_1.GetUsuarioByIdUseCase(this.repositoryFactory);
            return yield getUsuarioByIdUseCase.execute(input);
        });
    }
    delete(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteUsuarioUseCase = new delete_usuario_1.DeleteUsuarioUseCase(this.repositoryFactory);
            return yield deleteUsuarioUseCase.execute(input);
        });
    }
}
exports.UsuarioController = UsuarioController;
