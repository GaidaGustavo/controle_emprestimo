import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { GetAllEmprestimosInput } from "./get-all-emprestimos-input";
import { GetAllEmprestimosOutput } from "./get-all-emprestimos-output";

export class GetAllEmprestimosUseCase {
    private emprestimoRepository: EmprestimoRepository;

    constructor(private repositoryFactory: RepositoryFactory) {
        this.emprestimoRepository = repositoryFactory.createEmprestimoRepository();
    }

    async execute(input: GetAllEmprestimosInput): Promise<GetAllEmprestimosOutput[]> {
        try {
            const emprestimos = await this.emprestimoRepository.getAll();

            if (emprestimos.length == 0) {
                throw new Error('Nenhum dado encontrado');
            }

            const output: GetAllEmprestimosOutput[] = emprestimos.map((emprestimo) => ({
                id: emprestimo.getID(),
                item: {
                    id: emprestimo.getItem().getID(),
                    nome: emprestimo.getItem().getName(),
                    itemEPI: emprestimo.getItem().getItemEPI(),
                    tipoItem: {
                        id: emprestimo.getItem().getTipoItem().getID(),
                        nome: emprestimo.getItem().getTipoItem().getName(),
                    },
                },
                dataEmprestimo: emprestimo.getdataEmprestimo(),
                dataDevolucao: emprestimo.getdataDevolucao(),
                pessoa: {
                    id: emprestimo.getPessoa().getID(),
                    nome: emprestimo.getPessoa().getName(),
                    documento: emprestimo.getPessoa().getDocumento(),
                },
                usuario: {
                    id: emprestimo.getUsuario().getID(),
                    username: emprestimo.getUsuario().getName(),
                    senha: emprestimo.getUsuario().getSenha(),
                    pessoa: {
                        id: emprestimo.getUsuario().getPessoa().getID(),
                        nome: emprestimo.getUsuario().getPessoa().getName(),
                        documento: emprestimo.getUsuario().getPessoa().getDocumento(),
                    },
                },
            }));

            return output;
        } catch (error) {
            throw new Error('Erro ao obter empréstimos');
        }
    }
}
