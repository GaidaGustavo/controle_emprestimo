import { EmprestimoRepository } from "./emprestimo-repository";
import { ItemRepository } from "./item-repository";
import { PessoaRepository } from "./pessoa-repository";
import { TipoItemRepository } from "./tipoitem-repository";
import { UsuarioRepository } from "./usuario-repository";

export interface RepositoryFactory {
    createItemRepository(): ItemRepository 
    createTipoItemRepository(): TipoItemRepository
    createPessoaRepository(): PessoaRepository 
    createUsuarioRepository(): UsuarioRepository 
    createEmprestimoRepository(): EmprestimoRepository 
}