import React from 'react';
import { FaShoppingCart, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <button className="nav-button" onClick={() => navigate('/')}>
        <FaHome /> Accueil
      </button>
      <button className="nav-button" onClick={() => navigate('/cart')}>
        <FaShoppingCart /> Panier
      </button>
    </div>
  );
};

export default Navbar; 