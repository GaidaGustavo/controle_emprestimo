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
exports.GetAllUsuariosUseCase = void 0;
class GetAllUsuariosUseCase {
    constructor(repositoryFactory) {
        this.repositoryFactory = repositoryFactory;
        this.usuarioRepository = repositoryFactory.createUsuarioRepository();
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield this.usuarioRepository.getAll();
            const output = [];
            for (const usuario of usuarios) {
                output.push({
                    id: usuario.getID(),
                    nome: usuario.getName(),
                    senha: usuario.getSenha(),
                    pessoa: {
                        id: usuario.getPessoa().getID(),
                        nome: usuario.getPessoa().getName(),
                        documento: usuario.getPessoa().getDocumento()
                    },
                });
            }
            return output;
        });
    }
}
exports.GetAllUsuariosUseCase = GetAllUsuariosUseCase;
