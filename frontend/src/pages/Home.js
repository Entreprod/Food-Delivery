import React from 'react';
import { Link } from 'react-router-dom';
import { FaUtensils } from 'react-icons/fa';
import restaurantsData from '../data/restaurantsData';

function Home() {
  return (
    <div className="home">
      <h1
        style={{
          marginTop: '100px', // Increased margin for more spacing
          marginBottom: '10px', // Reduced margin after the title
          lineHeight: '1.2', // Adjust line height for better spacing
          paddingBottom: '0px', // Add padding below the title
          fontSize: '1.6rem', // Font size remains the same
        }}
      >
        Faim de bons plats ? 🍲⚡
      </h1>
      <p
        style={{
          textAlign: 'center',
          color: '#666',
          marginTop: '0px', // Reduced margin before the subtitle
          marginBottom: '30px', // Increased spacing before the search bar
          fontSize: '0.9rem', // Subtitle font size remains the same
        }}
      >
        Commande ton plat dès maintenant 📲
      </p>
      <input
        type="text"
        placeholder="Cherche ton plat préféré... 🍛" // Updated placeholder text
        className="search-bar" // Ensure the correct class is applied
        style={{
          display: 'block',
          margin: '20px auto',
          padding: '10px 10px 12px 12px',
          width: '80%',
          maxWidth: '100%', // Adjusted to take full width on mobile
          border: '2px solid var(--border-color)', // Updated to match restaurant card border
          borderRadius: '8px',
          fontSize: '1rem',
           // Added padding below the input text
        }}
      />
      <div className="restaurant-list">
        {restaurantsData.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="restaurant-image"
              style={{
                width: '100%', // Ensure the image spans the full width
                height: '200px', // Set a fixed height
                objectFit: 'cover', // Maintain aspect ratio and cover the container
                borderRadius: '8px', // Ensure border radius for the image
              }}
            />
            <h3
              style={{
                fontSize: '1.2rem', // Increased font size for the restaurant name
                margin: '15px 0 5px 0', // Added margin above the name
                textAlign: 'left', // Align name to the left
                borderRadius: '8px', // Ensure border radius for the title
              }}
            >
              {restaurant.name}
            </h3>
            <p
              style={{
                textAlign: 'left', // Align description to the left
                color: '#666',
                marginBottom: '20px', // Add space between the description and the button
                borderRadius: '8px', // Ensure border radius for the description
              }}
            >
              {restaurant.description}
            </p>
            <div
              className="button-container"
              style={{
                display: 'flex',
                justifyContent: 'flex-end', // Align button to the right
                marginTop: '20px', // Adjust spacing above the button
              }}
            >
              <Link
                to={`/restaurant/${restaurant.id}`}
                className="view-menu"
                style={{
                  padding: '10px 15px',
                  backgroundColor: '#28a745',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '8px', // Ensure border radius for the button
                  fontSize: '0.9rem',
                }}
              >
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