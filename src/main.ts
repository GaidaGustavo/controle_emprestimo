import express from 'express';
import { ItemController } from './application/controller/item-controller';
import { ItemRepositoryMemory } from './infra/repository/memory/item-repository-memory';
import { TipoItemRepositoryMemory } from './infra/repository/memory/tipo-item-repository-memory';
import { TipoItemController } from './application/controller/tipo-item-controller';
import { PessoaController } from './application/controller/pessoa-controller';
import { PessoaRepositoryMemory} from './infra/repository/memory/pessoa-repository-memory';

//chama librare
const app = express();
const port = 3002;

app.use(express.json())
//cria uma pagina e escreva a resposta
app.get('/', (request, response) => {
    response.send("Estoy aqui")
})

//define a porta para iniciar servidor
app.listen(port, () => {
    console.log("Servidor iniciado na porta " +port)
})



//==============Item==============

const itemRepositoryMemory = new ItemRepositoryMemory();
const tipoItemRepositoryMemory = new TipoItemRepositoryMemory
const itemController = new ItemController(itemRepositoryMemory, tipoItemRepositoryMemory);

app.get('/itens', (request, response) => {
    response.send(itemController.getAll({}));
})

app.post('/itens', (request, response) => {
    response.send(itemController.create(request.body));
})

//==============Tipo Item==============

//const tipoItemRepositoryMemory = new TipoItemRepositoryMemory

const tipoItemController = new TipoItemController(tipoItemRepositoryMemory)

app.get('/tipoItens', (request, response) => {
    response.send(tipoItemController.getAll({}));
})

app.post('/tipoItens', (request, response) => {
    response.send(tipoItemController.create(request.body));
})

//==============Pessoa==============

const pessoaRepositoryMemory = new PessoaRepositoryMemory
const pessoaController = new PessoaController(pessoaRepositoryMemory)

app.get('/pessoas', (request, response) => {
    response.send(pessoaController.getAll({}));
})

app.post('/pessoas', (request, response) => {
    response.send(pessoaController.create(request.body));
})
