type pessoa = {
    id: string | undefined;
    nome: string;
    documento: string;
}

export type GetUsuarioByIdOutput= {
    id: string | undefined;
    nome: string;
    senha: string;
    pessoa: pessoa;
}