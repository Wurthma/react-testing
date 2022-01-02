import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has corret initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' });
});

test('button turn blue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');

  expect(checkbox).not.toBeChecked();
});

test('Checkbox disables on first click and enables on second click', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});

test('Button turn grey when checkbox is marked and return to red if unmarked', () => {
  render(<App />);

  const buttonCollor = screen.getByRole('button', { name: 'Change to blue' });
  const disableCheckbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(disableCheckbox);
  expect(buttonCollor).toHaveStyle({ backgroundColor: 'grey' });

  fireEvent.click(disableCheckbox);
  expect(buttonCollor).toHaveStyle({ backgroundColor: 'red' });
});

test('Button turn blue when clicked and turn grey when checkbox is marked and return to blue if unmarked', () => {
  render(<App />);

  const buttonCollor = screen.getByRole('button', { name: 'Change to blue' });
  const disableCheckbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(buttonCollor);
  expect(buttonCollor).toHaveStyle({ backgroundColor: 'blue' });

  fireEvent.click(disableCheckbox);
  expect(buttonCollor).toHaveStyle({ backgroundColor: 'grey' });

  fireEvent.click(disableCheckbox);
  expect(buttonCollor).toHaveStyle({ backgroundColor: 'blue' });
});