const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//Iniciando o App
const app = express();

//Iniciando o DB      
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

requireDir("./src/models");

const Product = mongoose.model('Product');

//Primeira Rota
app.get('/', (req, res) => {
    Product.create({ title: 'React Nactive', description: 'My first description', url: 'http//google.com'});
    return res.send('Ola Mundo!');
});

app.listen(3001);