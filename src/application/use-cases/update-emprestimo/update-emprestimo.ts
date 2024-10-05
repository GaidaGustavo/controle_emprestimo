import { Emprestimo } from "../../../domain/entity/emprestimo";
import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { UpdateEmprestimoInput } from "./update-emprestimo-input";
import { UpdateEmprestimoOutput } from "./update-emprestimo-output";

export class UpdateEmprestimoUseCase {
    constructor(private readonly emprestimoRepository: EmprestimoRepository,
                private readonly itemRepository: ItemRepository,
                private readonly pessoaRepository: PessoaRepository,
                private readonly usuarioRepository: UsuarioRepository
    ) {}
    
    execute(input: UpdateEmprestimoInput): UpdateEmprestimoOutput {
        const item = this.itemRepository.getById(input.itemId);
        const pessoa = this.pessoaRepository.getById(input.pessoaId);
        const usuario = this.usuarioRepository.getById(input.usuarioId);
        const newEmprestimo = new Emprestimo(item, pessoa, usuario, input.id, input.dataDevolução)
        this.emprestimoRepository.update(newEmprestimo)
        return {}
    }
}