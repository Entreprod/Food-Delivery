import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useSpring, animated } from 'react-spring';
import Payment from '../components/Payment';
import '../styles/App.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();
  const [showPayment, setShowPayment] = useState(false);

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }
  });

  if (cart.length === 0) {
    return (
      <animated.div style={fadeIn} className="container">
        <div className="empty-cart">
          <h1>Votre panier est vide</h1>
          <p>Ajoutez des produits pour commencer votre commande</p>
        </div>
      </animated.div>
    );
  }

  return (
    <animated.div style={fadeIn} className="container">
      <h1>Votre Panier</h1>
      <div className="cart-container">
        <div className="cart-items">
          {cart.map(item => (
            <animated.div
              key={item.id}
              className="cart-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="price">{item.price}€</p>
                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="quantity-btn"
                  >
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Supprimer
                </button>
              </div>
            </animated.div>
          ))}
        </div>

        <div className="cart-summary-container">
          <div className="cart-summary">
            <h2>Résumé de la commande</h2>
            <div className="summary-details">
              <div className="summary-row">
                <span>Sous-total</span>
                <span>{getTotal().toFixed(2)}€</span>
              </div>
              <div className="summary-row">
                <span>Frais de livraison</span>
                <span>Gratuit</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>{getTotal().toFixed(2)}€</span>
              </div>
            </div>
            <button 
              className="checkout-btn"
              onClick={() => setShowPayment(true)}
            >
              Valider la commande
            </button>
          </div>

          {showPayment && (
            <div className="payment-section">
              <Payment total={getTotal()} />
            </div>
          )}
        </div>
      </div>
    </animated.div>
  );
};

export default Cart; 