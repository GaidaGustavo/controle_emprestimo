import { Usuario } from "../../../domain/entity/usuario";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { UpdateUsuarioInput } from "./update-usuario-input";
import { UpdateUsuarioOutput } from "./update-usuario-output";

export class UpdateUsuarioUseCase {
    constructor(readonly usuarioRepository: UsuarioRepository,
                private readonly pessoaRepository: PessoaRepository
    ) {}
    
    execute(input: UpdateUsuarioInput): UpdateUsuarioOutput {
        const pessoa = this.pessoaRepository.getById(input.pessoaId);
        const newUsuario = new Usuario(input.username, pessoa, input.id, input.senha);
        this.usuarioRepository.update(newUsuario)
        return {}
    }
}