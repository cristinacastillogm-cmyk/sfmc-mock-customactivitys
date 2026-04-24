const express = require('express');
const path = require('path');
const app = express();

// Esta línea sirve los archivos que están en la raíz (como config.json)
app.use(express.static(path.join(__dirname, '/')));

// Esta línea sirve los archivos que están en la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

// Ruta para ver si el servidor responde
app.get('/', (req, res) => {
    res.send('El servidor está vivo. Intenta entrar a /config.json');
});

app.post('/execute', (req, res) => res.status(200).send({ status: 'ok' }));
app.post('/save', (req, res) => res.status(200).send({ status: 'ok' }));
app.post('/publish', (req, res) => res.status(200).send({ status: 'ok' }));
app.post('/validate', (req, res) => res.status(200).send({ status: 'ok' }));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor en puerto ${port}`);
});
