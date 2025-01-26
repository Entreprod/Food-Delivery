import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('votre_clé_publique_stripe');

const CheckoutForm = ({ total }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
    } else {
      console.log('Paiement réussi:', paymentMethod);
      // Envoyez le paiement à votre backend
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Payer {total} €
      </button>
    </form>
  );
};

const Payment = ({ total }) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm total={total} />
  </Elements>
);

export default Payment; 