import { EmprestimoRepository } from "../../domain/repository/emprestimo-repository";
import { ItemRepository } from "../../domain/repository/item-repository";
import { PessoaRepository } from "../../domain/repository/pessoa-repository";
import { UsuarioRepository } from "../../domain/repository/usuario-repository";
import { CreateEmprestimoUseCase } from "../use-cases/create-emprestimo/create-emprestimo";
import { DeleteEmprestimoUseCase } from "../use-cases/delete-emprestimo/delete-emprestimo";
import { DeleteEmprestimoInput } from "../use-cases/delete-emprestimo/delete-emprestimo-input";
import { GetAllEmprestimosUseCase } from "../use-cases/get-all-emprestimos/get-all-emprestimos";
import { GetEmprestimoByIdUseCase } from "../use-cases/get-emprestimo-by-id/get-emprestimo-by-id";
import { GetEmprestimoByIdInput } from "../use-cases/get-emprestimo-by-id/get-emprestimo-by-id-input";
import { UpdateEmprestimoUseCase } from "../use-cases/update-emprestimo/update-emprestimo";

export class EmprestimoController{
    constructor(private readonly emprestimoRepository: EmprestimoRepository, 
        private readonly itemRepository: ItemRepository, 
         private readonly pessoaRepository: PessoaRepository,
         private readonly usuarioRepository: UsuarioRepository ){}

    async create(input: any){
        const createEmprestimoUseCase = new CreateEmprestimoUseCase(this.emprestimoRepository, this.itemRepository, this.pessoaRepository, this.usuarioRepository);
        return await createEmprestimoUseCase.execute(input);
    }

    async update(input: any){
        const updateEmprestimoUseCase = new UpdateEmprestimoUseCase(this.emprestimoRepository, this.itemRepository, this.pessoaRepository, this.usuarioRepository);
        return await updateEmprestimoUseCase.execute(input);
    }

    async getAll(input: any){
        const getAllEmprestimoUseCase = new GetAllEmprestimosUseCase(this.emprestimoRepository);
        return await getAllEmprestimoUseCase.execute(input);
    }

    async getById(input: GetEmprestimoByIdInput){
        const getEmprestimoByIdUseCase = new GetEmprestimoByIdUseCase(this.emprestimoRepository);
        return await getEmprestimoByIdUseCase.execute(input);
    }

    async delete(input: DeleteEmprestimoInput){
        const deleteEmprestimoUseCase = new DeleteEmprestimoUseCase(this.emprestimoRepository)
        return await deleteEmprestimoUseCase.execute(input);
    }
}