const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const jwt = require('jsonwebtoken');
const stripe = require('stripe')('sk_test_XXXXXXXXXXXXXXXXXXXXXXXX');

// Middleware
app.use(cors());
app.use(express.json());

// Données des restaurants (temporaires)
const restaurants = [
  { id: 1, name: 'Pizza Hut', cuisine: 'Pizza', rating: 4.5, deliveryTime: '30 min' },
  { id: 2, name: 'Sushi Palace', cuisine: 'Sushi', rating: 4.7, deliveryTime: '25 min' },
  { id: 3, name: 'Burger King', cuisine: 'Burgers', rating: 4.3, deliveryTime: '20 min' },
];

const users = [
  { id: 1, email: 'user@example.com', password: 'password123' }
];

// Route pour obtenir les restaurants
app.get('/api/restaurants', (req, res) => {
  res.json(restaurants);
});

// Route de connexion
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Email ou mot de passe incorrect' });
  }
});

// Middleware pour vérifier le token
const authenticate = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Accès refusé' });

  try {
    const verified = jwt.verify(token, 'secret_key');
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Token invalide' });
  }
};

// Route protégée (exemple)
app.get('/api/protected', authenticate, (req, res) => {
  res.json({ message: 'Accès autorisé', user: req.user });
});

// Route de paiement
app.post('/api/create-payment-intent', authenticate, async (req, res) => {
  const { amount } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100, // Montant en cents
    currency: 'eur',
  });

  res.json({ clientSecret: paymentIntent.client_secret });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
}); 