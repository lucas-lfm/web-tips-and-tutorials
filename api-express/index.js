const express = require('express');
const app = express();
app.use(express.json());

const port = 3000;

const produtos = [
    { id: 1, nome: 'Produto A', preco: 10.0 },
    { id: 2, nome: 'Produto B', preco: 20.0 }
];

app.get('/produtos', (req, res) => {
    res.status(200).json(produtos);
});

app.post('/produtos', (req, res) => {
    const novoProduto = req.body;
    novoProduto.id = produtos.length ? produtos[produtos.length - 1].id + 1 : 1;
    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});