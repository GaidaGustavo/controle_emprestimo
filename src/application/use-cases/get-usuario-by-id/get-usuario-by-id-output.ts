type pessoa = {
    id: string | undefined;
    nome: string;
    documento: string;
}

export type GetUsuarioByIdOutput= {
    id: string | undefined;
    nome: string;
    pessoa: pessoa;
    
}