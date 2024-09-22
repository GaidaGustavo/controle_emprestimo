type pessoa = {
    id: string;
    nome: string;
}

export type GetAllUsuariosOutput = {
    id: string;
    nome: string;
    pessoa: pessoa;
    senha: string;
}