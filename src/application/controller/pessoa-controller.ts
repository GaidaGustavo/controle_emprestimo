import { PessoaRepository } from "../../domain/repository/pessoa-repository";
import { CreatePessoaUseCase } from "../use-cases/create-pessoa/create-pessoa";
import { DeletePessoaUseCase } from "../use-cases/delete-pessoa/delete-pessoa";
import { DeletePessoaInput } from "../use-cases/delete-pessoa/delete-pessoa-input";
import { GetAllPessoasUseCase } from "../use-cases/get-all-pessoas/get-all-pessoas";
import { GetPessoaByIdUseCase } from "../use-cases/get-pessoa-by-id/get-pessoa-by-id";
import { GetPessoaByIdInput } from "../use-cases/get-pessoa-by-id/get-pessoa-by-id-input";
import { UpdatePessoaUseCase } from "../use-cases/update-pessoa/update-pessoa";

export class PessoaController{
    constructor(private readonly pessoaRepository: PessoaRepository){}

    async create(input: any){
        const createPessoaUseCase = new CreatePessoaUseCase(this.pessoaRepository);
        return await createPessoaUseCase.execute(input);
    }

    async update(input: any){
        const updatePessoaUseCase = new UpdatePessoaUseCase(this.pessoaRepository);
        return await updatePessoaUseCase.execute(input);
    }

    async getAll(input: any){
        const getAllPessoasUseCase = new GetAllPessoasUseCase(this.pessoaRepository);
        return await getAllPessoasUseCase.execute(input);
    }

    async getById(input: GetPessoaByIdInput){
        const getPessoaByIdUseCase = new GetPessoaByIdUseCase(this.pessoaRepository);
        return await getPessoaByIdUseCase.execute(input)
    }

    async delete(input: DeletePessoaInput){
        const deletePessoaUseCase = new DeletePessoaUseCase(this.pessoaRepository)
        return await deletePessoaUseCase.execute(input);
    }
}