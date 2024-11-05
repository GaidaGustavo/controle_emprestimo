import express from 'express';
import { ItemRepositoryMemory } from '../repository/memory/item-repository-memory';
import { TipoItemRepositoryMemory } from '../repository/memory/tipo-item-repository-memory';
import { ItemController } from '../../application/controller/item-controller';

//chama librare
const app = express();
const port = 3002;
app.use(express.json())

//define a porta para iniciar servidor
app.listen(port, () => {
    console.log("Servidor iniciado na porta " +port)
})

const itemRepositoryMemory = new ItemRepositoryMemory();
const tipoItemRepositoryMemory = new TipoItemRepositoryMemory
const itemController = new ItemController(itemRepositoryMemory, tipoItemRepositoryMemory);

app.get('/itens', async (request, response) => {
    response.send(await itemController.getAll({}));
})

app.post('/itens', async (request, response) => {
    response.send(await itemController.create(request.body));
})

app.get('/itens/:id', async (request, response) => {
    const id = request.params.id;
    response.send(await itemController.getById({id}));
})

app.delete('/itens/:id', async (request, response) => {
    const id = request.params.id;
    response.send(await itemController.delete({id}));
})

app.put('/itens/:id', async (request, response) => {
    const id = request.params.id;
    const body = request.body;
    
    const newItem = {
        id,
        ...body
    }
    response.send(await itemController.update(newItem));
})