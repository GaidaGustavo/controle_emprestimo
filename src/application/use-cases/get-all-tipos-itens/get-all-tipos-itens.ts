import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { GetAllTiposItensInput } from "./get-all-tipos-itens-input";
import { GetAllTiposItensOutput } from "./get-all-tipos-itens-output";

export class GetAllTipoitensUseCase {
    private tipoItemRepository: TipoItemRepository;

    constructor(private repositoryFactory: RepositoryFactory) {
        this.tipoItemRepository = repositoryFactory.createTipoItemRepository();
    }

    async execute(input: GetAllTiposItensInput): Promise<GetAllTiposItensOutput[]> {
        try {
            const tiposItens = await this.tipoItemRepository.getAll();

            if (!tiposItens || tiposItens.length == 0) {
                throw new Error('Nenhum dado encontrado');
            }

            const output: GetAllTiposItensOutput[] = tiposItens.map(tipoItem => ({
                id: tipoItem.getID(),
                nome: tipoItem.getName(),
            }));

            return output;
        } catch (error) {
            throw new Error(`Erro ao obter tipos de itens`);
        }
    }
}

