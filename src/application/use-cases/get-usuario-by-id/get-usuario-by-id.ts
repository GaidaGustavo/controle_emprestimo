import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { GetUsuarioByIdInput } from "./get-usuario-by-id-input";
import { GetUsuarioByIdOutput } from "./get-usuario-by-id-output";



export class GetUsuarioByIdUseCase {
    private usuarioRepository: UsuarioRepository
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.usuarioRepository = repositoryFactory.createUsuarioRepository();
    }

    async execute(input: GetUsuarioByIdInput): Promise<GetUsuarioByIdOutput> {
        if(!input.id){
            throw new Error('Insira um id válido')
        }
        const usuario = await this.usuarioRepository.getById(input.id);

        const output: GetUsuarioByIdOutput = {

            id: usuario.getID(),
            nome: usuario.getName(),
            pessoa: {
                id: usuario.getPessoa().getID(),
                nome: usuario.getPessoa().getName(),
                documento: usuario.getPessoa().getDocumento()
            },
          

        }
        return output;
    }

}