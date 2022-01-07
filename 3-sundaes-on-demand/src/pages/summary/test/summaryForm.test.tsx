import { fireEvent, render, screen } from '@testing-library/react';
import SummaryForm from '../summaryForm';

describe('When render summaryForm component', () => {
    test('then checkbox should be unchecked by default', () => {
        render(<SummaryForm />);
        const checkboxElement = screen.getByRole('checkbox', { name: 'Disable button' });
        expect(checkboxElement).not.toBeChecked();
    });

    test('then button should be disabled', () => {
        render(<SummaryForm />);
        const buttonElement = screen.getByRole('button', { name: /terms and conditions/i });
        expect(buttonElement).toBeDisabled();
    });

    test('then when checked the checkbox the button should be enabled and when unchecked it again should disable button', () => {
        render(<SummaryForm />);
        const checkboxElement = screen.getByRole('checkbox', { name: 'Disable button' });

        const buttonElement = screen.getByRole('button', { name: /terms and conditions/i });

        fireEvent.click(checkboxElement);
        expect(buttonElement).toBeEnabled();

        fireEvent.click(checkboxElement);
        expect(buttonElement).toBeDisabled();
    });
});