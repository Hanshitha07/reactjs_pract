import React from 'react'
import { useState } from 'react'



const Click_events = () => {
    const [number, setNumber] = useState(0);

    const Decrement = () => {
        if (number > 0) {
            setNumber(number - 1);
        }
    }

    const Reset = () => {
        setNumber(0);
    }
  return (
    <div>
       <h1>{number}</h1>
         <button onClick={() => setNumber(number + 1)}>Increment</button>
         <br />
         <button onClick={Decrement}>Decrement</button>
            <br />      
            <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default Click_events