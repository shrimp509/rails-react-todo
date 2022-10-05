import React, { useState, useEffect, useRef } from 'react'

import TodoList from './TodoList'
import TodoAdder from './TodoAdder'

function App() {
    const initTodos = [{
        name: 'first todo',
        status: 'created'
    }]

    const updateTodosThruApi = () => {
        fetch('http://127.0.0.1:3000/api/v1/todos')
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            setTodos(response)
        })
    }

    const addTodoThruApi = (todo) => {
        fetch('http://127.0.0.1:3000/api/v1/todos', {
            method: 'POST',
            body: JSON.stringify({
                name: todo.name
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((response) => {
            console.log(response.json())
        })
        .catch(error => console.error("Error: " + error))
    }

    const removeTodoThruApi = (todo) => {
        fetch(`http://127.0.0.1:3000/api/v1/todos/${todo.id}`, {
            method: 'DELETE'
        })
        .then((response) => {
            console.log(response.json())
        })
        .catch(error => console.error("Error: " + error))
    }

    const [todos, setTodos] = useState(initTodos)

    useEffect(() => {
        updateTodosThruApi()
    }, [])

    const addNewTodo = (newTodo) => {
        addTodoThruApi(newTodo)
        setTodos([...todos, newTodo])
    }

    const removeTodo = (todoIndex) => {
        removeTodoThruApi(todos[todoIndex])
        setTodos(todos.filter( (_, index) => index != todoIndex ))
    }

    return <div>
        <h1>Simple Todo App</h1>
        <TodoList todos={ todos } removeTodo={ removeTodo } />
        <TodoAdder addNewTodo={ addNewTodo }/>
    </div>
}

export default App