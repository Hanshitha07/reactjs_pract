import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);  // 🔁 creates state

  return (
    <div>
      <h2>Count: {count}</h2>   {/* shows the state */}
      <button onClick={() => setCount(count + 1)}>Increment</button> {/* updates the state */}
    </div>
  );
}

export default Counter;
