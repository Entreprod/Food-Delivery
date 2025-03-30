const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const jwt = require('jsonwebtoken');
const stripe = require('stripe')('sk_test_XXXXXXXXXXXXXXXXXXXXXXXX');
const restaurantRoutes = require('./routes/restaurantRoutes');
const orderRoutes = require('./routes/orderRoutes');

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

const orders = [];

// Supprimé : Toute configuration ou connexion MongoDB/Mongoose

// Routes
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});