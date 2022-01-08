import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import SummaryForm from '../summaryForm';
import userEvent from '@testing-library/user-event';

describe('When render summaryForm component', () => {
    test('then checkbox should be unchecked by default', () => {
        render(<SummaryForm />);
        const checkboxElement = screen.getByRole('checkbox', { name: /Terms and Conditions/i });
        expect(checkboxElement).not.toBeChecked();
    });

    test('then button should be disabled', () => {
        render(<SummaryForm />);
        const buttonElement = screen.getByRole('button', { name: /Confirm order/i });
        expect(buttonElement).toBeDisabled();
    });

    test('then when checked the checkbox the button should be enabled and when unchecked it again should disable button', () => {
        render(<SummaryForm />);
        const checkboxElement = screen.getByRole('checkbox', { name: /Terms and Conditions/i });

        const buttonElement = screen.getByRole('button', { name: /Confirm order/i });

        userEvent.click(checkboxElement);
        expect(buttonElement).toBeEnabled();

        userEvent.click(checkboxElement);
        expect(buttonElement).toBeDisabled();
    });
});

test('popover responds to hover', async () => {
    render(<SummaryForm />);

    // popover starts hidden
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();

    // popover appears upon mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);

    const popover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();

    // popover disappears when we mouse out
    userEvent.unhover(termsAndConditions);
    await waitForElementToBeRemoved(() =>
        screen.queryByText(/no ice cream will actually be delivered/i)
    );
});