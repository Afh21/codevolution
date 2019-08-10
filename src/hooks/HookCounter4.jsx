import React, { useState } from "react";

function HookCounter4() {
  const [items, setItems] = useState([]);

  const addItems = () => {
    setItems([
      ...items,
      { id: items.length + 1, value: Math.floor(Math.random() * 10) + 1 }
    ]);
  };

  return (
    <div>
      <button onClick={addItems}>Add +</button>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            Id: {item.id} - Value: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { HookCounter4 };
