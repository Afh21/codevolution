import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {" "}
      <button onClick={() => setCount(count + 1)}> Click {count} </button>{" "}
    </div>
  );
}

export { HookCounter };
