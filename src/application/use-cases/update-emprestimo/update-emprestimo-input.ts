export type UpdateEmprestimoInput = {
    id: string;
    itemId: string;
    pessoaId: string;
    usuarioId: string;
    dataEmprestimo: Date;
    dataDevolucao: Date | undefined;
}