import React, { useState } from "react";

const HookCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = _ => setCount(count + 5);

  return (
    <div>
      <p> Count {count} </p>
      <button onClick={() => setCount(initialCount)}> Reset </button>
      <button onClick={() => setCount(count + 1)}> Increment </button>
      <button onClick={() => setCount(count - 1)}> Decrement </button>
      <button onClick={incrementFive}> Increment 5 </button>
    </div>
  );
};

export { HookCounterTwo };
