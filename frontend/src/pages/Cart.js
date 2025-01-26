import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Payment from '../components/Payment';
import '../styles/App.css';

const Cart = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} €
            </li>
          ))}
        </ul>
      )}
      <h2>Total : {total} €</h2>
      <Payment total={total} />
    </div>
  );
};

export default Cart; 