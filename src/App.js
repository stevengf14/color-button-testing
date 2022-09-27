import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  const handleClickButton = () => setButtonColor(newButtonColor);
  const handleClickCheckbox = (event) => setDisabled(event.target.checked);
  return (
    <div>
      <button 
        style={{ backgroundColor: buttonColor }}
        onClick={handleClickButton}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <br />
      <input 
        type='checkbox'
        id='enable-button-checkbox'
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={handleClickCheckbox} 
      />
    </div>
  );
}

export default App;
