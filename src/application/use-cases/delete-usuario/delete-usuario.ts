import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { DeleteUsuarioInput } from "./delete-usuario-input";
import { DeleteUsuarioOutput } from "./delete-usuario-output";

export class DeleteUsuarioUseCase {
    constructor(private readonly usuarioRepository: UsuarioRepository) {}
    
    execute(input: DeleteUsuarioInput):DeleteUsuarioOutput {
        const item = this.usuarioRepository.delete(input.id);

        return {};
    }
}