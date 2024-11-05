import express from 'express';
import { TipoItemRepositoryMemory } from '../repository/memory/tipo-item-repository-memory';
import { TipoItemController } from '../../application/controller/tipo-item-controller';

//chama librare
const app = express();
const port = 3002;
app.use(express.json())

//define a porta para iniciar servidor
app.listen(port, () => {
    console.log("Servidor iniciado na porta " +port)
})

const tipoItemRepositoryMemory = new TipoItemRepositoryMemory
const tipoItemController = new TipoItemController(tipoItemRepositoryMemory)

app.get('/tipoItens', async (request, response) => {
    response.send(await tipoItemController.getAll({}));
})

app.post('/tipoItens', async (request, response) => {
    response.send(await tipoItemController.create(request.body));
})

app.get('/tipoItens/:id', async (request, response) => {
    const id = request.params.id;
   response.send(await tipoItemController.getByID({id}));
})

app.put('/tipoItens/:id', async (request, response) => {
    const id = request.params.id;
    const body = request.body;
    
    const newTipoItem = {
        id,
        ...body
    }
    response.send(await tipoItemController.update(newTipoItem));
})

app.delete('/tipoItens/:id', async (request, response) => {
    const id = request.params.id;
   response.send(await tipoItemController.delete({id}));
})