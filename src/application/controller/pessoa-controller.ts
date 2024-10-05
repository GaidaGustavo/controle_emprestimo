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

    create(input: any){
        const createPessoaUseCase = new CreatePessoaUseCase(this.pessoaRepository);
        return createPessoaUseCase.execute(input);
    }

    update(input: any){
        const updatePessoaUseCase = new UpdatePessoaUseCase(this.pessoaRepository);
        return updatePessoaUseCase.execute(input);
    }

    getAll(input: any){
        const getAllPessoasUseCase = new GetAllPessoasUseCase(this.pessoaRepository);
        return getAllPessoasUseCase.execute(input);
    }

    getById(input: GetPessoaByIdInput){
        const getPessoaByIdUseCase = new GetPessoaByIdUseCase(this.pessoaRepository);
        return getPessoaByIdUseCase.execute(input)
    }

    delete(input: DeletePessoaInput){
        const deletePessoaUseCase = new DeletePessoaUseCase(this.pessoaRepository)
        return deletePessoaUseCase.execute(input);
    }
}