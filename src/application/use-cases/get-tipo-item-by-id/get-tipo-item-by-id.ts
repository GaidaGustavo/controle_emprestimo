import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { GetTipoItemByIdInput } from "./get-tipo-item-by-id-input";
import { GetTipoItemByIdOutput } from "./get-tipo-item-by-id-output";

export class GetTipoitemByIdUseCase {
    private tipoItemRepository: TipoItemRepository;

    constructor(private repositoryFactory: RepositoryFactory) {
        this.tipoItemRepository = repositoryFactory.createTipoItemRepository();
    }

    async execute(input: GetTipoItemByIdInput): Promise<GetTipoItemByIdOutput> {
        try {
            if (!input.id) {
                throw new Error('Insira um id válido');
            }

            const tipoItem = await this.tipoItemRepository.getById(input.id);

            if (!tipoItem) {
                throw new Error('Tipo de item não encontrado');
            }

            const output: GetTipoItemByIdOutput = {
                id: tipoItem.getID(),
                nome: tipoItem.getName(),
            };

            return output;
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar o tipo de item');
        }
    }
}
