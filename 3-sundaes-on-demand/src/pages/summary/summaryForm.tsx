import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { OverlayTrigger, Popover } from "react-bootstrap";

function SummaryForm() {
    const [termConditionsChecked, setTermConditionsChecked] = useState(false);

    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>
                No ice cream will actually be delivered
            </Popover.Body>
        </Popover>
    );

    const checkboxLabel = (
        <span>
            I agree to
            <OverlayTrigger placement="right" overlay={popover}>
                <span style={{ color: 'blue' }}>Terms and Conditions</span>
            </OverlayTrigger>
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