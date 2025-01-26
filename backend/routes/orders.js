const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Routes pour les commandes
router.post('/', orderController.createOrder);
router.get('/:id', orderController.getOrderById);
router.get('/user/:userId', orderController.getUserOrders);
router.put('/:id', orderController.updateOrderStatus);

module.exports = router; 