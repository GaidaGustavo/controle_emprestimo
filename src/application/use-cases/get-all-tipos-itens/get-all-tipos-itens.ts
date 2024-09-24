import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { GetAllTiposItensInput } from "./get-all-tipos-itens-input";
import { GetAllTiposItensOutput } from "./get-all-tipos-itens-output";

export class GetAllTipoitensUseCase {
    constructor(readonly tipoItemRepository: TipoItemRepository) {}
    
    execute(input: GetAllTiposItensInput):GetAllTiposItensOutput[] {
        const tiposItens = this.tipoItemRepository.getAll();

        const output: GetAllTiposItensOutput[] = [];

        for(const tipoItem of tiposItens){
            output.push(
            {
                    id: tipoItem.getID(),
                    nome: tipoItem.getName(),
            }
            )
        }

        return output;
    }
}