type TipoItem = {
    id: string;
    name: string;
}

export type GetItemByIdOutput = {
    id: string;
    name: string;
    tipoItem: TipoItem;
}