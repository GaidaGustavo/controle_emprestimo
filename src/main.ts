import express from 'express';
import { ItemController } from './application/controller/item-controller';
import { ItemRepositoryMemory } from './infra/repository/memory/item-repository-memory';
import { TipoItemRepositoryMemory } from './infra/repository/memory/tipo-item-repository-memory';
import { TipoItemController } from './application/controller/tipo-item-controller';
import { PessoaController } from './application/controller/pessoa-controller';
import { PessoaRepositoryMemory} from './infra/repository/memory/pessoa-repository-memory';
import UsuarioRepositoryMemory from './infra/repository/memory/usuario-repository-memory';
import { UsuarioController } from './application/controller/usuario-controller';
import { EmprestimoController } from './application/controller/emprestimo-controller';
import EmprestimoRepositoryMEmory from './infra/repository/memory/emprestimo-repository-memory';

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

app.get('/itens/:id', (request, response) => {
    const id = request.params.id;
    response.send(itemController.getById({id}));
})

app.delete('/itens/:id', (request, response) => {
    const id = request.params.id;
    response.send(itemController.delete({id}));
})

app.put('/itens/:id', (request, response) => {
    const id = request.params.id;
    const body = request.body;
    
    const newItem = {
        id,
        ...body
    }
    response.send(itemController.update(newItem));
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

app.get('/tipoItens/:id', (request, response) => {
    const id = request.params.id;
   response.send(tipoItemController.getByID({id}));
})

app.put('/tipoItens/:id', (request, response) => {
    const id = request.params.id;
    const body = request.body;
    
    const newTipoItem = {
        id,
        ...body
    }
    response.send(tipoItemController.update(newTipoItem));
})

app.delete('/tipoItens/:id', (request, response) => {
    const id = request.params.id;
   response.send(tipoItemController.delete({id}));
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

app.get('/pessoas/:id', (request, response) => {
    const id = request.params.id;
   response.send(pessoaController.getById({id}));
})

app.put('/pessoas/:id', (request, response) => {
    const id = request.params.id;
    const body = request.body;
    
    const newPessoa = {
        id,
        ...body
    }
    response.send(pessoaController.update(newPessoa));
})

app.delete('/pessoas/:id', (request, response) => {
    const id = request.params.id;
   response.send(pessoaController.delete({id}));
})

//==============Usuário==============

const usuarioRepositoryMemory = new UsuarioRepositoryMemory
//const pessoaRepositoryMemory = new PessoaRepositoryMemory
const usuarioController = new UsuarioController(usuarioRepositoryMemory, pessoaRepositoryMemory)

app.get('/usuario', (request, response) => {
    response.send(usuarioController.getAll({}));
})

app.post('/usuario', (request, response) => {
    response.send(usuarioController.create(request.body));
})

app.get('/usuario/:id', (request, response) => {
    const id = request.params.id;
   response.send(usuarioController.getById({id}));
})

app.delete('/usuario/:id', (request, response) => {
    const id = request.params.id;
   response.send(usuarioController.delete({id}));
})

app.put('/usuario/:id', (request, response) => {
    const id = request.params.id;
    const body = request.body;
    
    const newUsuario = {
        id,
        ...body
    }
    response.send(usuarioController.update(newUsuario));
})

//==============Emprestimo==============

//const itemRepositoryMemory = new ItemRepositoryMemory();
//const usuarioRepositoryMemory = new UsuarioRepositoryMemory
//const pessoaRepositoryMemory = new PessoaRepositoryMemory
const emprestimoRepositoryMemory = new EmprestimoRepositoryMEmory;
const emprestimoController = new EmprestimoController(emprestimoRepositoryMemory, itemRepositoryMemory, pessoaRepositoryMemory, usuarioRepositoryMemory)

app.get('/emprestimo', (request, response) => {
    response.send(emprestimoController.getAll({}));
})

app.post('/emprestimo', (request, response) => {
    response.send(emprestimoController.create(request.body));
})

app.get('/emprestimo/:id', (request, response) => {
    const id = request.params.id;
   response.send(emprestimoController.getById({id}));
})

app.delete('/emprestimo/:id', (request, response) => {
    const id = request.params.id;
   response.send(emprestimoController.delete({id}));
})

app.put('/emprestimo/:id', (request, response) => {
    const id = request.params.id;
    const body = request.body;
    
    const newEmprestimo = {
        id,
        ...body
    }
    response.send(emprestimoController.update(newEmprestimo));
})