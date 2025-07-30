
import React from 'react'
import FirstComponent from './react_pract/firstcomponent'
import SecondComponent from './react_pract/secondcomponent'
import ThirdComponent from './react_pract/thirdcomponent'
import FourthComponent from './react_pract/fourthcomponent'
import './App.css'; // Assuming you have an App.css file for styles
import Counter from './useState/ex1' 
import MyName from './useState/ex2' // Assuming you have a second useState example
let a ="App"

const Details ={
  name: "John",
  place: "New York",
  gender: "Male",
  age: 30
}

function App() {
  return (
    <div>
      <FirstComponent name={Details.name} />
      <SecondComponent User={Details} />
      <ThirdComponent  gender={Details.gender} />
      <FourthComponent  age={Details.age} />
      <Counter />
      <MyName />
      {/* Additional content */}
      <h1>Welcome to My React {a}</h1>
      <p>This app demonstrates the use of multiple components.</p>
      
    </div>
  )
}

export default App

