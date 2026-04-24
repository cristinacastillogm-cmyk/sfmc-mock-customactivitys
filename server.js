const express = require('express');
const path = require('path');
const app = express();

// ESTA LÍNEA ES LA CLAVE: Permite que se vea el config.json
app.use(express.static(__dirname));

// Esta permite que se vea lo que hay en la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

app.post('/execute', (req, res) => {
    res.status(200).send('Execute');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});
