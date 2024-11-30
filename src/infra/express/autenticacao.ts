import { verify } from "jsonwebtoken";

export const autenticacao = (request: any, response: any, next: any): Promise<any> => {
    console.log('1')
    if (!request.headers || !request.headers['access-token']) {
        return response.status(403).json({
            message: 'Token é obrigatório'
        });
    }
    const token = request.headers['access-token'];
    try {
        let data;
        try {
            data = verify(token, 'teste');// @ts-ignore 
            if (!data.username && !data.password) {
                throw new Error("Token inválido");
                
            }
        } catch (e) {
            throw new Error("Token inválido");
        }
        request.body.session = data;
        return next();
    } catch (e) {
        return response.status(401).json({ // @ts-ignore
            message: e.message
        });
    }
}