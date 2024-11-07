import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreateEmprestimoUseCase } from "../use-cases/create-emprestimo/create-emprestimo";
import { DeleteEmprestimoUseCase } from "../use-cases/delete-emprestimo/delete-emprestimo";
import { DeleteEmprestimoInput } from "../use-cases/delete-emprestimo/delete-emprestimo-input";
import { GetAllEmprestimosUseCase } from "../use-cases/get-all-emprestimos/get-all-emprestimos";
import { GetEmprestimoByIdUseCase } from "../use-cases/get-emprestimo-by-id/get-emprestimo-by-id";
import { GetEmprestimoByIdInput } from "../use-cases/get-emprestimo-by-id/get-emprestimo-by-id-input";
import { UpdateEmprestimoUseCase } from "../use-cases/update-emprestimo/update-emprestimo";

export class EmprestimoController{
    constructor(private repositoryFactory: RepositoryFactory){}

    async create(input: any){
        const createEmprestimoUseCase = new CreateEmprestimoUseCase(this.repositoryFactory);
        return await createEmprestimoUseCase.execute(input);
    }

    async update(input: any){
        const updateEmprestimoUseCase = new UpdateEmprestimoUseCase(this.repositoryFactory);
        return await updateEmprestimoUseCase.execute(input);
    }

    async getAll(input: any){
        const getAllEmprestimoUseCase = new GetAllEmprestimosUseCase(this.repositoryFactory);
        return await getAllEmprestimoUseCase.execute(input);
    }

    async getById(input: GetEmprestimoByIdInput){
        const getEmprestimoByIdUseCase = new GetEmprestimoByIdUseCase(this.repositoryFactory);
        return await getEmprestimoByIdUseCase.execute(input);
    }

    async delete(input: DeleteEmprestimoInput){
        const deleteEmprestimoUseCase = new DeleteEmprestimoUseCase(this.repositoryFactory)
        return await deleteEmprestimoUseCase.execute(input);
    }
}