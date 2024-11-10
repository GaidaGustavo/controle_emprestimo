import { EmprestimoRepository } from "../../domain/repository/emprestimo-repository";
import { ItemRepository } from "../../domain/repository/item-repository";
import { PessoaRepository } from "../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { TipoItemRepository } from "../../domain/repository/tipoitem-repository";
import { UsuarioRepository } from "../../domain/repository/usuario-repository";
import EmprestimoRepositoryMemory from "../repository/memory/emprestimo-repository-memory";
import { ItemRepositoryMemory } from "../repository/memory/item-repository-memory";
import { PessoaRepositoryMemory } from "../repository/memory/pessoa-repository-memory";
import { TipoItemRepositoryMemory } from "../repository/memory/tipo-item-repository-memory";
import UsuarioRepositoryMemory from "../repository/memory/usuario-repository-memory";

export class MemoryRepositoryFactory implements RepositoryFactory{
    createItemRepository(): ItemRepository {
        return new ItemRepositoryMemory();
    }
    createTipoItemRepository(): TipoItemRepository {
        return new TipoItemRepositoryMemory();
    }
    createPessoaRepository(): PessoaRepository {
        return new PessoaRepositoryMemory();
    }
    createUsuarioRepository(): UsuarioRepository {
        return new UsuarioRepositoryMemory();
    }
    createEmprestimoRepository(): EmprestimoRepository {
        return new EmprestimoRepositoryMemory();
    }

}