import express from 'express';
import { ItemRepositoryMemory } from '../repository/memory/item-repository-memory';
import UsuarioRepositoryMemory from '../repository/memory/usuario-repository-memory';
import { PessoaRepositoryMemory } from '../repository/memory/pessoa-repository-memory';
import EmprestimoRepositoryMemory from '../repository/memory/emprestimo-repository-memory';
import { EmprestimoController } from '../../application/controller/emprestimo-controller';

//chama librare
const app = express();
const port = 3002;
app.use(express.json())

//define a porta para iniciar servidor
app.listen(port, () => {
    console.log("Servidor iniciado na porta " +port)
})

const itemRepositoryMemory = new ItemRepositoryMemory();
const usuarioRepositoryMemory = new UsuarioRepositoryMemory
const pessoaRepositoryMemory = new PessoaRepositoryMemory
const emprestimoRepositoryMemory = new EmprestimoRepositoryMemory;
const emprestimoController = new EmprestimoController(emprestimoRepositoryMemory, itemRepositoryMemory, pessoaRepositoryMemory, usuarioRepositoryMemory)

app.get('/emprestimo', async (request, response) => {
    response.send(await emprestimoController.getAll({}));
})

app.post('/emprestimo', async (request, response) => {
    response.send(await emprestimoController.create(request.body));
})

app.get('/emprestimo/:id', async (request, response) => {
    const id = request.params.id;
   response.send(await emprestimoController.getById({id}));
})

app.delete('/emprestimo/:id', async (request, response) => {
    const id = request.params.id;
   response.send(await emprestimoController.delete({id}));
})

app.put('/emprestimo/:id', async (request, response) => {
    const id = request.params.id;
    const body = request.body;
    
    const newEmprestimo = {
        id,
        ...body
    }
    response.send(await emprestimoController.update(newEmprestimo));
})