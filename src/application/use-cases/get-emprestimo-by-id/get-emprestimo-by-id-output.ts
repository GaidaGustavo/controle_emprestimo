import { ItemEPI } from "../../../domain/entity/value-object/item-epi";

type tipoItem = {
    id: string | undefined;
    nome: string;
}

type item = {
    id: string | undefined;
    nome: string;
    tipoItem: tipoItem;
    itemEPI: ItemEPI | undefined;
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
    documento: string;
}

export type GetEmprestimoByIdOutput = {
    id: string | undefined;
    item: item;
    dataEmprestimo: Date | undefined;
    dataDevolucao: Date | undefined;
    pessoa: pessoa;
    usuario: usuario;
}