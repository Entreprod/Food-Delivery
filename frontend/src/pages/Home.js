import React from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';
import restaurantsData from '../data/restaurantsData';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Food Delivery App</h1>
      <div className="restaurant-list">
        {restaurantsData.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="restaurant-image"
            />
            <h3>{restaurant.name}</h3>
            <p>{restaurant.description}</p>
            <div style={{ marginTop: '2rem' }}></div> {/* Add spacing */}
            <div className="button-container">
              <Link to={`/restaurant/${restaurant.id}`} className="view-details">
                <FaUtensils /> View Details
              </Link>
              <Link to={`/restaurant/${restaurant.id}`} className="view-menu">
                <FaUtensils /> Consulter
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;