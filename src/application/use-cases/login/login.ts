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
        const usuario = await this.usuarioRepository.getByUsername(input.username);
        const senha = usuario.getSenha()!;
        const isValidPassword = await compare(input.password, senha);
        if (!isValidPassword) {
            throw new Error("Senha Inválida");
        }
        const token = sign({
            id: usuario.id,
            username: input.username,
            senha: senha
        }, 'teste');
        return {
            token
        }

    }
}