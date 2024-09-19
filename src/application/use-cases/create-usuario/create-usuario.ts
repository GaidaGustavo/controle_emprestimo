import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { CreateUsuarioInput } from "./create-usuario-input";
import { CreateUsuarioOutput } from "./create-usuario-output";

export class CreateUsuarioUseCase {
    constructor(readonly usuarioRepository: UsuarioRepository) {}
    
    execute(input: CreateUsuarioInput): CreateUsuarioOutput {
        return {} as CreateUsuarioOutput;
    }
}