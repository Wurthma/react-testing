import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CustomInput from '.';

describe('When everything is OK', () => {
    test('should call the onChange callback handler when using the fireEvent function', () => {
        const onChange = jest.fn();
        render(
            <CustomInput value="" onChange={onChange}>
                Input:
            </CustomInput>
        );

        fireEvent.change(screen.getByRole('textbox'), {
            target: {value: 'George'}
        });
        expect(onChange).toHaveBeenCalledTimes(1); // The fireEvent didn't type every characteres, its not so realistic
    });

    test('should call the onChange callback handler when using the userEvent API', async () => {
        const onChange = jest.fn();
        render(
            <CustomInput value="" onChange={onChange}>
                Input:
            </CustomInput>
        );

        await userEvent.type(screen.getByRole('textbox'), 'George');
        expect(onChange).toHaveBeenCalledTimes(6); // The userEvent simulates typing all characters, so all 6 character changes are triggered
    });
});