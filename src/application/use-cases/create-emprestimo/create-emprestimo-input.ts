type itensId = {
    id: string;
}

export type CreateEmprestimoInput = {
    id: string | undefined;
    pessoaId: string;
    usuarioId: string;
    itensId: itensId[];
}
