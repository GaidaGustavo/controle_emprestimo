import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreateUsuarioUseCase } from "../use-cases/create-usuario/create-usuario";
import { DeleteUsuarioUseCase } from "../use-cases/delete-usuario/delete-usuario";
import { DeleteUsuarioInput } from "../use-cases/delete-usuario/delete-usuario-input";
import { GetAllUsuariosUseCase } from "../use-cases/get-all-usuarios/get-all-usuarios";
import { GetUsuarioByIdUseCase } from "../use-cases/get-usuario-by-id/get-usuario-by-id";
import { GetUsuarioByIdInput } from "../use-cases/get-usuario-by-id/get-usuario-by-id-input";
import { UpdateUsuarioUseCase } from "../use-cases/update-usuario/update-usuario";

export class UsuarioController{
    constructor(private repositoryFactory: RepositoryFactory) {}

    async create(input: any){
        const createUsuarioUseCase = new CreateUsuarioUseCase(this.repositoryFactory);
        return await createUsuarioUseCase.execute(input);
    }

    async update(input: any){
        const updateUsuarioUseCase = new UpdateUsuarioUseCase(this.repositoryFactory);
        return await updateUsuarioUseCase.execute(input);
    }

    async getAll(input: any){
        const getAllUsuarioUseCase = new GetAllUsuariosUseCase(this.repositoryFactory);
        return await getAllUsuarioUseCase.execute(input);
    }

    async getById(input: GetUsuarioByIdInput){
        const getUsuarioByIdUseCase = new GetUsuarioByIdUseCase(this.repositoryFactory);
        return await getUsuarioByIdUseCase.execute(input);
    }

    async delete(input: DeleteUsuarioInput){
        const deleteUsuarioUseCase = new DeleteUsuarioUseCase(this.repositoryFactory);
        return await deleteUsuarioUseCase.execute(input);
    }
}