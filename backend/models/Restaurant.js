const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  cuisineType: { type: String, required: true },
  menu: [{
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String }
  }]
});

module.exports = mongoose.model('Restaurant', restaurantSchema); 