import { useState } from "react";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [symbol, setSymbol] = useState("");
  // const [result, setResult] = useState(""); // changed my mind midway

  function handleClearForm() {
    setNum1("");
    setNum2("");
    setSymbol("");
    // setResult("");
  }

  function handleCalculate() {
    if (num1 && num2 && symbol) {
      let res = "";
      switch (symbol) {
        case "+":
          res = parseFloat(num1) + parseFloat(num2);
          break;
        case "-":
          res = parseFloat(num1) - parseFloat(num2);
          break;
        case "*":
          res = parseFloat(num1) * parseFloat(num2);
          break;
        case "/":
          res = parseFloat(num1) / parseFloat(num2);
          break;
        default:
          break;
      }
      // setResult(res);
      setNum1(res.toString()); // i commented the set result because i can use the result as the next input
      setNum2("");
      setSymbol("");
    }
  }

  return (
    <>
      <Logo />
      <div className="container">
        <Input value={num2 || num1} handleClearForm={handleClearForm} />
        <div className="buttons">
          <div className="numbers">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."].map((value) => (
              <button
                key={value}
                onClick={() => {
                  if (symbol) {
                    setNum2((prevNum2) => prevNum2 + value);
                  } else {
                    setNum1((prevNum1) => prevNum1 + value);
                  }
                }}
              >
                {value}
              </button>
            ))}
            <button onClick={handleCalculate}>=</button>
          </div>
          <div className="symbols">
            {["+", "-", "*", "/"].map((value) => (
              <button key={value} onClick={() => setSymbol(value)}>
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="watch">{symbol}</div>
    </>
  );
}

function Input({ value, handleClearForm }) {
  return (
    <div className="input">
      <input type="text" value={value} placeholder="0" readOnly />

      <div className="clear">
        <button onClick={handleClearForm}>Clear</button>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="header">
      <h1>Calculator with React</h1>
    </div>
  );
}
