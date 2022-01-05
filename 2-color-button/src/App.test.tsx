import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App'

test('button has corret initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('button turn MidnightBlue when clicked', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  
  expect(colorButton.textContent).toHaveTextContent('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');

  expect(checkbox).not.toBeChecked();
});

test('Checkbox disables on first click and enables on second click', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' });

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
});

test('Button turn grey when checkbox is marked and return to red if unmarked', () => {
  render(<App />);

  const buttonCollor = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const disableCheckbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(disableCheckbox);
  expect(buttonCollor).toHaveStyle({ backgroundColor: 'grey' });

  fireEvent.click(disableCheckbox);
  expect(buttonCollor).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

test('Button turn MidnightBlue when clicked and turn grey when checkbox is marked and return to MidnightBlue if unmarked', () => {
  render(<App />);

  const buttonCollor = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const disableCheckbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(buttonCollor);
  expect(buttonCollor).toHaveStyle({ backgroundColor: 'MidnightBlue' });

  fireEvent.click(disableCheckbox);
  expect(buttonCollor).toHaveStyle({ backgroundColor: 'grey' });

  fireEvent.click(disableCheckbox);
  expect(buttonCollor).toHaveStyle({ backgroundColor: 'MidnightBlue' });
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  
  test('Works for one inner capital letters', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});