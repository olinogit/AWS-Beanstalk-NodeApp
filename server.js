const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

// Middleware pour servir le fichier HTML statique
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'front/index.html'));
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
