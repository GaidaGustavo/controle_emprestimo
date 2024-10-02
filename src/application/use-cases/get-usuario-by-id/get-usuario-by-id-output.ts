type pessoa = {
    id: string | undefined;
    nome: string;
}

export type GetUsuarioByIdOutput= {
    id: string | undefined;
    nome: string;
    pessoa: pessoa;
    
}