import { PessoaRepository } from "../../domain/repository/pessoa-repository";
import { CreatePessoaUseCase } from "../use-cases/create-pessoa/create-pessoa";
import { GetAllPessoasUseCase } from "../use-cases/get-all-pessoas/get-all-pessoas";
import { GetPessoaByIdUseCase } from "../use-cases/get-pessoa-by-id/get-pessoa-by-id";
import { UpdatePessoaUseCase } from "../use-cases/update-pessoa/update-pessoa";

export class PessoaController{
    constructor(private readonly pessoaRepository: PessoaRepository){}

    create(input: any){
        const createPessoaUseCase = new CreatePessoaUseCase(this.pessoaRepository);
        createPessoaUseCase.execute(input);
    }

    update(input: any){
        const updatePessoaUseCase = new UpdatePessoaUseCase(this.pessoaRepository);
        updatePessoaUseCase.execute(input);
    }

    getAll(input: any){
        const getAllPessoasUseCase = new GetAllPessoasUseCase(this.pessoaRepository);
        getAllPessoasUseCase.execute(input);
    }

    getById(input: any){
        const getPessoaByIdUseCase = new GetPessoaByIdUseCase(this.pessoaRepository);
        getPessoaByIdUseCase.execute(input)
    }
}