import { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName: string) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const [checkboxState, setCheckboxState] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: checkboxState ? 'grey' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={checkboxState}
      >
        Change to {newButtonColor}
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

export default App;
