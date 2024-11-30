import { Emprestimo } from "../../../domain/entity/emprestimo";
import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { UpdateEmprestimoInput } from "./update-emprestimo-input";
import { UpdateEmprestimoOutput } from "./update-emprestimo-output";

export class UpdateEmprestimoUseCase {
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

    async execute(input: UpdateEmprestimoInput): Promise<UpdateEmprestimoOutput> {
        try {
            if (!input.id || !input.itemId || !input.pessoaId || !input.usuarioId) {
                throw new Error('Campos obrigatórios não fornecidos');
            }

            const item = await this.itemRepository.getById(input.itemId);
            if (!item) {
                throw new Error('Item não encontrado');
            }

            const pessoa = await this.pessoaRepository.getById(input.pessoaId);
            if (!pessoa) {
                throw new Error('Pessoa não encontrada');
            }

            const usuario = await this.usuarioRepository.getById(input.usuarioId);
            if (!usuario) {
                throw new Error('Usuário não encontrado');
            }

            const newEmprestimo = new Emprestimo(
                item,
                pessoa,
                usuario,
                input.dataEmprestimo,
                input.dataDevolucao,
                input.id
            );

            await this.emprestimoRepository.update(newEmprestimo);

            return {
                message: 'Empréstimo atualizado com sucesso',
                emprestimoId: newEmprestimo.getID(),
            };

        } catch (error) {
            throw new Error('Erro ao tentar atualizar o empréstimo');
        }
    }
}
