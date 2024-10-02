type TipoItem = {
    id: string | undefined;
    name: string;
}

export type GetAllItensOutput = {
    id: string | undefined;
    name: string;
    tipoItem: TipoItem;
}