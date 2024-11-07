import { Pessoa } from "../../../domain/entity/pessoa";
import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { GetAllEmprestimosInput } from "./get-all-emprestimos-input";
import { GetAllEmprestimosOutput } from "./get-all-emprestimos-output";


export class GetAllEmprestimosUseCase {
    private emprestimoRepository: EmprestimoRepository;
    constructor(private repositoryFactory: RepositoryFactory
    ) {
        this.emprestimoRepository = repositoryFactory.createEmprestimoRepository();
    }
    
    async execute(input: GetAllEmprestimosInput):Promise<GetAllEmprestimosOutput[]> {
        const emprestimos = await this.emprestimoRepository.getAll();

        const output: GetAllEmprestimosOutput[] = [];

        for(const emprestimo of emprestimos){
            output.push(
            {
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
            )
        }

        return output;
    }
}