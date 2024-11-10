type pessoa = {
    id: string | undefined;
    nome: string;
    documento: string;
}

export type GetAllUsuariosOutput = {
    id: string | undefined;
    nome: string;
    pessoa: pessoa;
    senha: string | undefined;
}