import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    // Récupérer les détails du restaurant et le menu
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/restaurants/${id}`);
        const data = await res.json();
        setRestaurant(data.restaurant);
        setMenu(data.menu);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  }, [id]);

  if (!restaurant) return <div>Chargement...</div>;

  return (
    <div className="container">
      <h1>{restaurant.name}</h1>
      <img src={restaurant.image} alt={restaurant.name} />
      <p>{restaurant.description}</p>
      
      <h2>Notre carte</h2>
      <div className="menu-grid">
        {menu.map(item => (
          <div key={item.id} className="menu-item">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Prix: {item.price}€</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetails; 