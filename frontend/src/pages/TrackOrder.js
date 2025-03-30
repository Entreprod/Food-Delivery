import React from 'react';

const TrackOrder = () => {
  const orderStatus = 'unknown'; // Example status
  const statusMessages = {
    pending: 'En attente',
    shipped: 'Expédié',
    delivered: 'Livré',
  };

  return (
    <div>
      <h1>Suivi de commande</h1>
      <p>{statusMessages[orderStatus] || 'Statut inconnu'}</p>
    </div>
  );
};

export default TrackOrder;