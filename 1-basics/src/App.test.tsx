import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { getUser } from './get-user';
import { mocked } from 'jest-mock';

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
    // Working with array of elements
    screen.getAllByText('Input:');
  });

  test("should select the input element by its role", () => {
    // Working with array of elements
    const results = screen.getAllByRole('textbox');
    expect(results.length).toBe(1);
    
    results.forEach(element => {
      expect(element).toBeInTheDocument();
    });
  });

  test("should select a label element by its text", () => {
    expect(screen.getByLabelText('Input:')).toBeInTheDocument();
  });

  test("should select a label element by its text", () => {
    // Working with array of elements
    const results = screen.getAllByPlaceholderText('Example');
    expect(results.length).toBe(1);

    results.forEach(element => {
      expect(element).toBeInTheDocument();
    });
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

describe("When the user enters some text in the input element", () => {
  beforeEach(async () => {
    mockGetUser.mockClear();
  });
  
  test("should display the text to the sreen", async () => {
    render(<App />);
    await waitFor(() => expect(mockGetUser).toHaveBeenCalledTimes(1));

    expect(screen.getByText(/You typed: .../));

    await userEvent.type(screen.getByRole('textbox'), 'George');

    expect(screen.getByText(/You typed: George/));
  });
});