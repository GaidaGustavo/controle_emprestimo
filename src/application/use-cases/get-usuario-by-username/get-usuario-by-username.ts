import { errors } from "pg-promise";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { GetUsuarioByUsernameInput } from "./get-usuario-by-username-input";
import { GetUsuarioByUsernameOutput } from "./get-usuario-by-username-output";

export class GetUsuarioByUsernameUseCase {
    private usuarioRepository: UsuarioRepository;
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.usuarioRepository = repositoryFactory.createUsuarioRepository();
    }

    async execute(input: GetUsuarioByUsernameInput): Promise<GetUsuarioByUsernameOutput> {
        if (!input.username) {
            throw new Error('Insira um usuario válido')
        }
        const usuario = await this.usuarioRepository.getByUsername(input.username);

        const output: GetUsuarioByUsernameOutput = {

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