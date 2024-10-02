import e from "express";
import { Emprestimo } from "../../../domain/entity/emprestimo";
import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { ItemRepository } from "../../../domain/repository/item-repository";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";
import { UsuarioRepository } from "../../../domain/repository/usuario-repository";
import { CreateEmprestimoInput } from "./create-emprestimo-input";
import { CreateEmprestimoOutput } from "./create-emprestimo-output";

export class CreateEmprestimoUseCase {
    constructor(readonly emprestimoRespository: EmprestimoRepository, 
        private readonly itemRepository: ItemRepository, 
        private readonly pessoaRepository: PessoaRepository,
        private readonly usuarioRepository: UsuarioRepository) {}
    
    execute(input: CreateEmprestimoInput):CreateEmprestimoOutput {
        const item = this.itemRepository.getById(input.itemId)
        const pessoa = this.pessoaRepository.getById(input.pessoaId)
        const usuario = this.usuarioRepository.getById(input.usuarioId);
        
        const emprestimo = new Emprestimo(item, pessoa, usuario)

        this.emprestimoRespository.create(emprestimo);  

        return {}
    }
}