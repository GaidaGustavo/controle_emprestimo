import { Usuario } from "../../../domain/entity/usuario";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { CreateUsuarioInput } from "./create-usuario-input";
import { CreateUsuarioOutput } from "./create-usuario-output";

export class CreateUsuarioUseCase {
    private pessoaRepository: PessoaRepository;
    private usuarioRepository: UsuarioRepository;

    constructor(private repositoryFactory: RepositoryFactory) {
        this.pessoaRepository = repositoryFactory.createPessoaRepository();
        this.usuarioRepository = repositoryFactory.createUsuarioRepository();
    }

    async execute(input: CreateUsuarioInput): Promise<CreateUsuarioOutput> {
        try {
            if (!input.username) {
                throw new Error('Insira um nome!');
            }
            if (!input.pessoaId) {
                throw new Error('Insira uma pessoa!');
            }

            const pessoa = await this.pessoaRepository.getById(input.pessoaId);

            const usuario = new Usuario(input.username, pessoa, input.senha, input.id);

            await this.usuarioRepository.create(usuario);

            return {};
        } catch (error) {
            throw new Error('Erro ao criar usuário');
        }
    }
}
