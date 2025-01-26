import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Cart from '../components/Cart';

describe('Cart Component', () => {
  const mockCart = [
    { name: 'Pizza', price: 10 },
    { name: 'Burger', price: 8 }
  ];

  it('affiche correctement les articles du panier', () => {
    const { getByText } = render(<Cart cart={mockCart} />);
    expect(getByText('Pizza')).toBeInTheDocument();
    expect(getByText('Burger')).toBeInTheDocument();
  });

  it('calcule correctement le total', () => {
    const { getByText } = render(<Cart cart={mockCart} />);
    expect(getByText('$18.00')).toBeInTheDocument();
  });

  // Ajoutez plus de tests pour couvrir les différents scénarios
}); 