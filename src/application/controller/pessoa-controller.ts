import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreatePessoaUseCase } from "../use-cases/create-pessoa/create-pessoa";
import { DeletePessoaUseCase } from "../use-cases/delete-pessoa/delete-pessoa";
import { DeletePessoaInput } from "../use-cases/delete-pessoa/delete-pessoa-input";
import { GetAllPessoasUseCase } from "../use-cases/get-all-pessoas/get-all-pessoas";
import { GetPessoaByIdUseCase } from "../use-cases/get-pessoa-by-id/get-pessoa-by-id";
import { GetPessoaByIdInput } from "../use-cases/get-pessoa-by-id/get-pessoa-by-id-input";
import { UpdatePessoaUseCase } from "../use-cases/update-pessoa/update-pessoa";

export class PessoaController{
    constructor(private repositoryFactory: RepositoryFactory){}

    async create(input: any){
        const createPessoaUseCase = new CreatePessoaUseCase(this.repositoryFactory);
        return await createPessoaUseCase.execute(input);
    }

    async update(input: any){
        const updatePessoaUseCase = new UpdatePessoaUseCase(this.repositoryFactory);
        return await updatePessoaUseCase.execute(input);
    }

    async getAll(input: any){
        const getAllPessoasUseCase = new GetAllPessoasUseCase(this.repositoryFactory);
        return await getAllPessoasUseCase.execute(input);
    }

    async getById(input: GetPessoaByIdInput){
        const getPessoaByIdUseCase = new GetPessoaByIdUseCase(this.repositoryFactory);
        return await getPessoaByIdUseCase.execute(input)
    }

    async delete(input: DeletePessoaInput){
        const deletePessoaUseCase = new DeletePessoaUseCase(this.repositoryFactory)
        return await deletePessoaUseCase.execute(input);
    }
}