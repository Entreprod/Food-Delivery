import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const TrackOrder = ({ match }) => {
  const [orderStatus, setOrderStatus] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrderStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get(
          `http://localhost:5000/api/orders/${match.params.orderId}`,
          { headers: { Authorization: token } }
        );
        setOrderStatus(data.status);
      } catch (error) {
        toast.error('Erreur lors de la récupération du statut de la commande');
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrderStatus();
  }, [match.params.orderId]);

  const statusMessages = {
    processing: 'Votre commande est en préparation (temps estimé : 10-15 minutes)',
    out_for_delivery: 'Votre commande est en cours de livraison (temps estimé : 20-30 minutes)',
    delivered: 'Votre commande a été livrée'
  };

  const progressSteps = {
    processing: 33,
    out_for_delivery: 66,
    delivered: 100
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Suivi de votre commande</h2>
      {isLoading ? (
        <p>Chargement du statut de la commande...</p>
      ) : (
        <>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${progressSteps[orderStatus]}%` }}
            ></div>
          </div>
          <p>{statusMessages[orderStatus] || 'Statut inconnu'}</p>
        </>
      )}
    </div>
  );
};

export default TrackOrder; 