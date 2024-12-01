import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { LoginUseCaseOutput } from "./login-output";
import { LoginUseCaseInput } from "./login-input";

export class LoginUseCase {

    private usuarioRepository: UsuarioRepository;

    constructor(readonly repositoryFactory: RepositoryFactory){
        this.usuarioRepository = repositoryFactory.createUsuarioRepository();
    }

    async execute(input: LoginUseCaseInput): Promise<LoginUseCaseOutput> {
        const usuario = await this.usuarioRepository.getByUsername(input.username);
        const senha = usuario.getSenha()!
        const isValidPassword = await compare(input.password, senha);
        if (!isValidPassword) {
            throw new Error("Senha Inválida");
        }
        const token = sign({
            id: usuario.getID(),
            username: usuario.getName(),
            password: usuario.getSenha()
        }, 'teste');

        console.log(token)
        return {
            token
        }

    }
}