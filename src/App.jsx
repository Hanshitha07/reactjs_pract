
import React from 'react'
import FirstComponent from './react_pract/firstcomponent'
import SecondComponent from './react_pract/secondcomponent'
import ThirdComponent from './react_pract/thirdcomponent'
import FourthComponent from './react_pract/fourthcomponent'
import './App.css'; // Assuming you have an App.css file for styles
import Counter from './useState/ex1' 
import MyName from './useState/ex2'
import TernaryOp from './useState/ternaryop' // Assuming you have a second useState example
import Click_events from './events&listeners/click_events'
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
      <Counter />
      <MyName />
      <TernaryOp />
      <Click_events />
    </div>
  )
}

export default App

