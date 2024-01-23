import React, { useEffect, useRef, useState } from 'react'

function Service() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const passwordRef = useRef(null);
  
  const passwordGenerator = ()=>{
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let pass = '';
    if(numberAllowed) str += "1234567890";
    if(charAllowed) str += "@~`!#$%^&*()_+;:/?,{}";
    
    for (let index = 0; index <length; index++) {
      const char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }

  useEffect(()=>{
    passwordGenerator();
  },[length, numberAllowed, charAllowed])
  return (
    <div className='flex justify-center items-center max-w-full h-screen bg-[hsl(120,2%,26%)]'>
      <div className=" flex-col min-w-60 bg-gray-800 shadow-lg shadow-slate-900 text-white px-4 ">

        <div className="text-lg md:text-2xl flex items-center justify-center">
          <h1 className='p-8 bold font-bold'>Password Generator</h1>
        </div>

        <div className='flex shadow-lg shadow-slate-900 rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          className="outline-none w-full py-1 px-3 text-yellow-900"
          placeholder='Password'
          value={password}
          readOnly
          ref={passwordRef}
          />

          <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={()=>{
            passwordRef.current?.select();
            // passwordRef.current?.setSelectionRange(0, 6);
            window.navigator.clipboard.writeText(password);
          }}
          >copy</button>
        </div>

        <div className='md:flex items-center gap-3 py-2'>
          <div className='flex items-center justify-center'>
            <input 
            type="range"
            min={6}
            max={50}
            value={length}
            onChange={(e)=>setLength(e.target.value)}
            />
            <label className='font-bold text-yellow-400 px-2'>Length: {length}</label>
          </div>

          <div className='flex gap-2'>
            <input 
            type="checkbox"
            value={length}
            onClick={()=>setNumberAllowed(!numberAllowed)}
            />
            <label className='font-bold text-rose-600'>NumberAllowed</label>
          </div>

          <div  className='flex gap-2'>
            <input 
            type="checkbox"
            value={length}
            onClick={()=>setCharAllowed(!charAllowed)}
            />
            <label className='font-bold text-fuchsia-600'>CharacterAllowed</label>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Service