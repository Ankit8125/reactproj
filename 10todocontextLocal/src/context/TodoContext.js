/* eslint-disable no-unused-vars */

import {useContext, createContext} from 'react'

// here in context, we only declare methods and values . methods like addtodo, update,delete..
// these will be declared here and the function inside them is written in app.jsx

export const TodoContext = createContext({
    todos: [ // will contain array of objects
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
} // useContext ALWAYS NEED A context

export const TodoProvider = TodoContext.Provider

// Provider is used to wrap the function