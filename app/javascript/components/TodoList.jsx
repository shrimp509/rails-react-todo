import React, { useState, useEffect } from 'react'

import Todo from './Todo'

function TodoList(props) {
    return <div>
        <ul>
            { props.todos.map((todo, index) => {
                return <li><Todo todo={ todo } index={ index } removeTodo={ props.removeTodo } /></li>
            }) }
        </ul>
    </div>
}

export default TodoList