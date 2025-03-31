import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaShoppingCart, FaArrowLeft } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useSpring, animated } from 'react-spring';
import '../styles/App.css';
import 'leaflet/dist/leaflet.css'; // Import des styles Leaflet
import restaurantsData from '../data/restaurantsData';

const Restaurant = () => {
  const navigate = useNavigate();
  const { addToCart, cart } = useCart();
  const [showDetails, setShowDetails] = useState(false); // State to toggle address and map
  const { id } = useParams();
  const restaurant = restaurantsData.find((r) => r.id === parseInt(id));

  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 500 } });

  if (!restaurant) {
    return <div>Restaurant non trouvé</div>;
  }

  const additionalInfo = {
    1: {
      origin: "Japon",
      specialties: ["Sushi", "Sashimi", "Tempura"],
      address: "123 Rue des Sushis, Quartier Ginza, Tokyo, Japon",
      hours: [
        "Lundi : 11h - 22h",
        "Mardi : 11h - 22h",
        "Mercredi : 11h - 22h",
        "Jeudi : 11h - 22h",
        "Vendredi : 11h - 23h",
        "Samedi : 11h - 23h",
        "Dimanche : 11h - 22h"
      ],
      mapCoordinates: [35.6895, 139.6917] // Tokyo
    },
    2: {
      origin: "Italie",
      specialties: ["Pizza", "Pasta", "Tiramisu"],
      address: "45 Via Roma, Centre historique, Rome, Italie",
      hours: [
        "Lundi : 10h - 21h",
        "Mardi : 10h - 21h",
        "Mercredi : 10h - 21h",
        "Jeudi : 10h - 21h",
        "Vendredi : 10h - 21h",
        "Samedi : 12h - 23h",
        "Dimanche : 12h - 23h"
      ],
      mapCoordinates: [41.9028, 12.4964] // Rome
    },
    3: {
      origin: "États-Unis",
      specialties: ["Burgers", "Fries", "Milkshakes"],
      address: "789 Burger Street, Manhattan, New York, États-Unis",
      hours: [
        "Lundi : 10h - 23h",
        "Mardi : 10h - 23h",
        "Mercredi : 10h - 23h",
        "Jeudi : 10h - 23h",
        "Vendredi : 10h - 23h",
        "Samedi : 10h - 23h",
        "Dimanche : 10h - 23h"
      ],
      mapCoordinates: [40.7128, -74.0060] // New York
    }
  };

  const info = additionalInfo[restaurant.id] || {
    origin: "Origine inconnue",
    specialties: ["Non spécifiées"],
    address: "Adresse non disponible",
    hours: ["Horaires non disponibles"],
    mapCoordinates: [48.8566, 2.3522] // Paris par défaut
  };

  const getMenuImage = (menuItemName) => {
    if (menuItemName.toLowerCase().includes('sushi')) {
      return 'https://images.unsplash.com/photo-1562967916-eb82221dfb22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=80';
    }
    if (menuItemName.toLowerCase().includes('pizza')) {
      return 'https://images.unsplash.com/photo-1601924577973-9b7b5e4c7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=80';
    }
    if (menuItemName.toLowerCase().includes('burger')) {
      return 'https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=80';
    }
    return 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=80';
  };

  return (
    <div
      style={{
        backgroundColor: '#1a1a1a', // Dark mode background spanning full width
        minHeight: '100vh', // Ensure the background covers the full height
        width: '100%', // Full width background
      }}
    >
      <animated.div
        style={{
          ...fadeIn,
          fontFamily: 'Inter, sans-serif',
          fontWeight: 300,
          padding: '2rem',
          maxWidth: '1200px', // Align content width with navbar
          margin: '0 auto', // Center content horizontally
          color: '#ffffff', // Light text for dark mode
        }}
        className="restaurant-menu"
      >
        <button
          className="back-button"
          onClick={() => navigate('/')}
          style={{
            textAlign: 'left',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            border: '2px solid var(--border-color)', // Use CSS variable
            backgroundColor: 'var(--bg-secondary)', // Use CSS variable
            color: 'var(--text-primary)', // Use CSS variable
            boxShadow: '0 4px 6px var(--shadow-color)', // Use CSS variable
            padding: '0.5rem 1rem',
            marginBottom: '1rem',
          }}
        >
          <FaArrowLeft /> Retour aux restaurants
        </button>

        <div
          className="restaurant-header"
          style={{
            display: 'grid',
            gridTemplateColumns: '100%',
            gap: '2rem',
            border: '2px solid var(--border-color)', // Use CSS variable
            boxShadow: '0 4px 6px var(--shadow-color)', // Use CSS variable
            padding: '1rem',
            backgroundColor: 'var(--bg-secondary)', // Use CSS variable
          }}
        >
          <div className="column restaurant-details">
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="restaurant-image framed-image"
              style={{
                border: '2px solid var(--border-color)', // Use CSS variable
                boxShadow: '0 4px 6px var(--shadow-color)', // Use CSS variable
                marginBottom: '1rem',
              }}
            />
            <h1 style={{ textAlign: 'left', marginBottom: '1rem', color: 'var(--text-primary)' }}>{restaurant.name}</h1>
            <p>{restaurant.description}</p>
            <p>
              <strong>Origine culinaire :</strong> {info.origin}
            </p>
            <p>
              <strong>Spécialités :</strong> {info.specialties.join(', ')}
            </p>
            <div>
              <h3 style={{ textAlign: 'left', color: 'var(--text-primary)' }}>Horaires</h3>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {info.hours.map((hour, index) => (
                  <li key={index} style={{ textAlign: 'left' }}>{hour}</li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => setShowDetails(!showDetails)}
              style={{
                width: '100%',
                padding: '1rem',
                marginTop: '1rem',
                backgroundColor: 'var(--accent-color)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
            >
              {showDetails ? 'Masquer l\'adresse et la carte' : 'Afficher l\'adresse et la carte'}
            </button>
            {showDetails && (
              <>
                <div style={{ marginTop: '1rem' }}>
                  <h3 style={{ textAlign: 'left', color: 'var(--text-primary)' }}>Adresse</h3>
                  {info.address.split(', ').map((line, index) => (
                    <p key={index} style={{ margin: 0 }}>{line}</p>
                  ))}
                </div>
                <div
                  style={{
                    height: '300px',
                    width: '100%',
                    marginTop: '1rem',
                    border: '2px solid var(--border-color)', // Use CSS variable
                    boxShadow: '0 4px 6px var(--shadow-color)', // Use CSS variable
                    borderRadius: '12px', // Round the border
                  }}
                >
                  <MapContainer center={info.mapCoordinates} zoom={13} className="leaflet-map full-dimensions">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={info.mapCoordinates} />
                  </MapContainer>
                </div>
              </>
            )}
          </div>
        </div>

        <div
          className="menu-section"
          style={{
            display: 'grid',
            gridTemplateColumns: '60% 40%', // Restore original grid layout
            gap: '2rem',
            marginTop: '2rem',
          }}
        >
          <div
            className="menu-items"
            style={{
              border: '2px solid var(--border-color)', // Use CSS variable
              boxShadow: '0 4px 6px var(--shadow-color)', // Use CSS variable
              padding: '1rem',
              backgroundColor: 'var(--bg-secondary)', // Use CSS variable
              borderRadius: '8px', // Ensure rounded corners
              display: 'flex',
              flexDirection: 'column', // Arrange items vertically
              gap: '1rem', // Add spacing between items
            }}
          >
            <h2
              style={{
                textAlign: 'left',
                color: 'var(--text-primary)',
                margin: '1rem 0', // Add consistent top and bottom margins
              }}
            >
              Notre Menu
            </h2>
            {(restaurant.menu || []).map((item) => ( // Add fallback to an empty array
              <animated.div
                key={item.id}
                className="menu-item card"
                style={{
                  ...fadeIn,
                  display: 'flex', // Arrange content horizontally
                  alignItems: 'stretch', // Stretch items to match the height
                  gap: '1rem',
                  width: '100%', // Ensure items take full width
                  borderRadius: '8px', // Ensure rounded corners for each menu item
                  position: 'relative', // Enable positioning for the button
                  padding: '1rem', // Add padding for better spacing
                }}
              >
                <img
                  src={item.image} // Use the image from the menu data
                  alt={item.name}
                  className="menu-item-image"
                  style={{
                    border: '2px solid var(--border-color)',
                    boxShadow: '0 4px 6px var(--shadow-color)',
                    borderRadius: '8px', // Ensure rounded corners for images
                    width: '150px', // Set a fixed width for the image
                    height: '150px', // Set a fixed height for the image to make it square
                    objectFit: 'cover', // Ensure the image fits within the dimensions
                  }}
                />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div className="menu-item-info">
                    <h3 style={{ textAlign: 'left', color: 'var(--text-primary)' }}>{item.name}</h3>
                    <p style={{ textAlign: 'left', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      {restaurant.name}
                    </p>
                    <p style={{ textAlign: 'left', marginBottom: '0.5rem' }}>{item.description}</p>
                    <span
                      className="price"
                      style={{
                        textAlign: 'left',
                        display: 'block',
                        fontWeight: 'bold',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {item.price.toFixed(2)} €
                    </span>
                  </div>
                  <button
                    className="button"
                    onClick={() => addToCart({ ...item, restaurantId: restaurant.id })}
                    style={{
                      alignSelf: 'flex-end', // Align the button to the bottom-right
                      backgroundColor: 'var(--accent-color)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '0.5rem 1rem',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s',
                    }}
                  >
                    <FaShoppingCart /> Ajouter
                  </button>
                </div>
              </animated.div>
            ))}
          </div>
          <div
            className="cart-summary"
            style={{
              border: '2px solid var(--border-color)', // Use CSS variable
              boxShadow: '0 4px 6px var(--shadow-color)', // Use CSS variable
              padding: '1rem',
              backgroundColor: 'var(--bg-secondary)', // Use CSS variable
            }}
          >
            <h2
              style={{
                textAlign: 'left',
                color: 'var(--text-primary)',
                margin: '1rem 0', // Add consistent top and bottom margins
              }}
            >
              Résumé du panier
            </h2>
            {cart.length === 0 ? (
              <p>Votre panier est vide</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="cart-item"
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between', // Distribute elements horizontally
                    alignItems: 'flex-start', // Align items at the top
                    borderBottom: '1px solid var(--border-color)', // Use CSS variable
                    padding: '0.5rem 0',
                    color: 'var(--text-primary)', // Use CSS variable
                  }}
                >
                  <div style={{ textAlign: 'left', padding: '0 1rem' }}>
                    <span>{item.name}</span> {/* Meal name aligned left */}
                    <br />
                    <span
                      style={{
                        fontSize: '0.8rem', // Reduce font size for the restaurant name
                        color: 'var(--text-secondary)',
                        marginTop: '0.2rem', // Add spacing between meal name and restaurant name
                        display: 'block',
                      }}
                    >
                      {restaurant.name} {/* Restaurant name in smaller text */}
                    </span>
                  </div>
                  <div style={{ textAlign: 'right', paddingRight: '1rem' }}>
                    <span>
                      {item.quantity} x {item.price.toFixed(2)} €
                    </span> {/* Quantity and price aligned right */}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Restaurant;