import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { DeleteUsuarioInput } from "./delete-usuario-input";
import { DeleteUsuarioOutput } from "./delete-usuario-output";

export class DeleteUsuarioUseCase {
    private usuarioRepository: UsuarioRepository
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.usuarioRepository = repositoryFactory.createUsuarioRepository();
    }
    
    async execute(input: DeleteUsuarioInput):Promise<DeleteUsuarioOutput> {
        if(!input.id){
            throw new Error('Insira um id válido')
        }
        const item = await this.usuarioRepository.delete(input.id);

        return {};
    }
}