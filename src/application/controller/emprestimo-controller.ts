import { EmprestimoRepository } from "../../domain/repository/emprestimo-repository";
import { ItemRepository } from "../../domain/repository/item-repository";
import { PessoaRepository } from "../../domain/repository/pessoa-repository";
import { UsuarioRepository } from "../../domain/repository/usuario-repository";
import { CreateEmprestimoUseCase } from "../use-cases/create-emprestimo/create-emprestimo";
import { GetAllEmprestimosUseCase } from "../use-cases/get-all-emprestimos/get-all-emprestimos";
import { GetEmprestimoByIdUseCase } from "../use-cases/get-emprestimo-by-id/get-emprestimo-by-id";
import { UpdateEmprestimoUseCase } from "../use-cases/update-emprestimo/update-emprestimo";

export class EmprestimoController{
    constructor(private readonly emprestimoRepository: EmprestimoRepository, 
        private readonly itemRepository: ItemRepository, 
         private readonly pessoaRepository: PessoaRepository,
         private readonly usuarioRepository: UsuarioRepository ){}

    create(input: any){
        const createEmprestimoUseCase = new CreateEmprestimoUseCase(this.emprestimoRepository, this.itemRepository, this.pessoaRepository, this.usuarioRepository);
        return createEmprestimoUseCase.execute(input);
    }

    update(input: any){
        const updateEmprestimoUseCase = new UpdateEmprestimoUseCase(this.emprestimoRepository);
        return updateEmprestimoUseCase.execute(input);
    }

    getAll(input: any){
        const getAllEmprestimoUseCase = new GetAllEmprestimosUseCase(this.emprestimoRepository);
        return getAllEmprestimoUseCase.execute(input);
    }

    getById(input: any){
        const getEmprestimoByIdUseCase = new GetEmprestimoByIdUseCase(this.emprestimoRepository);
        return getEmprestimoByIdUseCase.execute(input);
    }
}