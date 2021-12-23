import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { getUser } from './get-user';
import { mocked } from 'ts-jest/utils';

jest.mock('./get-user');
const mockGetUser = mocked(getUser, true);

describe("When everything is OK", () => {
  beforeEach(async () => {
    render(<App />);

    await waitFor(() => expect(mockGetUser).toHaveBeenCalled());
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

  test("should not find the role whatever", () => {
    expect(screen.queryByRole('whatever')).toBeNull();
  });
});

describe("When the component fetches the user successfully", () => {
  beforeEach(async () => {
    mockGetUser.mockClear();
  });
  
  test("should call getUser once", async () => {
    render(<App />);
    await waitFor(() => expect(mockGetUser).toHaveBeenCalledTimes(1));
  });
  
  test("should render the username passed", async () => {
    const name = 'George';
    //mockGetUser.mockImplementationOnce(() => Promise.resolve({id: '1', name: name}));
    mockGetUser.mockResolvedValueOnce({id: '1', name: name});
    render(<App />);
    expect(screen.queryByText(/Username/)).toBeNull();
    expect(await screen.findByText(`Username: ${name}`)).toBeInTheDocument();
  });
});