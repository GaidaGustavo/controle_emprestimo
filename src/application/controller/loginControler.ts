import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { LoginUseCase } from "../use-cases/login/login";
import { LoginUseCaseInput } from "../use-cases/login/login-input";

export class LoginController{
    constructor(private repositoryFactory: RepositoryFactory) {}
    
    async login(input: LoginUseCaseInput){
        try {
            const loginUseCase = new LoginUseCase(
                this.repositoryFactory
            );
            return await loginUseCase.execute(input);
        } catch (e: any) {
            return {
                message: e.message
            }
        }
    }
}