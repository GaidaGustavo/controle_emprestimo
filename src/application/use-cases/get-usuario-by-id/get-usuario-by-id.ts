import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { GetUsuarioByIdInput } from "./get-usuario-by-id-input";
import { GetUsuarioByIdOutput } from "./get-usuario-by-id-output";



export class GetUsuarioByIdUseCase {
    constructor(readonly usuarioRepository: UsuarioRepository) { }

    execute(input: GetUsuarioByIdInput): GetUsuarioByIdOutput {
        const usuario = this.usuarioRepository.getById(input.id);

        const output: GetUsuarioByIdOutput = {

            id: usuario.getID(),
            nome: usuario.getName(),
            pessoa: {
                id: usuario.getPessoa().getID(),
                nome: usuario.getPessoa().getName(),
            },
          

        }
        return output;
    }

}