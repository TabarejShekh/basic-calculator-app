import React, { useState } from 'react';
import { evaluate } from 'mathjs';

import './App.css';

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput(input + value);
  const handleClear = () => setInput("");
 
const handleCalculate = () => {
  try {
    setInput(evaluate(input).toString());
  } catch (error) {
    setInput("Error");
  }
};
  const buttons = [
    "7","8","9","/",
    "4","5","6","*",
    "1","2","3","-",
    "0",".","=","+"
  ];

  return (
    <div className="calculator-container">
      <h1>Basic Calculator</h1>
      <input type="text" value={input} readOnly className="calculator-input" />
      <div className="calculator-buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => btn === "=" ? handleCalculate() : handleClick(btn)}
            className="calc-button"
          >
            {btn}
          </button>
        ))}
        <button onClick={handleClear} className="calc-button clear-button">C</button>
      </div>
    </div>
  );
}

export default App;
