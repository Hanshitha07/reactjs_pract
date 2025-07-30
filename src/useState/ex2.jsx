import React, { useState } from 'react';

function MyName() {
  const [name, setName] = useState('');

  return (
    <div>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} // 🔄 update as user types
      />
      <p>Hello, {name || 'type your name'}!</p>
    </div>
  );
}
export default MyName;