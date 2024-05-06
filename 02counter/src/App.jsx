/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // just a naming convention, [firstVal, setFirstVal]
  // const - keeps values const only, but we need to update counter on click, so
  // using `let`
  let [counter, setCounter] = useState(13)

  // useState is a `hook`

  // let counter = 13;

  const addValue = () =>{
    console.log("clicked", counter);
    counter = counter+1
    if(counter>=20) counter = 20
    setCounter(counter)
  }
  const removeValue = () =>{
    counter = counter-1
    if(counter<=0) counter = 0
    setCounter(counter)
  }
  return (
    <>
      <h1>Hi</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
