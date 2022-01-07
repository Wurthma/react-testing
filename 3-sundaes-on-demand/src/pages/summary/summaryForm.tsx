import { useState } from "react";


function SummaryForm() {
    const [checkboxState, setCheckboxState] = useState(false);

    return (
        <div>
            <button disabled={checkboxState}>
                Order
            </button>
            <input
                type="checkbox"
                id="disable-button-checkbox"
                defaultChecked={checkboxState}
                aria-checked={checkboxState}
                onClick={() => setCheckboxState(!checkboxState)}
            />
            <label htmlFor='disable-button-checkbox'>Disable button</label>
        </div>
    );
}

export default SummaryForm;