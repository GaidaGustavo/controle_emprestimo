type tipoItem = {
    id: string | undefined;
    nome: string;
}

type item = {
    id: string | undefined;
    nome: string;
    tipoItem: tipoItem;
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
}