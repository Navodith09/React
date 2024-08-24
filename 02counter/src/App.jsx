import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  //let counter = 5
  
  const addValue = () => {
    if (counter <= 19)
      setCounter(counter + 1)
    // console.log('add clicked', counter)
  }

  const removeValue = () => {
    if (counter >= 1)
      setCounter(counter - 1)
    // console.log('remove clicked', counter)
  }
  
  return (
    <>
      <h1>Counter</h1>
      <h2>Value is : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
