import './App.css';
import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  // const [clicked, setClicked] = useState(false)

  // creating a refernce of the password in order to manipulate it when copied.
  // useRef hook --> to take reference
  const passwordReference = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*~'

    for (let i=1; i<=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  // const buttonClicked = () => {
  //   setClicked('bg-blue-700')
  // }

  const copyPasswordToClipboard = useCallback(() => {
    passwordReference.current?.select()
    // passwordReference.current?.setSelectionRange(0,5)
    // --> sets a selection Range, that the selection will happen 
    // only between the range passed.

    window.navigator.clipboard.writeText(password)
  }, [password])

  // useEffect --> to reload the given method whenever 
  // the given dependencies are affected.
  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <div className='w-full max-w-md mx-auto my-10 px-4 py-2 
    shadow-md rounded-lg bg-gray-700 text-orange-500'>
      <h1 className='text-center text-white my-3'>Password Generator</h1>
      
      <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
        <input type='text' 
        value={password} 
        placeholder='Password' 
        readOnly
        className='outline-none w-full px-3 py-1'
        ref={passwordReference}>
        </input>

        <button 
        onClick={() => {
          // buttonClicked();
          copyPasswordToClipboard();
        }} 
        className={`outline-none bg-blue-500 text-black px-3 shrink-0`}>
          Copy  
        </button>

      </div>


      {/* buttons for requirements */}

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>

          <input
          type='range'
          min={6}
          max={30}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}>
          </input>
          <label className='px-2'>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultValue={numAllowed}
          id='numberInput'
          onChange={() => {
            setNumAllowed((prev) => !prev)
          }}>
          </input>
          <label htmlFor='numberInput' 
          className='px-1'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultValue={charAllowed}
          id='characterInput'
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}>
          </input>
          <label htmlFor='characterInput' 
          className='px-1'>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
