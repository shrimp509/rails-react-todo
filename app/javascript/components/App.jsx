import React, { useState, useEffect, useRef } from 'react'

import TodoList from './TodoList'
import TodoAdder from './TodoAdder'

import { getTodosThruApi, addTodoThruApi, removeTodoThruApi, updateTodoThruApi } from '../services/TodoApiService'

function App() {
    const [todos, setTodos] = useState([])

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
            setTodos(todos.filter((_, index) => index != todoIndex))
        })
    }

    const updateTodo = (todoIndex, newName) => {
        updateTodoThruApi(todos[todoIndex].id, newName).then((response) => {
            if (response.status != 200) {
                console.log(`Update todo ${todos[todoIndex]} failed`); return;
            }
            let newArr = [...todos]
            newArr[todoIndex].name = newName
            setTodos(newArr)
        })
    }

    return <div>
        <h1>Simple Todo App</h1>
        <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
        <TodoAdder addNewTodo={addNewTodo}/>
    </div>
}

export default App