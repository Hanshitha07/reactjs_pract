
import React from 'react'
import First from './react_pract/firstcomponent'
import SecondComponent from './react_pract/secondcomponent'
import ThirdComponent from './react_pract/thirdcomponent'
import FourthComponent from './react_pract/fourthcomponent'
import './App.css'; // Assuming you have an App.css file for styles
let a ="App"

function App() {
  return (
    <div>
      <First />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <h1>Welcome to My React {a}</h1>
      <p>This app demonstrates the use of multiple components.</p>
      
    </div>
  )
}

export default App