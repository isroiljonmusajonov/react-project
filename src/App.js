import "./App.css";
import React, { useState } from "react";
function App() {
  const [number, setNumber] = useState(0);
  // function increment() {
  //   setNumber((prev) => prev + 1);
  // }
  function increment() {
    setNumber(number + number);
  }
  function decrement() {
    setNumber(number - 1);
  }

  return (
    <div className="container">
      <div className="btn-group">
        <p>nomer: {number}</p>
        <button onClick={increment} className="success">
          ha
        </button>
        <button onClick={decrement} className="danger">
          yoq
        </button>
      </div>
    </div>
  );
}

export default App;
