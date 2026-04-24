const express = require('express');
const app = express();

app.use(express.json());

// endpoint que usa SFMC
app.post('/execute', (req, res) => {
  console.log('Datos recibidos:', JSON.stringify(req.body, null, 2));
  res.status(200).send("OK");
});

// servir archivos (config.json, html...)
app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor funcionando'));