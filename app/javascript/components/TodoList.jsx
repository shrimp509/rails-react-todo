import React, { useState, useEffect } from 'react'

import Todo from './Todo'

function TodoList(props) {
    return <div>
        <ul>
            { props.todos.map((todo, index) => {
                return <li key={`${todo.name}${index}`}><Todo todo={todo} index={index} removeTodo={props.removeTodo} updateTodo={props.updateTodo} /></li>
            }) }
        </ul>
    </div>
}

export default TodoList