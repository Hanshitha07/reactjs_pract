import React, { useState } from 'react'
import FirstComponent from '../react_pract/firstcomponent';

 // 🔁 creates state
const TernaryOp = () => {
  const [sampleCondition, setSampleCondition] = useState(true);
  return (
    <div>{sampleCondition ? <FirstComponent /> : "it is false"}</div>
  )
}

export default TernaryOp