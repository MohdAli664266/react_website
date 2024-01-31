import React, { useEffect, useState } from 'react'
import {TodoProvider} from './Context'
import Items from './Items'

function ToDo() {

    const [note, setNote] = useState('Write note')
    const [todos, setTodos] = useState([])
    const addTodo = (note)=>
    {
        setTodos((prev)=>[{id: Date.now(), note, completed:false}, ...prev])
        setNote('')
    }

    const deleteTodo = (id)=>
    {
        setTodos((prev) => prev.filter((todo)=>todo.id !== id))
    }
    const updateTodo = (id, element)=>
    {
        setTodos((prev) => prev.map((prevTodo)=>prevTodo.id === id ? {...prevTodo, note:element.note} : prevTodo))
    }

    const toggleCompleted = (id) =>
    {
        setTodos((prev)=>prev.map((todo)=>todo.id ===id ? {...todo, completed: !todo.completed} : todo))
        console.log(id)
    }

    useEffect(()=>{
        const todoss = JSON.parse(localStorage.getItem("todos"))
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
                        <div key={element.id}>
                            <Items element={element}/>
                        </div>
                    ))
                }
            </div>
            
        </div>
    </TodoProvider>
  )
}

export default ToDo