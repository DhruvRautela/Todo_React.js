import React, { useContext, createContext } from 'react'

export const TodoContext=createContext(
    {
        todos:[],
        addTodo: (todo)=>{},
        updateTodo: (id,todo)=>{},
        deleteTodo: (id)=>{},
        toggleTodo: (id)=>{}
    }
)

export const TodoProvider= TodoContext.Provider

export const UseTodo=()=>{
    return useContext(TodoContext)
}