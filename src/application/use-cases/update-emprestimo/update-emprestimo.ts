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
    
    async execute(input: UpdateEmprestimoInput): Promise<UpdateEmprestimoOutput> {
        const item = await this.itemRepository.getById(input.itemId);
        const pessoa = await this.pessoaRepository.getById(input.pessoaId);
        const usuario = await this.usuarioRepository.getById(input.usuarioId);
        const newEmprestimo = new Emprestimo(item, pessoa, usuario, input.id, input.dataDevolução)
        await this.emprestimoRepository.update(newEmprestimo)
        return {}
    }
}