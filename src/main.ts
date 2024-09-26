import express from 'express';
import { ItemController } from './application/controller/item-controller';
import { ItemRepositoryMemory } from './infra/repository/memory/item-repository-memory';
import { TipoItemRepositoryMemory } from './infra/repository/memory/tipo-item-repository-memory';

//chama librare
const app = express();
const port = 3002;

app.use(express.json())
//cria uma pagina e escreva a resposta
app.get('/', (request, response) => {
    response.send("Estoy aqui")
})

/*
{
    numero1: 2,
    numero2: 3
}
*/

/*
app.post('/soma', (request, response) => {
    const body = request.body;
    const numero1 = body.numero1
    const numero2 = body.numero2
    const resultado = {
        resultado: numero1 + numero2
    }
    response.send(resultado)
})
*/

const itemRepositoryMemory = new ItemRepositoryMemory();
const tipoItemRepositoryMemory = new TipoItemRepositoryMemory
const itemController = new ItemController(itemRepositoryMemory, tipoItemRepositoryMemory);
app.get('/itens', (request, response) => {
    response.send(itemController.getAll({}));
})

app.post('/itens', (request, response) => {
    response.send(itemController.create(request.body));
})


//define a porta para iniciar servidor
app.listen(port, () => {
    console.log("Servidor iniciado na porta " +port)
})