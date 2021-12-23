import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("When everything is OK", () => {
  beforeEach(() => {
    render(<App />);
  });
  
  test("should render the App component without crashing", () => {
    screen.debug();
  });

  test("should select the children that is being passed to the CustomInput component", () => {
    screen.getByText('Input:');
    expect(screen.getByText('Input:')).toBeInTheDocument();
  });

  test("should select the input element by role", () => {
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test("should select a label element by its text", () => {
    expect(screen.getByLabelText('Input:')).toBeInTheDocument();
  });

  test("should select a label element by its text", () => {
    expect(screen.getByPlaceholderText('Example')).toBeInTheDocument();
  });

  test("should select the input element by its role with QueryByRole", () => {
    expect(screen.queryByRole('whatever')).toBeNull();
  });
});