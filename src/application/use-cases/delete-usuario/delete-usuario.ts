import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { DeleteUsuarioInput } from "./delete-usuario-input";
import { DeleteUsuarioOutput } from "./delete-usuario-output";

export class DeleteUsuarioUseCase {
    constructor(private readonly usuarioRepository: UsuarioRepository) {}
    
    async execute(input: DeleteUsuarioInput):Promise<DeleteUsuarioOutput> {
        const item = await this.usuarioRepository.delete(input.id);

        return {};
    }
}