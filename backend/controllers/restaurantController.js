const restaurants = require('../data/restaurants'); // Import local data

exports.getAllRestaurants = (req, res) => {
  res.json(restaurants);
};

exports.getRestaurantById = (req, res) => {
  const restaurant = restaurants.find(r => r.id === parseInt(req.params.id));
  if (!restaurant) return res.status(404).json({ message: 'Restaurant non trouvé' });
  res.json(restaurant);
};

exports.createRestaurant = (req, res) => {
  const newRestaurant = { id: restaurants.length + 1, ...req.body };
  restaurants.push(newRestaurant);
  res.status(201).json(newRestaurant);
};

exports.updateRestaurant = (req, res) => {
  const index = restaurants.findIndex(r => r.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Restaurant non trouvé' });
  restaurants[index] = { ...restaurants[index], ...req.body };
  res.json(restaurants[index]);
};

exports.deleteRestaurant = (req, res) => {
  const index = restaurants.findIndex(r => r.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Restaurant non trouvé' });
  const deletedRestaurant = restaurants.splice(index, 1);
  res.json({ message: 'Restaurant supprimé avec succès', restaurant: deletedRestaurant });
};