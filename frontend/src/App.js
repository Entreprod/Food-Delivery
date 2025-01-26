import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import Cart from './pages/Cart';
import TrackOrder from './pages/TrackOrder';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import ErrorBoundary from './ErrorBoundary';
import './styles/App.css';

function App() {
  return (
    <ErrorBoundary>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/track-order/:id" element={<TrackOrder />} />
          </Routes>
        </Router>
      </CartProvider>
    </ErrorBoundary>
  );
}

export default App;