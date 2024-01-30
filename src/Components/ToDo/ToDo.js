import React, { useState } from 'react'

function ToDo() {
    const [note, setNote] = useState('Write note')
    const addNote = function()
    {
        localStorage.setItem(new Date().getTime().toString(), note)
        setNote('')

    }

  return (
    <div className='px-10 mt-8 text-center bg-transparent flex flex-col justify-center items-center'>
        <h1 className='sm:text-3xl text-lg font-bold p-4 text-[#0f0] shadow-lg shadow-gray-950 w-full'>Write and Add Note into
        toDo list</h1>
        <div className='w-full mt-10 md:px-16 px-6'>

            <div className='my-16 overflow-hidden flex justify-center items-center shadow-lg shadow-gray-950 rounded-md'>
                <input 
                className='outline-none w-full p-1 text-[#0d00ff] font-bold' type="text" 
                value={note} 
                placeholder='Enter note here' 
                onChange={(e)=>(
                    setNote(e.target.value)
                )} />
                <button className='bg-[#0f0] shrink-0 md:px-8 px-2 py-1 font-bold ' onClick={()=>addNote()}>Add</button>
            </div>

            {
                Object.keys(localStorage).map((items)=>
                (
                    <div className='flex flex-col sm:flex-row justify-between my-5 py-2 px-2 bg-gray-500 shadow-lg shadow-gray-950 '>
                        <div className='flex gap-2 justify-center py-4 sm:p-0'>
                            <input type="checkbox" name="" id="" />
                            <p className='text-[#0ff]'>{localStorage.getItem(items)}</p>
                        </div>
                        <div className='flex justify-center items-center gap-4'>
                            <button className='bg-blue-600 font-bold text-lg px-4' onClick={()=>alert("site is on progress still")}>Edit</button>
                            <button onClick={()=>alert("site is on progress still")} className='bg-[#f00] text-[#fff] font-bold text-lg px-4'>Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default ToDo