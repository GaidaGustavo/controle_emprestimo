import { EmprestimoRepository } from "../../domain/repository/emprestimo-repository";
import { ItemRepository } from "../../domain/repository/item-repository";
import { PessoaRepository } from "../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { TipoItemRepository } from "../../domain/repository/tipoitem-repository";
import { UsuarioRepository } from "../../domain/repository/usuario-repository";
import EmprestimoRepositoryDatabase from "../repository/database/emprestimo-repository-database";
import ItemRepositoryDatabase from "../repository/database/item-repository-database";
import PessoaRepositoryDatabase from "../repository/database/pessoa-repository-database";
import TipoItemRepositoryDatabase from "../repository/database/tipo-item-repository-database";
import UsuarioRepositoryDatabase from "../repository/database/usuario-repository-database";
import { Connection } from "./connection";

export class DatabaseRepositoryFactory implements RepositoryFactory{
    constructor(private connection: Connection) {
    }
    createItemRepository(): ItemRepository {
        return new ItemRepositoryDatabase(this.connection);
    }
    createTipoItemRepository(): TipoItemRepository {
        return new TipoItemRepositoryDatabase(this.connection);
    }
    createPessoaRepository(): PessoaRepository {
        return new PessoaRepositoryDatabase(this.connection);
    }
    createUsuarioRepository(): UsuarioRepository {
        return new UsuarioRepositoryDatabase(this.connection);
    }
    createEmprestimoRepository(): EmprestimoRepository {
        return new EmprestimoRepositoryDatabase(this.connection);
    }

}