import { Emprestimo } from "../../../domain/entity/emprestimo";
import { Item } from "../../../domain/entity/item";
import { Pessoa } from "../../../domain/entity/pessoa";
import { TipoItem } from "../../../domain/entity/tipo-item";
import { Usuario } from "../../../domain/entity/usuario";
import { ItemEPI } from "../../../domain/entity/value-object/item-epi";
import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";


export default class EmprestimoRepositoryMemory implements EmprestimoRepository{
    private emprestimos: Emprestimo[];
    constructor(){
        const date = new Date();
        const itemEpi = new ItemEPI('3652643', date)
        const tipoItem = new TipoItem('Copos', '4694690b-d32a-4050-86a9-041a90765e7f');
        const item = new Item('Copo de Café', tipoItem, 'eb51e356-16c1-4b1e-bfea-aadc07a2c60c');
        const pessoa = new Pessoa('Jacson Santos', '2151eb0d-642a-4224-8229-aefd5832ad85');
        const usuario = new Usuario('jacson_santos', pessoa, '7e461e53-0793-4ba3-8c34-dc5f45481b31', '123');
        
        this.emprestimos = [
            new Emprestimo(item,  pessoa, usuario, '7bb91674-3f3c-4f86-923e-dd1f266dfca4', date)
        ]
    }
    async delete(id: string): Promise<void> {
        this.emprestimos = await this.emprestimos.filter(value => value.getID() !== id);
    }
    
    async getAll(): Promise<Emprestimo[]> {
        return await this.emprestimos;
    }
    async getById(id: string): Promise<Emprestimo> {
        const emprestimo = await this.emprestimos.find(valor => valor.getID() == id);

        if (!emprestimo) {
            throw new Error('User not Found');
        }

        return emprestimo;
    }
    async create(emprestimo: Emprestimo): Promise<void> {
        await this.emprestimos.push(emprestimo);
    }
    async update(emprestimo: Emprestimo): Promise<void> {
        const emprestimoAntigo = await this.emprestimos.findIndex(value => value.getID() == emprestimo.getID());
        this.emprestimos[emprestimoAntigo] = emprestimo;
    }
    
}