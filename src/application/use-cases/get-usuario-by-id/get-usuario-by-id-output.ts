type pessoa = {
    id: string;
    nome: string;
}

export type GetUsuarioByIdOutput= {
    id: string;
    nome: string;
    pessoa: pessoa;
    
}