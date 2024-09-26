import { UsuarioRepository } from "../../domain/repository/usuario-repository";
import { CreateUsuarioUseCase } from "../use-cases/create-usuario/create-usuario";
import { GetAllUsuariosUseCase } from "../use-cases/get-all-usuarios/get-all-usuarios";
import { GetUsuarioByIdUseCase } from "../use-cases/get-usuario-by-id/get-usuario-by-id";
import { UpdateUsuarioUseCase } from "../use-cases/update-usuario/update-usuario";

export class UsuarioController{
    constructor(private readonly usuarioRepository: UsuarioRepository) {}

    create(input: any){
        const createUsuarioUseCase = new CreateUsuarioUseCase(this.usuarioRepository);
        createUsuarioUseCase.execute(input);
    }

    update(input: any){
        const updateUsuarioUseCase = new UpdateUsuarioUseCase(this.usuarioRepository);
        updateUsuarioUseCase.execute(input);
    }

    getAll(input: any){
        const getAllUsuarioUseCase = new GetAllUsuariosUseCase(this.usuarioRepository);
        return getAllUsuarioUseCase.execute(input);
    }

    getById(input: any){
        const getUsuarioByIdUseCase = new GetUsuarioByIdUseCase(this.usuarioRepository);
        return getUsuarioByIdUseCase.execute(input);
    }
}