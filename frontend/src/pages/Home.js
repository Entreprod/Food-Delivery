import React, { useState, useContext } from 'react';
import { animated, useTrail } from 'react-spring';
import { CartContext } from '../context/CartContext';
import '../styles/App.css';
import pizzaImage from '../assets/pizza.jpg'; // Import de l'image pizza
import burgerImage from '../assets/burger.jpg'; // Import de l'image burger
import sushiImage from '../assets/sushi.jpg'; // Import de l'image sushi
import { FaShoppingCart } from 'react-icons/fa';

// Données temporaires pour les restaurants
const restaurants = [
  {
    id: 1,
    name: 'Pizza Palace',
    image: pizzaImage, // Utilisation de l'image importée
    cuisine: 'Italien',
    rating: 4.5,
    price: 10,
  },
  {
    id: 2,
    name: 'Burger Bistro',
    image: burgerImage, // Utilisation de l'image importée
    cuisine: 'Américain',
    rating: 4.2,
    price: 8,
  },
  {
    id: 3,
    name: 'Sushi Spot',
    image: sushiImage, // Utilisation de l'image importée
    cuisine: 'Japonais',
    rating: 4.7,
    price: 12,
  },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useContext(CartContext);

  // Filtre les restaurants en fonction de la recherche
  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Animation de fondu horizontal progressive pour tous les éléments
  const trail = useTrail(3 + filteredRestaurants.length, {
    from: { opacity: 0, transform: 'translateX(50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 500 },
    delay: 200, // Délai entre chaque élément
  });

  return (
    <div>
      {/* Titre */}
      <animated.div style={trail[0]}>
        <h3>Restaurants près de chez vous</h3>
      </animated.div>
      {/* Sous-titre */}
      <animated.div style={trail[1]}>
        <h4>Faites votre choix</h4>
      </animated.div>
      {/* Barre de recherche */}
      <animated.div style={trail[2]}>
        <input
          type="text"
          placeholder="Rechercher un restaurant..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </animated.div>
      {/* Liste des restaurants */}
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant, index) => (
          <animated.div key={restaurant.id} style={trail[3 + index]} className="restaurant-card">
            <img src={restaurant.image} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
            <p>{restaurant.cuisine} • {restaurant.rating} ⭐</p>
            <button onClick={() => addToCart(restaurant)}>
              <FaShoppingCart /> Commander
            </button>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Home; 