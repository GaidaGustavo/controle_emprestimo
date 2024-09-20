import { ItemRepository } from "../../domain/repository/item-repository";
import { CreateItemUseCase } from "../use-cases/create-item/create-item";
import { GetAllItensUseCase } from "../use-cases/get-all-itens/get-all-itens";
import { GetItemByIdUseCase } from "../use-cases/get-item-by-id/get-item-by-id";
import { UpdateItemUseCase } from "../use-cases/update-item/update-item";

export class ItemController{

    constructor(private readonly itemRepository: ItemRepository){}

    create(input: any) {
        const createItemUseCase = new CreateItemUseCase(this.itemRepository)
        createItemUseCase.execute(input);
    }
    update(input: any) {
        const updateItemUseCase = new UpdateItemUseCase(this.itemRepository)
        updateItemUseCase.execute(input);
    }
    getAll(input: any){
        const getAllItensUseCase = new GetAllItensUseCase(this.itemRepository)
        getAllItensUseCase.execute(input);
    }
    getItemById(input: any) {
        const getItemByIdUseCase = new GetItemByIdUseCase(this.itemRepository)
        getItemByIdUseCase.execute(input);  
    }
  
}