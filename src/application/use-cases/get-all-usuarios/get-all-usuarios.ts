import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { GetAllUsuariosInput } from "./get-all-usuarios-input";
import { GetAllUsuariosOutput } from "./get-all-usuarios-output";


export class GetAllUsuariosUseCase {
    constructor(readonly usuarioRepository: UsuarioRepository) {}
    
    execute(input: GetAllUsuariosInput):GetAllUsuariosOutput {
        return {} as GetAllUsuariosOutput;
    }
}