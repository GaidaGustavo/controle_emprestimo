import express from 'express';
import { PessoaRepositoryMemory } from '../repository/memory/pessoa-repository-memory';
import { PessoaController } from '../../application/controller/pessoa-controller';

//chama librare
const app = express();
const port = 3002;
app.use(express.json())

//define a porta para iniciar servidor
app.listen(port, () => {
    console.log("Servidor iniciado na porta " +port)
})

const pessoaRepositoryMemory = new PessoaRepositoryMemory
const pessoaController = new PessoaController(pessoaRepositoryMemory)

app.get('/pessoas', async (request, response) => {
    response.send(await pessoaController.getAll({}));
})

app.post('/pessoas', async(request, response) => {
    response.send(await pessoaController.create(request.body));
})

app.get('/pessoas/:id', async (request, response) => {
    const id = request.params.id;
   response.send(await pessoaController.getById({id}));
})

app.put('/pessoas/:id', async (request, response) => {
    const id = request.params.id;
    const body = request.body;
    
    const newPessoa = {
        id,
        ...body
    }
    response.send(await pessoaController.update(newPessoa));
})

app.delete('/pessoas/:id', async (request, response) => {
    const id = request.params.id;
   response.send(await pessoaController.delete({id}));
})
