const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Données en mémoire
const products = [
  {
    id: 1,
    name: "Pizza Margherita",
    price: 12.99,
    description: "Tomate, mozzarella, basilic",
    image: "/pizza.jpg"
  },
  {
    id: 2,
    name: "Burger Classic",
    price: 9.99,
    description: "Bœuf, salade, tomate, oignon",
    image: "/burger.jpg"
  },
  {
    id: 3,
    name: "Sushi Mix",
    price: 15.99,
    description: "Assortiment de sushis",
    image: "/sushi.jpg"
  }
];

// Données en mémoire pour les utilisateurs et commandes
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password123' }
];

const orders = [];

// Middleware pour simuler l'authentification
const authenticate = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Accès refusé' });

  try {
    const user = users.find(u => u.id === parseInt(token)); // Simule un utilisateur
    if (!user) throw new Error();
    req.user = user;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Token invalide' });
  }
};

// Routes
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Produit non trouvé" });
  res.json(product);
});

// Route pour créer une commande
app.post('/api/orders', authenticate, (req, res) => {
  const { items, total, address } = req.body;
  if (!items || !total || !address) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }
  const order = {
    id: orders.length + 1,
    user: req.user.id,
    items: req.body.items,
    total: req.body.total,
    address: req.body.address,
    status: 'processing',
    createdAt: new Date()
  };
  orders.push(order);
  res.status(201).json(order);
});

// Route pour récupérer les commandes d'un utilisateur
app.get('/api/orders', authenticate, (req, res) => {
  const userOrders = orders.filter(order => order.user === req.user.id);
  res.json(userOrders);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});