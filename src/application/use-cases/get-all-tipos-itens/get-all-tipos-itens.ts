import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { GetAllTiposItensInput } from "./get-all-tipos-itens-input";
import { GetAllTiposItensOutput } from "./get-all-tipos-itens-output";

export class GetAllTipoitensUseCase {
    private tipoItemRepository: TipoItemRepository;
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.tipoItemRepository = repositoryFactory.createTipoItemRepository();
    }
    
    async execute(input: GetAllTiposItensInput):Promise<GetAllTiposItensOutput[]> {
        const tiposItens = await this.tipoItemRepository.getAll();

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