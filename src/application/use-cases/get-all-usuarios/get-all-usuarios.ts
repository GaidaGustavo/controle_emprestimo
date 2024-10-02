import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { GetAllUsuariosInput } from "./get-all-usuarios-input";
import { GetAllUsuariosOutput } from "./get-all-usuarios-output";


export class GetAllUsuariosUseCase {
    constructor(readonly usuarioRepository: UsuarioRepository) {}
    
    execute(input: GetAllUsuariosInput):GetAllUsuariosOutput[] {
        const usuarios = this.usuarioRepository.getAll();

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