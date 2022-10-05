import React, { useState, useEffect, useRef } from 'react'

import TodoList from './TodoList'
import TodoAdder from './TodoAdder'

import { getTodosThruApi, addTodoThruApi, removeTodoThruApi } from '../services/TodoApiService'

function App() {
    const initTodos = [{
        name: 'first todo',
        status: 'created'
    }]

    const [todos, setTodos] = useState(initTodos)

    useEffect(() => {
        getTodosThruApi().then((response) => {
                setTodos(response)
        })
    }, [])

    const addNewTodo = (newTodo) => {
        addTodoThruApi(newTodo).then((response) => {
            if (response.status != 200) {
                console.log(`Add todo ${newTodo} failed`); return;
            }
            setTodos([...todos, newTodo])
        })
    }

    const removeTodo = (todoIndex) => {
        removeTodoThruApi(todos[todoIndex]).then((response) => {
            if (response.status != 200) {
                console.log(`Remove todo ${todos[todoIndex]} failed`); return;
            }
            setTodos(todos.filter( (_, index) => index != todoIndex ))
        })
    }

    return <div>
        <h1>Simple Todo App</h1>
        <TodoList todos={ todos } removeTodo={ removeTodo } />
        <TodoAdder addNewTodo={ addNewTodo }/>
    </div>
}

export default App