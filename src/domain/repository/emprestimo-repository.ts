import { Emprestimo } from "../entity/emprestimo";

export interface EmprestimoRepository {
    getAll(): Emprestimo[];
    getById(id: string): Emprestimo;
    create(item: Emprestimo): void;
    update(item: Emprestimo): void;
}