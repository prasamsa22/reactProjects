import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //   const increment = () => setCount(count + 1);
  return (
    <>
      <div className="container">
        <h1 className="number">{count}</h1>
      </div>
      <div className="btn-container">
        <button className="increment" onClick={(e) => setCount(count + 1)}>
          +
        </button>
        <button className="decrement" onClick={(e) => setCount(count - 1)}>
          -
        </button>
      </div>
    </>
  );
};

export default Counter;
