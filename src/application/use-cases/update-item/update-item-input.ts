import { ItemEPI } from "../../../domain/entity/value-object/item-epi";

export type UpdateItemInput = {
    id: string;
    nome: string;
    tipoItemId: string;
    itemEPI: ItemEPI | undefined;
}