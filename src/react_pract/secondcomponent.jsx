import React from 'react'

const SecondComponent = (props) => {
  const {name,place,gender,age} = props.User;
  return (
    <div>
     <div>{name}</div>
     <div>{place}</div>
     <p>{gender}</p>
     <p>{age}</p>
    </div>
  );
}

export default SecondComponent;