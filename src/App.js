import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const deleteLast = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); // Evaluate the expression
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((btn) => (
          <button
            key={btn}
            onClick={btn === "=" ? calculateResult : () => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
        <button onClick={clearInput} className="clear">
          C
        </button>
        <button onClick={deleteLast} className="delete">
          Del
        </button>
      </div>
    </div>
  );
};

export default App;
