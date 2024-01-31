import React from 'react'
import {useState} from 'react'
import { useTodo } from './Context'

function Items({element}) {
    const [message, setMessage] = useState(element.note)
    const [isEditable, setisEditable] = useState(false)
    const {updateTodo, deleteTodo, toggleCompleted} = useTodo()

    
    const editTodo = ()=>{
        updateTodo(element.id, {...element, note: message})
        setisEditable(false)
    }
    const toggleComplete = ()=>{
        toggleCompleted(element.id)
    }
  return (
    <div className={`flex flex-col sm:flex-row justify-between my-5 px-2  shadow-lg shadow-gray-950 ${element.completed ? "bg-[#3e523e]" : "bg-gray-500"}`}>
        <div className='flex gap-2 justify-center items-center py-4 p-0'>
            <input type="checkbox"
            checked={element.completed}
            onChange={toggleComplete} />

            <input type="text"
            className={`bg-transparent outline-none min-w-9 ${element.completed ? "line-through" : ""}`} 
            readOnly = {!isEditable}
            value = {message}
            onChange={(e)=>setMessage(e.target.value)}
            />
        </div>

        <div className='flex justify-center items-center gap-4 mb-2 sm:mt-0'>
            <button 
                className={`${element.completed ? "bg-blue-950" : "bg-blue-600"}  hover:bg-blue-950 font-bold text-lg px-4`} 
                onClick={()=>
                    {
                        if(element.completed) return
                        if(isEditable)
                        {
                            editTodo()
                        }else
                        {
                            setisEditable((prev)=>!prev)
                        }
                    }}
                disabled = {element.completed}>
                {element.completed ? "disabled" : isEditable ? "Save" : "Edit" }            
            </button>

            <button 
            onClick={()=>deleteTodo(element.id)} 
            className='bg-[#f00] hover:bg-red-700 text-[#fff] font-bold text-lg px-4'>
                Delete
            </button>
        </div>
    </div>
  )
}

export default Items