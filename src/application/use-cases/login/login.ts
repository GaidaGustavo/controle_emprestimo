import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { LoginUseCaseInput } from "./login-input";
import { LoginUseCaseOutput } from "./login-output";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export class LoginUseCase {

    private usuarioRepository: UsuarioRepository;

    constructor(readonly repositoryFactory: RepositoryFactory){
        this.usuarioRepository = repositoryFactory.createUsuarioRepository();
    }

    async execute(input: LoginUseCaseInput): Promise<LoginUseCaseOutput> {
        console.log(input.username)
        
        const usuario = await this.usuarioRepository.getByUsername(input.username);
        if (!usuario) {
            throw new Error("Usuário não encontrado");
        }

        const senha = usuario.getSenha()!;
        console.log(input.password);
        console.log(usuario.getSenha());

        const senhaValida = await compare(input.password, senha);
        if (!senhaValida) {
            throw new Error("Senha Inválida");
        }

        const token = sign({
            id: usuario.getID(),
            username: input.username,
        }, process.env.JWT_SECRET || 'default_secret', { expiresIn: '1h' });

        return {
            token
        };
    }
}
