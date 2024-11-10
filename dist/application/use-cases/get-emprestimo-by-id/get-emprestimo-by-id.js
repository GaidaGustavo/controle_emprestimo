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
exports.GetEmprestimoByIdUseCase = void 0;
class GetEmprestimoByIdUseCase {
    constructor(repositoryFactory) {
        this.repositoryFactory = repositoryFactory;
        this.emprestimoRepository = repositoryFactory.createEmprestimoRepository();
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const emprestimo = yield this.emprestimoRepository.getById(input.id);
            const output = {
                id: emprestimo.getID(),
                item: {
                    id: emprestimo.getItem().getID(),
                    nome: emprestimo.getItem().getName(),
                    itemEPI: emprestimo.getItem().getItemEPI(),
                    tipoItem: {
                        id: emprestimo.getItem().getTipoItem().getID(),
                        nome: emprestimo.getItem().getTipoItem().getName(),
                    },
                },
                dataEmprestimo: emprestimo.getdataEmprestimo(),
                dataDevolucao: emprestimo.getdataDevolucao(),
                pessoa: {
                    id: emprestimo.getPessoa().getID(),
                    nome: emprestimo.getPessoa().getName(),
                    documento: emprestimo.getPessoa().getDocumento(),
                },
                usuario: {
                    id: emprestimo.getUsuario().getID(),
                    username: emprestimo.getUsuario().getName(),
                    senha: emprestimo.getUsuario().getSenha(),
                    pessoa: {
                        id: emprestimo.getUsuario().getPessoa().getID(),
                        nome: emprestimo.getUsuario().getPessoa().getName(),
                        documento: emprestimo.getUsuario().getPessoa().getDocumento()
                    }
                }
            };
            return output;
        });
    }
}
exports.GetEmprestimoByIdUseCase = GetEmprestimoByIdUseCase;
