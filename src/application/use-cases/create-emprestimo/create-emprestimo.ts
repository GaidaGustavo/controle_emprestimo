import { Emprestimo } from "../../../domain/entity/emprestimo";
import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { CreateEmprestimoInput } from "./create-emprestimo-input";
import { CreateEmprestimoOutput } from "./create-emprestimo-output";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";

export class CreateEmprestimoUseCase {
    private itemRepository: ItemRepository;
    private pessoaRepository: PessoaRepository;
    private usuarioRepository: UsuarioRepository;
    private emprestimoRepository: EmprestimoRepository;

    constructor(private repositoryFactory: RepositoryFactory) {
        this.itemRepository = repositoryFactory.createItemRepository();
        this.pessoaRepository = repositoryFactory.createPessoaRepository();
        this.usuarioRepository = repositoryFactory.createUsuarioRepository();
        this.emprestimoRepository = repositoryFactory.createEmprestimoRepository();
    }

    async execute(input: CreateEmprestimoInput): Promise<CreateEmprestimoOutput> {
        try {
            if (!input.pessoaId) {
                throw new Error('Pessoa não informada');
            }

            if (!input.usuarioId) {
                throw new Error('Usuário não logado');
            }

            if (!input.itensId || input.itensId.length == 0) {
                throw new Error('Pelo menos um item precisa ser informado');
            }

            const pessoa = await this.pessoaRepository.getById(input.pessoaId);
            if (!pessoa) {
                throw new Error('Pessoa não encontrada');
            }

            const usuario = await this.usuarioRepository.getById(input.usuarioId);
            if (!usuario) {
                throw new Error('Usuário não encontrado');
            }

            for (const itemId of input.itensId) {
                const item = await this.itemRepository.getById(itemId.id);
                if (!item) {
                    throw new Error(`Item com ID ${itemId.id} não encontrado`);
                }

                const dataEmprestimo = new Date();
                const emprestimo = new Emprestimo(item, pessoa, usuario, dataEmprestimo);
                await this.emprestimoRepository.create(emprestimo);
            }

            return { success: true };
        } catch (error) {
            throw new Error(`Erro ao criar empréstimo`);
        }
    }
}
