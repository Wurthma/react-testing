import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has corret initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
});

test('button turn blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  
  expect(colorButton.textContent).toBe('Change to red');
});