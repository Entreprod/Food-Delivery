import React, { useState } from 'react';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_XXXXXXXXXXXXXXXXXXXXXXXX');

const Cart = ({ cart, onRemoveItem }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const [isProcessing, setIsProcessing] = useState(false);
  const history = useHistory();

  const handleCheckout = async () => {
    setIsProcessing(true);
    try {
      const token = localStorage.getItem('token');
      const { data: { clientSecret, orderId } } = await axios.post(
        'http://localhost:5000/api/create-payment-intent',
        { amount: total },
        { headers: { Authorization: token } }
      );

      const stripe = await stripePromise;
      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (paymentIntent.status === 'succeeded') {
        toast.success('Paiement réussi ! Votre commande est en préparation.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        history.push(`/track-order/${orderId}`);
      }
    } catch (error) {
      console.error('Erreur lors du paiement:', error);
      toast.error('Une erreur est survenue lors du paiement');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRemoveItem = (index) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet article de votre panier ?')) {
      onRemoveItem(index);
      toast.info('Article supprimé du panier');
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Votre Panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button
                onClick={() => handleRemoveItem(index)}
                className="text-red-500 hover:text-red-700"
              >
                Supprimer
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <span className="font-bold">Total</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckout}
            disabled={isProcessing}
            className="w-full bg-green-500 text-white py-2 rounded-md mt-4"
          >
            {isProcessing ? 'Traitement...' : 'Payer maintenant'}
          </button>
        </>
      )}
    </div>
  );
};

export default Cart; 