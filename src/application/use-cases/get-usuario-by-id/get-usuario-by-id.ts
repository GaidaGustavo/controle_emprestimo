import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { GetUsuarioByIdInput } from "./get-usuario-by-id-input";
import { GetUsuarioByIdOutput } from "./get-usuario-by-id-output";



export class GetUsuarioByIdUseCase {
    constructor(readonly usuarioRepository: UsuarioRepository) { }

    async execute(input: GetUsuarioByIdInput): Promise<GetUsuarioByIdOutput> {
        const usuario = await this.usuarioRepository.getById(input.id);

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