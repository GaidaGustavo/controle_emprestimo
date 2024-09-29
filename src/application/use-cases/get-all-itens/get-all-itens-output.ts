type TipoItem = {
    id: string;
    name: string;
}

export type GetAllItensOutput = {
    id: string | undefined;
    name: string;
    tipoItem: TipoItem;
}