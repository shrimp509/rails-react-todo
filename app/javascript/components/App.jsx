import React, { useState, useEffect, useRef } from 'react'

import TodoList from './TodoList'
import TodoAdder from './TodoAdder'

function App() {
    const [todos, setTodos] = useState(['first todo', 'second todo', 'third todo'])

    const addNewTodo = (newTodo) => {
        setTodos([...todos, newTodo])
    }

    return <div>
        <h1>Simple Todo App</h1>
        <TodoList todos={ todos } />
        <TodoAdder addNewTodo={ addNewTodo }/>
    </div>
}

export default App