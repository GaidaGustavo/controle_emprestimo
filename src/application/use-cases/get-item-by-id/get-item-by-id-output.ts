type TipoItem = {
    id: string | undefined;
    name: string;
}

export type GetItemByIdOutput = {
    id: string | undefined;
    name: string;
    tipoItem: TipoItem;
}