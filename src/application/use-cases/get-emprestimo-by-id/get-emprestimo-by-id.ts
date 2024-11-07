import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { GetEmprestimoByIdInput } from "./get-emprestimo-by-id-input";
import { GetEmprestimoByIdOutput } from "./get-emprestimo-by-id-output";


export class GetEmprestimoByIdUseCase {
    private emprestimoRepository: EmprestimoRepository;
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.emprestimoRepository = repositoryFactory.createEmprestimoRepository();
    }

    async execute(input: GetEmprestimoByIdInput): Promise<GetEmprestimoByIdOutput> {
        const emprestimo = await this.emprestimoRepository.getById(input.id);

        const output: GetEmprestimoByIdOutput = {
            id: emprestimo.getID(),
            item: {
                id: emprestimo.getItem().getID(),
                nome: emprestimo.getItem().getName(),
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
            },
            usuario: {
                id: emprestimo.getUsuario().getID(),
                username: emprestimo.getUsuario().getName(),
                senha: emprestimo.getUsuario().getSenha(),
                pessoa: {
                    id: emprestimo.getUsuario().getPessoa().getID(),
                    nome: emprestimo.getUsuario().getPessoa().getName()
                }
            }
        }


        return output;
    }
}