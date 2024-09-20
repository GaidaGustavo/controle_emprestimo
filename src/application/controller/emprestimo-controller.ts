import { EmprestimoRepository } from "../../domain/repository/emprestimo-repository";
import { CreateEmprestimoUseCase } from "../use-cases/create-emprestimo/create-emprestimo";
import { GetAllEmprestimosUseCase } from "../use-cases/get-all-emprestimos/get-all-emprestimos";
import { GetEmprestimoByIdUseCase } from "../use-cases/get-emprestimo-by-id/get-emprestimo-by-id";
import { UpdateEmprestimoUseCase } from "../use-cases/update-emprestimo/update-emprestimo";

export class EmprestimoController{
    constructor(private readonly emprestimoRepository: EmprestimoRepository){}

    create(input: any){
        const createEmprestimoUseCase = new CreateEmprestimoUseCase(this.emprestimoRepository);
        createEmprestimoUseCase.execute(input);
    }

    update(input: any){
        const updateEmprestimoUseCase = new UpdateEmprestimoUseCase(this.emprestimoRepository);
        updateEmprestimoUseCase.execute(input);
    }

    getAll(input: any){
        const getAllEmprestimoUseCase = new GetAllEmprestimosUseCase(this.emprestimoRepository);
        getAllEmprestimoUseCase.execute(input);
    }

    getById(input: any){
        const getEmprestimoByIdUseCase = new GetEmprestimoByIdUseCase(this.emprestimoRepository);
        getEmprestimoByIdUseCase.execute(input);
    }
}