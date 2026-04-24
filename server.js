const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, 'public')));

// Lifecycle endpoints requeridos por SFMC Journey Builder
app.post('/execute', (req, res) => {
  console.log('Execute:', JSON.stringify(req.body, null, 2));
  res.status(200).json({ status: 'ok' });
});

app.post('/save', (req, res) => {
  console.log('Save:', JSON.stringify(req.body, null, 2));
  res.status(200).json({ status: 'ok' });
});

app.post('/publish', (req, res) => {
  console.log('Publish:', JSON.stringify(req.body, null, 2));
  res.status(200).json({ status: 'ok' });
});

app.post('/validate', (req, res) => {
  console.log('Validate:', JSON.stringify(req.body, null, 2));
  // Debe devolver { valid: true } para que SFMC no marque error
  res.status(200).json({ valid: true });
});

app.post('/stop', (req, res) => {
  console.log('Stop:', JSON.stringify(req.body, null, 2));
  res.status(200).json({ status: 'ok' });
});

// config.json accesible en la raíz
app.get('/config.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'config.json'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor funcionando en puerto ${PORT}`));
