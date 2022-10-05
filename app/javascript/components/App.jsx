import React, { useState, useEffect, useRef } from 'react'

import TodoList from './TodoList'

function App() {
    const newTodo = useRef('')
    const [todos, setTodos] = useState(['first todo', 'second todo', 'third todo'])

    const onSubmitHandler = (event) => {
        event.preventDefault()
        setTodos([...todos, newTodo.current.value])
        newTodo.current.value = ''
    }

    return <div>
        <h1>Simple Todo App</h1>
        <TodoList todos={ todos } />
        <form onSubmit={ onSubmitHandler }>
            <input type="text" ref={ newTodo }></input>
            <input type="submit" value="+" />
        </form>
    </div>
}

export default App