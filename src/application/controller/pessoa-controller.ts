import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreatePessoaUseCase } from "../use-cases/create-pessoa/create-pessoa";
import { DeletePessoaUseCase } from "../use-cases/delete-pessoa/delete-pessoa";
import { DeletePessoaInput } from "../use-cases/delete-pessoa/delete-pessoa-input";
import { GetAllPessoasUseCase } from "../use-cases/get-all-pessoas/get-all-pessoas";
import { GetPessoaByIdUseCase } from "../use-cases/get-pessoa-by-id/get-pessoa-by-id";
import { GetPessoaByIdInput } from "../use-cases/get-pessoa-by-id/get-pessoa-by-id-input";
import { UpdatePessoaUseCase } from "../use-cases/update-pessoa/update-pessoa";

export class PessoaController {
    constructor(private repositoryFactory: RepositoryFactory) {}

    async create(input: any) {
        try {
            const createPessoaUseCase = new CreatePessoaUseCase(this.repositoryFactory);
            return await createPessoaUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao criar pessoa");
        }
    }

    async update(input: any) {
        try {
            const updatePessoaUseCase = new UpdatePessoaUseCase(this.repositoryFactory);
            return await updatePessoaUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao atualizar pessoa");
        }
    }

    async getAll(input: any) {
        try {
            const getAllPessoasUseCase = new GetAllPessoasUseCase(this.repositoryFactory);
            return await getAllPessoasUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao obter todas as pessoas");
        }
    }

    async getById(input: GetPessoaByIdInput) {
        try {
            const getPessoaByIdUseCase = new GetPessoaByIdUseCase(this.repositoryFactory);
            return await getPessoaByIdUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao obter pessoa por ID");
        }
    }

    async delete(input: DeletePessoaInput) {
        try {
            const deletePessoaUseCase = new DeletePessoaUseCase(this.repositoryFactory);
            return await deletePessoaUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao deletar pessoa");
        }
    }
}
