import express from 'express';
import UsuarioRepositoryMemory from '../repository/memory/usuario-repository-memory';
import { UsuarioController } from '../../application/controller/usuario-controller';
import { PessoaRepositoryMemory } from '../repository/memory/pessoa-repository-memory';

//chama librare
const app = express();
const port = 3002;
app.use(express.json())

//define a porta para iniciar servidor
app.listen(port, () => {
    console.log("Servidor iniciado na porta " +port)
})

const usuarioRepositoryMemory = new UsuarioRepositoryMemory
const pessoaRepositoryMemory = new PessoaRepositoryMemory
const usuarioController = new UsuarioController(usuarioRepositoryMemory, pessoaRepositoryMemory)

app.get('/usuario', async (request, response) => {
    response.send(await usuarioController.getAll({}));
})

app.post('/usuario', async (request, response) => {
    response.send(await usuarioController.create(request.body));
})

app.get('/usuario/:id', async (request, response) => {
    const id = request.params.id;
   response.send(await usuarioController.getById({id}));
})

app.delete('/usuario/:id', async (request, response) => {
    const id = request.params.id;
   response.send(await usuarioController.delete({id}));
})

app.put('/usuario/:id', async (request, response) => {
    const id = request.params.id;
    const body = request.body;
    
    const newUsuario = {
        id,
        ...body
    }
    response.send(await usuarioController.update(newUsuario));
})