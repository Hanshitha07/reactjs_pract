import React from 'react';

const FirstComponent = () => {
  return (
    <div>
        <h1>FirstComponent</h1>
        <p>This is a simple React component called FirstComponent.</p>
    </div>
  );
}


function First() {
  return (
    <div>First
        <FirstComponent />
    </div>
  )
}



export default First;

