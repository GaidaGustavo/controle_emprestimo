import { Usuario } from "../../../domain/entity/usuario";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { UpdateUsuarioInput } from "./update-usuario-input";
import { UpdateUsuarioOutput } from "./update-usuario-output";

export class UpdateUsuarioUseCase {
    private pessoaRepository: PessoaRepository;
    private usuarioRepository: UsuarioRepository;

    constructor(private repositoryFactory: RepositoryFactory) {
        this.pessoaRepository = repositoryFactory.createPessoaRepository();
        this.usuarioRepository = repositoryFactory.createUsuarioRepository();
    }
    
    async execute(input: UpdateUsuarioInput): Promise<UpdateUsuarioOutput> {
        try {
            if (!input.username) {
                throw new Error('O nome de usuário é obrigatório!');
            }

            if (!input.pessoaId) {
                throw new Error('O ID da pessoa é obrigatório!');
            }

            const pessoa = await this.pessoaRepository.getById(input.pessoaId);

            if (!pessoa) {
                throw new Error('Pessoa não encontrada!');
            }

            const newUsuario = new Usuario(input.username, pessoa, input.senha, input.id);

            await this.usuarioRepository.update(newUsuario);

            return {
                message: 'Usuário atualizado com sucesso!',
                usuarioId: newUsuario.getID(),
            };
        } catch (error) {
            throw new Error('Erro ao atualizar usuário');
        }
    }
}
