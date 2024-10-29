import { PessoaRepository } from "../../domain/repository/pessoa-repository";
import { UsuarioRepository } from "../../domain/repository/usuario-repository";
import { CreateUsuarioUseCase } from "../use-cases/create-usuario/create-usuario";
import { DeleteUsuarioUseCase } from "../use-cases/delete-usuario/delete-usuario";
import { DeleteUsuarioInput } from "../use-cases/delete-usuario/delete-usuario-input";
import { GetAllUsuariosUseCase } from "../use-cases/get-all-usuarios/get-all-usuarios";
import { GetUsuarioByIdUseCase } from "../use-cases/get-usuario-by-id/get-usuario-by-id";
import { GetUsuarioByIdInput } from "../use-cases/get-usuario-by-id/get-usuario-by-id-input";
import { UpdateUsuarioUseCase } from "../use-cases/update-usuario/update-usuario";

export class UsuarioController{
    constructor(private readonly usuarioRepository: UsuarioRepository, private readonly pessoaRepository: PessoaRepository) {}

    async create(input: any){
        const createUsuarioUseCase = new CreateUsuarioUseCase(this.usuarioRepository, this.pessoaRepository);
        return await createUsuarioUseCase.execute(input);
    }

    async update(input: any){
        const updateUsuarioUseCase = new UpdateUsuarioUseCase(this.usuarioRepository, this.pessoaRepository);
        return await updateUsuarioUseCase.execute(input);
    }

    async getAll(input: any){
        const getAllUsuarioUseCase = new GetAllUsuariosUseCase(this.usuarioRepository);
        return await getAllUsuarioUseCase.execute(input);
    }

    async getById(input: GetUsuarioByIdInput){
        const getUsuarioByIdUseCase = new GetUsuarioByIdUseCase(this.usuarioRepository);
        return await getUsuarioByIdUseCase.execute(input);
    }

    async delete(input: DeleteUsuarioInput){
        const deleteUsuarioUseCase = new DeleteUsuarioUseCase(this.usuarioRepository);
        return await deleteUsuarioUseCase.execute(input);
    }
}