import React, { useEffect, useState } from 'react'
import {TodoProvider, useTodo} from './Context'

function ToDo() {
    const {todo} = useTodo()
    const [note, setNote] = useState('Write note')
    const [isEditable, setisEditable] = useState(false)
    const [message, setMessage] = useState(todo)
    const [todos, setTodos] = useState([])
    // const {id, completed} = useTodo()
    const addTodo = (note)=>
    {
        setTodos((prev)=>[{id: Date.now(), note, completed:false}, ...prev])
        setNote('')
    }

    const deleteTodo = (id)=>
    {
        setTodos((prev) => prev.filter((todo)=>todo.id !== id))
    }
    const updateTodo = (id)=>
    {
        setisEditable(!isEditable)
        if(!isEditable)
        {
            alert("You can edit now you")
        }
        setTodos((prev) => prev.map((prevTodo)=>prevTodo.id === id ? {...prevTodo, note:message} : prevTodo))
    }

    const toggleCompleted = (id) =>
    {
        setTodos((prev)=>prev.map((todo)=>todo.id ===id ? {...prev, completed: !todo.completed} : todo))
    }

    useEffect(()=>{
        const todoss = JSON.parse(localStorage.getItem("todos"))
        console.log(todos)
        if(todoss && todoss.length > 0)
        {
            setTodos(todoss)
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos]);

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, toggleCompleted, deleteTodo}}>
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
                    <button className='bg-[#0f0] shrink-0 md:px-8 px-2 py-1 font-bold ' onClick={()=>addTodo(note)}>Add</button>
                </div>

                {
                    todos.map((element)=>
                    (
                        <div className='flex flex-col sm:flex-row justify-between my-5 py-2 px-2 bg-gray-500 shadow-lg shadow-gray-950 ' key={element.id}>
                            <div className='flex gap-2 justify-center py-4 sm:p-0'>
                                <input type="checkbox" name="" id="" />
                                <input type="text"
                                className='bg-gray-500 outline-none' 
                                readOnly = {!isEditable}
                                value = {isEditable ? message : element.note}
                                onChange={(e)=>setMessage(e.target.value)}
                                />
                            </div>
                            <div className='flex justify-center items-center gap-4'>
                                <button className='bg-blue-600 font-bold text-lg px-4' 
                                onClick={()=>
                                    updateTodo(element.id)
                                }>Edit</button>
                                <button onClick={()=>deleteTodo(element.id)} className='bg-[#f00] text-[#fff] font-bold text-lg px-4'>Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            
        </div>
    </TodoProvider>
  )
}

export default ToDo