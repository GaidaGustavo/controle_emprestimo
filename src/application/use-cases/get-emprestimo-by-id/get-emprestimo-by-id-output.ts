type tipoItem = {
    id: string;
    nome: string;
}

type item = {
    id: string | undefined;
    nome: string;
    tipoItem: tipoItem;
}

type pessoa = {
    id: string;
    nome: string;
}

export type GetEmprestimoByIdOutput = {
    id: string;
    item: item;
    dataEmprestimo: Date;
    dataDevolucao: Date | undefined;
    pessoa: pessoa;
}