import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  

  function hello1(){
    console.log("hello 1");
  }

  return (
    <>
      <div id="wrapper">
        <button onClick={hello1}>click 1</button>
      </div>
    
    </>
  )
}

export default App
