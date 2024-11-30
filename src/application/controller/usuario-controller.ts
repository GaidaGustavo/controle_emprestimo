import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreateUsuarioUseCase } from "../use-cases/create-usuario/create-usuario";
import { DeleteUsuarioUseCase } from "../use-cases/delete-usuario/delete-usuario";
import { DeleteUsuarioInput } from "../use-cases/delete-usuario/delete-usuario-input";
import { GetAllUsuariosUseCase } from "../use-cases/get-all-usuarios/get-all-usuarios";
import { GetUsuarioByIdUseCase } from "../use-cases/get-usuario-by-id/get-usuario-by-id";
import { GetUsuarioByIdInput } from "../use-cases/get-usuario-by-id/get-usuario-by-id-input";
import { GetUsuarioByUsernameUseCase } from "../use-cases/get-usuario-by-username/get-usuario-by-username";
import { UpdateUsuarioUseCase } from "../use-cases/update-usuario/update-usuario";

export class UsuarioController {
    constructor(private repositoryFactory: RepositoryFactory) {}

    async create(input: any) {
        try {
            const createUsuarioUseCase = new CreateUsuarioUseCase(this.repositoryFactory);
            return await createUsuarioUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao criar usuário");
        }
    }

    async update(input: any) {
        try {
            const updateUsuarioUseCase = new UpdateUsuarioUseCase(this.repositoryFactory);
            return await updateUsuarioUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao atualizar usuário");
        }
    }

    async getAll(input: any) {
        try {
            const getAllUsuarioUseCase = new GetAllUsuariosUseCase(this.repositoryFactory);
            return await getAllUsuarioUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao obter todos os usuários");
        }
    }

    async getById(input: GetUsuarioByIdInput) {
        try {
            const getUsuarioByIdUseCase = new GetUsuarioByIdUseCase(this.repositoryFactory);
            return await getUsuarioByIdUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao obter usuário por ID");
        }
    }

    async delete(input: DeleteUsuarioInput) {
        try {
            const deleteUsuarioUseCase = new DeleteUsuarioUseCase(this.repositoryFactory);
            return await deleteUsuarioUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao deletar usuário");
        }
    }

    async getByUsername(input: any) {
        try {
            const getUsuarioByUsernameUseCase = new GetUsuarioByUsernameUseCase(this.repositoryFactory);
            return await getUsuarioByUsernameUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao obter usuário por username");
        }
    }
}
