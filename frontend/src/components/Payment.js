import React, { useState } from 'react';

const Payment = ({ total }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de paiement ici
    console.log('Paiement en cours...');
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  return (
    <div className="payment-section">
      <div className="payment-amount">
        Montant à payer : <span>{total.toFixed(2)}€</span>
      </div>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label>Numéro de carte</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            maxLength="19"
            required
          />
        </div>
        <div className="card-details">
          <div className="form-group">
            <label>Date d'expiration</label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input
                type="text"
                placeholder="MM"
                value={expiryMonth}
                onChange={(e) => setExpiryMonth(e.target.value.slice(0, 2))}
                maxLength="2"
                required
              />
              <input
                type="text"
                placeholder="AA"
                value={expiryYear}
                onChange={(e) => setExpiryYear(e.target.value.slice(0, 2))}
                maxLength="2"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input
              type="text"
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value.slice(0, 3))}
              maxLength="3"
              required
            />
          </div>
        </div>
        <button type="submit" className="pay-button">
          Payer {total.toFixed(2)}€
        </button>
      </form>
    </div>
  );
};

export default Payment; 