import { ItemEPI } from "../../../domain/entity/value-object/item-epi";

export type CreateItemInput = {
    id: string | undefined;
    nome: string;
    tipoItemId: string;
    itemEPI: ItemEPI | undefined;
}