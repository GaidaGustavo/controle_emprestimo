type TipoItem = {
    id: string;
    name: string;
}

export type GetAllItensOutput = {
    id: string;
    name: string;
    tipoItem: TipoItem;
}