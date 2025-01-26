// Création du fichier src/app.js pour l'application Uber Eats

// Importation du module Express
const express = require('express');
const app = express();
const PORT = 3000;

// Route principale
app.get('/', (req, res) => {
  res.send('Bienvenue sur Uber Eats!');
});

// Ecoute du serveur sur le port 3000
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
}); 