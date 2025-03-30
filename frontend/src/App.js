import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Restaurant from './pages/Restaurant';
import RestaurantDetails from './pages/RestaurantDetails'; // Import the RestaurantDetails component
import './styles/App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => setIsDarkMode(e.matches);
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, []);

  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/restaurant/:id" element={<Restaurant />} />
              <Route path="/restaurant/:id/menu" element={<RestaurantDetails />} /> {/* Add this route */}
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;