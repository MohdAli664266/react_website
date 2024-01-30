import {createContext, useContext} from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id : 1,
            todo : "Hello",
            completed : false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo : (id) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {},
})

export const useTodo = ()=> useContext(TodoContext)
export const TodoProvider = TodoContext.Provider