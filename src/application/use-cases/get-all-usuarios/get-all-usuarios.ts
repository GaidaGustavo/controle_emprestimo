import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { GetAllUsuariosInput } from "./get-all-usuarios-input";
import { GetAllUsuariosOutput } from "./get-all-usuarios-output";


export class GetAllUsuariosUseCase {
    constructor(readonly usuarioRepository: UsuarioRepository) {}
    
    async execute(input: GetAllUsuariosInput):Promise<GetAllUsuariosOutput[]> {
        const usuarios = await this.usuarioRepository.getAll();

        const output: GetAllUsuariosOutput[] = [];

        for(const usuario of usuarios){
            output.push(
            {
                    id: usuario.getID(),
                    nome: usuario.getName(),
                    senha: usuario.getSenha(),
                    pessoa: {
                        id: usuario.getPessoa().getID(),
                        nome: usuario.getPessoa().getName(),
                    },
                    
            }
            )
        }

        return output;
    }
}