import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { DeleteUsuarioInput } from "./delete-usuario-input";
import { DeleteUsuarioOutput } from "./delete-usuario-output";

export class DeleteUsuarioUseCase {
    private usuarioRepository: UsuarioRepository;

    constructor(private repositoryFactory: RepositoryFactory) {
        this.usuarioRepository = repositoryFactory.createUsuarioRepository();
    }
    
    async execute(input: DeleteUsuarioInput): Promise<DeleteUsuarioOutput> {
        try {
            if (!input.id) {
                throw new Error('Insira um id válido');
            }

            await this.usuarioRepository.delete(input.id);

            return {};
        } catch (error) {
            throw new Error('Erro ao deletar usuário');
        }
    }
}
