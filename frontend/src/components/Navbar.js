import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { FaShoppingCart, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/App.css';

const Navbar = () => {
  const { getTotalQuantity } = useContext(CartContext);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/">
          <h1>Food Delivery</h1>
        </Link>
        <div className="nav-links">
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          <Link to="/cart" className="cart-link">
            <FaShoppingCart className="cart-icon" />
            {getTotalQuantity() > 0 && <span className="cart-count">{getTotalQuantity()}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;