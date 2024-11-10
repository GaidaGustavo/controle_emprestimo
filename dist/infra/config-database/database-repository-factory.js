"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseRepositoryFactory = void 0;
const emprestimo_repository_database_1 = __importDefault(require("../repository/database/emprestimo-repository-database"));
const item_repository_database_1 = __importDefault(require("../repository/database/item-repository-database"));
const pessoa_repository_database_1 = __importDefault(require("../repository/database/pessoa-repository-database"));
const tipo_item_repository_database_1 = __importDefault(require("../repository/database/tipo-item-repository-database"));
const usuario_repository_database_1 = __importDefault(require("../repository/database/usuario-repository-database"));
class DatabaseRepositoryFactory {
    constructor(connection) {
        this.connection = connection;
    }
    createItemRepository() {
        return new item_repository_database_1.default(this.connection);
    }
    createTipoItemRepository() {
        return new tipo_item_repository_database_1.default(this.connection);
    }
    createPessoaRepository() {
        return new pessoa_repository_database_1.default(this.connection);
    }
    createUsuarioRepository() {
        return new usuario_repository_database_1.default(this.connection);
    }
    createEmprestimoRepository() {
        return new emprestimo_repository_database_1.default(this.connection);
    }
}
exports.DatabaseRepositoryFactory = DatabaseRepositoryFactory;
