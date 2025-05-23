import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  

  function hello1(){
    console.log("hello 1");
  }

   const hello2= () =>{
    console.log("hello 2");
  }

  return (
    <>
      <div id="wrapper">
        <button onClick={hello1}>click 1</button>
        <button onClick={hello2}>click 2</button>
      </div>
    
    </>
  )
}

export default App
