import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// React controls UI updation
//What are hooks?

function App() {

  let [counter,setCounter] = useState(15) //useState() hook is responsible for changing the state, this means this change is propogated in the UI, in the DOM 
                // we can pass any default value , we have passed the initial value of the counter
                //counter is a variable here and setCounter is a function that updates all the occurence of the counter variable
  //let counter = 15

  // const addValue = () => {
  //   //console.log("value added", Math.random())
  //   //console.log("clicked", counter)
  //   counter = counter + 1;
  //   if(counter > 20) counter = 20;
  //   setCounter(counter)
  //   console.log("clicked", counter)
  // }

  const addValue = () => {
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const removeValue = () => {
    counter = counter - 1;
    if(counter < 0) counter = 0;
    setCounter(counter)
    console.log("clicked", counter)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h3>Counter value : {counter}</h3>

      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button onClick={removeValue} >Remove Value{counter}</button>
      <p>footer : {counter}</p>
    </>
  )
}

export default App
