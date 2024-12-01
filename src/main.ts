import express from 'express';
import { ItemController } from './application/controller/item-controller';
import { TipoItemController } from './application/controller/tipo-item-controller';
import { PessoaController } from './application/controller/pessoa-controller';
import { UsuarioController } from './application/controller/usuario-controller';
import { EmprestimoController } from './application/controller/emprestimo-controller';
import { PostgresConnection } from './infra/config-database/postgres-connection';
import { DatabaseRepositoryFactory } from './infra/config-database/database-repository-factory';
import { LoginController } from './application/controller/loginControler';
import { autenticacao } from './infra/express/autenticacao';
import cors from 'cors';
import path from 'path';

const app = express();
const port = 3011;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true 
}));

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, access-token');
    next();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port);

const dadosconexao = {
    user: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'dev@123',
    database: process.env.DB_DATABASE || 'graxa',
    host: process.env.DB_HOST || '159.89.46.66',
    port: process.env.DB_PORT || '5432'  
};

const connectionPostgreSQL = new PostgresConnection(dadosconexao);
const repositoryFactory = new DatabaseRepositoryFactory(connectionPostgreSQL);

//==============Item==============
const itemController = new ItemController(repositoryFactory);

app.get('/itens', autenticacao, async (request, response) => {
    response.send(await itemController.getAll({}));
});

app.post('/itens', autenticacao, async (request, response) => {
    response.send(await itemController.create(request.body));
});

app.get('/itens/:id', autenticacao, async (request, response) => {
    const id = request.params.id;
    response.send(await itemController.getById({ id }));
});

app.delete('/itens/:id', autenticacao, async (request, response) => {
    const id = request.params.id;
    //response.send(await itemController.delete({ id }));
    response.status(501).json({ message: 'Método não implementado' });
});

app.put('/itens/:id', autenticacao, async (request, response) => {
    const id = request.params.id;
    const body = request.body;
    const newItem = { id, ...body };
    response.send(await itemController.update(newItem));
});

//==============Tipo Item==============
const tipoItemController = new TipoItemController(repositoryFactory);

app.get('/tipoItens', autenticacao, async (request, response) => {
    response.send(await tipoItemController.getAll({}));
});

app.post('/tipoItens', autenticacao, async (request, response) => {
    response.send(await tipoItemController.create(request.body));
});

app.get('/tipoItens/:id', autenticacao, async (request, response) => {
    const id = request.params.id;
    response.send(await tipoItemController.getByID({ id }));
});

app.put('/tipoItens/:id', autenticacao, async (request, response) => {
    const id = request.params.id;
    const body = request.body;
    const newTipoItem = { id, ...body };
    response.send(await tipoItemController.update(newTipoItem));
});

app.delete('/tipoItens/:id', autenticacao, async (request, response) => {
    const id = request.params.id;
    //response.send(await tipoItemController.delete({ id }));
    response.status(501).json({ message: 'Método não implementado' });
});

//==============Pessoa==============
const pessoaController = new PessoaController(repositoryFactory);

app.get('/pessoas', autenticacao, async (request, response) => {
    response.send(await pessoaController.getAll({}));
});

app.post('/pessoas', autenticacao, async (request, response) => {
    response.send(await pessoaController.create(request.body));
});

app.get('/pessoas/:id', autenticacao, async (request, response) => {
    const id = request.params.id;
    response.send(await pessoaController.getById({ id }));
});

app.put('/pessoas/:id', autenticacao, async (request, response) => {
    const id = request.params.id;
    const body = request.body;
    const newPessoa = { id, ...body };
    response.send(await pessoaController.update(newPessoa));
});

app.delete('/pessoas/:id', autenticacao, async (request, response) => {
    const id = request.params.id;
    //response.send(await pessoaController.delete({ id }));
    response.status(501).json({ message: 'Método não implementado' });
});

//==============Usuário==============
const usuarioController = new UsuarioController(repositoryFactory);

app.get('/usuario', autenticacao, async (request, response) => {
    response.send(await usuarioController.getAll({}));
});

app.post('/usuario', autenticacao, async (request, response) => {
    response.send(await usuarioController.create(request.body));
});

app.get('/usuario/:id', autenticacao, async (request, response) => {
    const id = request.params.id;
    response.send(await usuarioController.getById({ id }));
});

app.delete('/usuario/:id', autenticacao, async (request, response) => {
    const id = request.params.id;
    //response.send(await usuarioController.delete({ id }));
    response.status(501).json({ message: 'Método não implementado' });
});

app.put('/usuario/:id', autenticacao, async (request, response) => {
    const id = request.params.id;
    const body = request.body;
    const newUsuario = { id, ...body };
    response.send(await usuarioController.update(newUsuario));
});

app.get('/usuario/username', autenticacao, async (request, response) => {
    const username = request.body.username;
    response.send(await usuarioController.getByUsername({ username }));
});

//==============Emprestimo==============
const emprestimoController = new EmprestimoController(repositoryFactory);

app.get('/emprestimo', autenticacao, async (request, response) => {
    response.send(await emprestimoController.getAll({}));
});

app.post('/emprestimo', autenticacao, async (request, response) => {
    response.send(await emprestimoController.create(request.body));
});

app.get('/emprestimo/:id', autenticacao, async (request, response) => {
    const id = request.params.id;
    response.send(await emprestimoController.getById({ id }));
});

app.delete('/emprestimo/:id', autenticacao, async (request, response) => {
    const id = request.params.id;
    response.send(await emprestimoController.delete({ id }));
});

app.put('/emprestimo/:id', autenticacao, async (request, response) => {
    const id = request.params.id;
    const body = request.body;
    const newEmprestimo = { id, ...body };
    response.send(await emprestimoController.update(newEmprestimo));
});

//==============Login==============
const loginController = new LoginController(repositoryFactory);

app.post('/login', async (request, response) => {
    response.send(await loginController.login(request.body));
});
