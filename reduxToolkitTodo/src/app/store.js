import {configureStore} from '@reduxjs/toolkit'
// {method}
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({ // add key value
    reducer: todoReducer
})
// store MUST KNOW where all the reducers are , so we provide it 