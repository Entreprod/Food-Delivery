const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

// Routes pour les restaurants
router.get('/', restaurantController.getAllRestaurants);
router.get('/:id', restaurantController.getRestaurantById);
router.post('/', restaurantController.createRestaurant);
router.put('/:id', restaurantController.updateRestaurant);
router.delete('/:id', restaurantController.deleteRestaurant);

module.exports = router; 