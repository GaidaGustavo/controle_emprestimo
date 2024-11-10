import { ItemEPI } from "../../../domain/entity/value-object/item-epi";

type TipoItem = {
    id: string | undefined;
    name: string;
}

export type GetAllItensOutput = {
    id: string | undefined;
    name: string;
    tipoItem: TipoItem;
    itemEPI: ItemEPI | undefined;
}