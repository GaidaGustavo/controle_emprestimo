import { ItemEPI } from "../../../domain/entity/value-object/item-epi";

type itemEPI = {
    ca: string;
    validade: Date;
}

export type CreateItemInput = {
    id: string | undefined;
    nome: string;
    tipoItemId: string;
    itemEPI: itemEPI;
}