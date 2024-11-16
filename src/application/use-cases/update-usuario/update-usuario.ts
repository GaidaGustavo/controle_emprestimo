import { Usuario } from "../../../domain/entity/usuario";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { UpdateUsuarioInput } from "./update-usuario-input";
import { UpdateUsuarioOutput } from "./update-usuario-output";

export class UpdateUsuarioUseCase {
    private pessoaRepository: PessoaRepository;
    private usuarioRepository: UsuarioRepository;
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.pessoaRepository = repositoryFactory.createPessoaRepository();
        this.usuarioRepository = repositoryFactory.createUsuarioRepository();
    }
    
    async execute(input: UpdateUsuarioInput): Promise<UpdateUsuarioOutput> {
        if(!input.username){
            throw new Error('Insira um nome!')
        }
        if(!input.pessoaId){
            throw new Error('Insira uma pessoa!')
        }
        const pessoa = await this.pessoaRepository.getById(input.pessoaId);
        const newUsuario = new Usuario(input.username, pessoa, input.id, input.senha);
        await this.usuarioRepository.update(newUsuario)
        return {}
    }
}