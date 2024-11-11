import { TipoItem } from "../../../domain/entity/tipo-item";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { CreateTipoItemInput } from "./create-tipo-item-input";
import { CreateTipoItemOutput } from "./create-tipo-item-output";

export class CreateTipoitemUseCase {
    private tipoItemRepository: TipoItemRepository;
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.tipoItemRepository = repositoryFactory.createTipoItemRepository();
    }
    
    async execute(input: CreateTipoItemInput): Promise<CreateTipoItemOutput> {
        if(!input.nome){
            throw new Error('Insira um nome!')
        }
        const tipoItem = new TipoItem(input.nome, input.id)

        await this.tipoItemRepository.create(tipoItem);
        return {}
    }
}