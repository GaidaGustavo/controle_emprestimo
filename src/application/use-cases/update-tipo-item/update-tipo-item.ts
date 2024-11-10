<<<<<<< HEAD
import { TipoItem } from "../../../domain/entity/tipoitem";
=======
import { TipoItem } from "../../../domain/entity/tipo-item";
>>>>>>> cc96ba4 (Aprimoramento e correção de erros no respository database)
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { TipoItemRepository } from "../../../domain/repository/tipoitem-repository";
import { UpdateTipoItemInput } from "./update-tipo-item-input";
import { UpdateTipoItemOutput } from "./update-tipo-item-output";

export class UpdateTipoItemUseCase {
    private tipoItemRepository: TipoItemRepository;
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.tipoItemRepository = repositoryFactory.createTipoItemRepository();
    }
    
    async execute(input: UpdateTipoItemInput): Promise<UpdateTipoItemOutput> {
        const newTipoItem = new TipoItem(input.nome, input.id)
        await this.tipoItemRepository.update(newTipoItem)
        return {}
    }
}