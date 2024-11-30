type pessoa = {
    id: string | undefined;
    nome: string;
    documento: string;
}

export type GetUsuarioByUsernameOutput= {
    id: string | undefined;
    nome: string;
    pessoa: pessoa;
    
}