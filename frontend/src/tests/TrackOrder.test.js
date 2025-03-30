import React, { waitFor } from 'react';
import { render } from '@testing-library/react';
import TrackOrder from '../components/TrackOrder';

it('affiche le message de livraison en cours', async () => {
  const { getByText } = render(<TrackOrder match={{ params: { orderId: '123' } }} />);
  await waitFor(() => expect(getByText(/Votre commande est en cours de livraison/i)).toBeInTheDocument());
});

it('affiche le message de livraison terminée', async () => {
  const { getByText } = render(<TrackOrder match={{ params: { orderId: '123' } }} />);
  await waitFor(() => expect(getByText(/Votre commande a été livrée/i)).toBeInTheDocument());
});

it('affiche un message de statut inconnu si le statut est invalide', async () => {
  const { getByText } = render(<TrackOrder match={{ params: { orderId: 'invalid' } }} />);
  await waitFor(() => expect(getByText(/Statut inconnu/i)).toBeInTheDocument());
});