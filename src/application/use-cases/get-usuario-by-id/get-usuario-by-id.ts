import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { GetUsuarioByIdInput } from "./get-usuario-by-id-input";
import { GetUsuarioByIdOutput } from "./get-usuario-by-id-output";



export class GetUsuarioByIdUseCase {
    constructor(readonly usuarioRepository: UsuarioRepository) {}
    
    execute(input: GetUsuarioByIdInput):GetUsuarioByIdOutput {
        return {} as GetUsuarioByIdOutput;
    }
}