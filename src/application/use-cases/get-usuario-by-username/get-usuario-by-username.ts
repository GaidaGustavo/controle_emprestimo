import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { GetUsuarioByUsernameInput } from "./get-usuario-by-username-input";
import { GetUsuarioByUsernameOutput } from "./get-usuario-by-username-output";

export class GetUsuarioByUsernameUseCase {
    private usuarioRepository: UsuarioRepository;

    constructor(private repositoryFactory: RepositoryFactory) {
        this.usuarioRepository = repositoryFactory.createUsuarioRepository();
    }

    async execute(input: GetUsuarioByUsernameInput): Promise<GetUsuarioByUsernameOutput> {
        try {
            if (!input.username) {
                throw new Error('Insira um usuário válido');
            }

            const usuario = await this.usuarioRepository.getByUsername(input.username);

            if (!usuario) {
                throw new Error('Usuário não encontrado');
            }

            const output: GetUsuarioByUsernameOutput = {
                id: usuario.getID(),
                nome: usuario.getName(),
                pessoa: {
                    id: usuario.getPessoa().getID(),
                    nome: usuario.getPessoa().getName(),
                    documento: usuario.getPessoa().getDocumento(),
                },
            };

            return output;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar o usuário');
        }
    }
}
