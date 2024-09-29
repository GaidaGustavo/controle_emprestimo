import { Pessoa } from "../../../domain/entity/pessoa";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";

export class PessoaRepositoryMemory implements PessoaRepository{
    private pessoas: Pessoa[];
    constructor(){
        this.pessoas = [
            new Pessoa('Jacson Santos', '2151eb0d-642a-4224-8229-aefd5832ad85'),
            new Pessoa('Gabriel do Anel', 'a1fc0591-9bed-40b5-aba3-ab0ecde05f7e')
        ]
    }
    
    getAll(): Pessoa[] {
        return this.pessoas;
    }
    getById(id: string): Pessoa {
        throw new Error("Method not implemented.");
    }
    create(pessoa: Pessoa): void {
        this.pessoas.push(pessoa)
    }
    update(pessoa: Pessoa): void {
        throw new Error("Method not implemented.");
    }

}