import { createSlice , nanoid } from "@reduxjs/toolkit";
// nanoid - generates unique id
const initialState = { // can be array/object
    todos: [{id: 1, text: "Hellow"}]
} 

// slice ~ bigger version of reducer

export const todoSlice = createSlice({ // mostly objects only come
    name: 'todo', // 'name' = property in redux-toolkit
    initialState,  // every slice has an initialState, so we declared it above
    reducers: { // its basically a property
        addTodo: (state, action) => { // property name = addTodo | // after declaring we get access of 2 things: STATE , ACTION
            const todo = { // state = we get updated state value in the store, action = values which are needed for execution
                id: nanoid(), 
                text: action.payload // payload is an object. (it have anything like id, email, etc)
            }
            state.todos.push(todo)
        }, 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload) // filter gives only true values
        },
        updateTodo: (state, action) => {
            const {id, newText} = action.payload
            const todoIndex = state.todos.findIndex((todo)=> todo.id===id)
            if(todoIndex!==-1){
                state.todos[todoIndex].text = newText
            }
        }
    } // has properties and functions
}) 
 // we have 2 steps to export
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions // have to export individual reducers also as it will be helpful in components

export default todoSlice.reducer