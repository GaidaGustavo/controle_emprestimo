type tipoItem = {
    id: string | undefined;
    nome: string;
}

type item = {
    id: string | undefined;
    nome: string;
    tipoItem: tipoItem;
}

type usuario = {
    id: string | undefined;
    username: string;
    senha: string | undefined;
    pessoa: pessoa;

}

type pessoa = {
    id: string | undefined;
    nome: string;
}

export type GetEmprestimoByIdOutput = {
    id: string | undefined;
    item: item;
    dataEmprestimo: Date | undefined;
    dataDevolucao: Date | undefined;
    pessoa: pessoa;
    usuario: usuario;
}