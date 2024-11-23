import express from "express";
import pgp from "pg-promise";
import cors from "cors";

const host = "localhost";
const database = "postgres";
const username = "postgres";
const password= "123";
const porta = 5432;

const conexao = pgp()({
    host: host,
    database: database,
    user: username,
    password: password,
    port: porta
})

const app = express();
app.use(cors());
app.use(express.json());


app.get('*', (req, res, next) => {
    res.header("Access-Controll-Allow-Origin", '*');
    next();
})

app.get('/filmes', async (req, res) => {
    const filmes = await conexao.query('select * from filmes');
    res.json(filmes);
})

app.post('/filmes', async (req,res) => {
    await conexao.query('insert into filmes (nome, status, trailer) values ($1,$2,$3)',
        [req.body.nome, req.body.status, req.body.trailer]
    );
    res.json({mesage:"cadastrado"});
})

app.put('/filmes', async (req,res) => {
    await conexao.query('update filmes set nome = $1, status = $2, trailer = $3 where id = $4',
        [req.body.nome, req.body.status, req.body.trailer, req.body.id]
    );
    res.json({mesage:"Atualizado"});
})

app.listen('5000', () => {
    console.log("iniciou");
});