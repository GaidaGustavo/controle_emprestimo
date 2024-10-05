import { Emprestimo } from "../entity/emprestimo";

export interface EmprestimoRepository {
    getAll(): Emprestimo[];
    getById(id: string): Emprestimo;
    create(emprestimo: Emprestimo): void;
    update(emprestimo: Emprestimo): void;
    delete(id: string): void;

}