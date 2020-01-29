const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Ola Mundo!');
});

app.listen(3001);