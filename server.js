// server.js
const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/eclairia';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connecté à MongoDB !'))
  .catch((err) => console.error('Erreur de connexion MongoDB :', err));

// Exemple d'utilisation du modèle User
const User = require('./models/User');

// Pour tester la connexion, décommentez :
// User.find().then(users => console.log(users));

// Ce fichier ne lance pas de serveur HTTP, il sert juste à la connexion MongoDB.
// Pour une API, ajoutez Express ou un autre framework ici.
