import { Usuario } from "../../../domain/entity/usuario";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { CreateUsuarioInput } from "./create-usuario-input";
import { CreateUsuarioOutput } from "./create-usuario-output";

export class CreateUsuarioUseCase {
    constructor(readonly usuarioRepository: UsuarioRepository, readonly pessoaRepository: PessoaRepository) {}
    
    async execute(input: CreateUsuarioInput): Promise<CreateUsuarioOutput> {
        const pessoa = await this.pessoaRepository.getById(input.pessoaId)
        
        const usuario = new Usuario(input.username,  pessoa, input.id, input.senha,);

        await this.usuarioRepository.create(usuario);

        return {}
    }
}