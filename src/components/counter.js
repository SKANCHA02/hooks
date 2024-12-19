import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <h2>{count}</h2>
      <button onClick={() => count > 0 && setCount(count - 1)}>
        Decreament
      </button>
    </div>
  );
};

export default Counter;
