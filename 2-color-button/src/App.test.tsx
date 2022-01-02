import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('button has corret initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
});

test('button turn blue when clicked', () => {
  
});