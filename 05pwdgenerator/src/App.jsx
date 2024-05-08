import { useState, useCallback, useEffect, useRef } from 'react'
// memoization concept - useCallback - stores in cache
function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  // useRef Hook
  const passwordRef = useRef(null) // used for better user experience in UI terms

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()~`=-+_{}[]()/"
    
    for(let i=1;i<=length; i++){
      let char = Math.floor(Math.random()*str.length) // returns the index
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])
  // 2 values are passed : 1) function , 2) dependencies passed in the form of array
  // above array - in useCallback, in method re-runs on those dependencies, OPTIMIZE the method 
  
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,5) -> if we are selecting a range
    window.navigator.clipboard.writeText(password)
  }, [password])

  // useCallback() and useEffect() array MUST NOT be same always*
  useEffect(()=>{
    passwordGenerator()
  },[length, numAllowed, charAllowed, passwordGenerator])
  // in array: means if any of the value changes then we have to re-run the func.

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 
      bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}} // I have to pass an event
            // Event calls 'setLength'
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={()=>{
              setNumAllowed((prev)=>!prev);
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox" 
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
              // we fire a callback which has previous value by default.
              // Now to switch it, we just `!prev` which changed from T<->F<->T
            }}
            />
            <label htmlFor='charInput '>Special Chars</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
