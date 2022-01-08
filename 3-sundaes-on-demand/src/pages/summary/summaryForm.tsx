import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SummaryForm() {
    const [termConditionsChecked, setTermConditionsChecked] = useState(false);

    const checkboxLabel = (
        <span>
            I agree to <span style={{ color: 'blue' }}>Terms and Conditions</span>
        </span>
    );

    return (
        <Form>
            <Form.Group controlId="terms-and-conditions">
                <Form.Check
                    type='checkbox'
                    checked={termConditionsChecked}
                    onChange={(e) => setTermConditionsChecked(e.target.checked)}
                    label={checkboxLabel}
                />
            </Form.Group>
            <Button
                variant="primary"
                type="submit"
                disabled={!termConditionsChecked}
            >
                Confirm order
            </Button>
        </Form>
    );
}

export default SummaryForm;