import { ItemEPI } from "../../../domain/entity/value-object/item-epi";

type itemEPI = {
    ca: string;
    validade: string;
}

export type UpdateItemInput = {
    id: string | undefined;
    nome: string;
    tipoItemId: string;
    itemEPI: itemEPI;
}