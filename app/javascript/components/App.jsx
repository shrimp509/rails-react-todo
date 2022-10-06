import React, { useState, useEffect, useRef } from 'react'

import Snackbar from '@mui/material/Snackbar';
import Container from '@mui/material/Container';

import TodoList from './TodoList'
import TodoAdder from './TodoAdder'

import { getTodosThruApi, addTodoThruApi, removeTodoThruApi, updateTodoThruApi } from '../services/TodoApiService'

function App() {
    const [todos, setTodos] = useState([])
    const [msg, setMsg] = useState('')

    useEffect(() => {
        getTodosThruApi().then((response) => {
                setTodos(response)
        })
    }, [])

    const handleClose = () => {
        setMsg('')
    }

    const addNewTodo = (newTodo) => {
        addTodoThruApi(newTodo)
        .then((response) => {
            if (response.status != 200) {
                setMsg(`Add todo ${newTodo} failed`); return;
            }
            newTodo['id'] = response.data.data.id
            console.log(newTodo)
            setTodos([...todos, newTodo])
            setMsg(`New todo: ${newTodo.name} created`)
        })
    }

    const removeTodo = (todoIndex) => {
        removeTodoThruApi(todos[todoIndex]).then((response) => {
            if (response.status != 200) {
                setMsg(`Remove todo ${todos[todoIndex]} failed`); return;
            }
            setMsg(`Remove todo ${todos[todoIndex].name}`)
            setTodos(todos.filter((_, index) => index != todoIndex))
        })
    }

    const updateTodo = (todoIndex, newName, newStatus = undefined) => {
        updateTodoThruApi(todos[todoIndex].id, newName, newStatus).then((response) => {
            if (response.status != 200) {
                setMsg(`Update todo ${todos[todoIndex]} failed`); return;
            }
            setMsg(`Update todo ${newName}`)
            let newArr = [...todos]
            newArr[todoIndex].name = newName
            if (newStatus != undefined) newArr[todoIndex].status = newStatus
            setTodos(newArr)
        })
    }

    return <Container maxWidth="sm">
                <h1 style={{ textAlign: 'center' }}>Simple Todo App</h1>
                <TodoAdder addNewTodo={addNewTodo}/>
                <TodoList todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
                <Snackbar
                    open={msg != ''}
                    autoHideDuration={2000}
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    onClose={handleClose}
                    message={msg}
                />
            </Container>
}

export default App