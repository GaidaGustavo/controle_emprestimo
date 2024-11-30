import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreateEmprestimoUseCase } from "../use-cases/create-emprestimo/create-emprestimo";
import { DeleteEmprestimoUseCase } from "../use-cases/delete-emprestimo/delete-emprestimo";
import { DeleteEmprestimoInput } from "../use-cases/delete-emprestimo/delete-emprestimo-input";
import { GetAllEmprestimosUseCase } from "../use-cases/get-all-emprestimos/get-all-emprestimos";
import { GetEmprestimoByIdUseCase } from "../use-cases/get-emprestimo-by-id/get-emprestimo-by-id";
import { GetEmprestimoByIdInput } from "../use-cases/get-emprestimo-by-id/get-emprestimo-by-id-input";
import { UpdateEmprestimoUseCase } from "../use-cases/update-emprestimo/update-emprestimo";

export class EmprestimoController {
    constructor(private repositoryFactory: RepositoryFactory) {}

    async create(input: any) {
        try {
            const createEmprestimoUseCase = new CreateEmprestimoUseCase(this.repositoryFactory);
            return await createEmprestimoUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao criar empréstimo");
        }
    }

    async update(input: any) {
        try {
            const updateEmprestimoUseCase = new UpdateEmprestimoUseCase(this.repositoryFactory);
            return await updateEmprestimoUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao atualizar empréstimo");
        }
    }

    async getAll(input: any) {
        try {
            const getAllEmprestimoUseCase = new GetAllEmprestimosUseCase(this.repositoryFactory);
            return await getAllEmprestimoUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao obter todos os empréstimos");
        }
    }

    async getById(input: GetEmprestimoByIdInput) {
        try {
            const getEmprestimoByIdUseCase = new GetEmprestimoByIdUseCase(this.repositoryFactory);
            return await getEmprestimoByIdUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao obter empréstimo por ID");
        }
    }

    async delete(input: DeleteEmprestimoInput) {
        try {
            const deleteEmprestimoUseCase = new DeleteEmprestimoUseCase(this.repositoryFactory);
            return await deleteEmprestimoUseCase.execute(input);
        } catch (error) {
            throw new Error("Erro ao deletar empréstimo");
        }
    }
}
