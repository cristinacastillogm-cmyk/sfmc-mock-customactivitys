const express = require('express');
const path = require('path');
const app = express();

// 1. ESTA ES LA LÍNEA MÁGICA: Permite que Salesforce vea el config.json
app.use(express.static(__dirname));

// 2. Esta línea permite que se vean los archivos dentro de la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// 3. Soporte para leer datos JSON que envíe Salesforce
app.use(express.json());

// 4. Rutas obligatorias para que Journey Builder no de error
app.post('/execute', (req, res) => {
    console.log('Ejecutando actividad...');
    res.status(200).send({ status: 'ok' });
});

app.post('/save', (req, res) => {
    res.status(200).send({ status: 'ok' });
});

app.post('/publish', (req, res) => {
    res.status(200).send({ status: 'ok' });
});

app.post('/validate', (req, res) => {
    res.status(200).send({ status: 'ok' });
});

// 5. Configuración del puerto para Render
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor funcionando en puerto ${port}`);
});
