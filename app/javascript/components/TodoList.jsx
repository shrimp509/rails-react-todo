import React, { useState, useEffect } from 'react'

import Todo from './Todo'

function TodoList(props) {
    return <div>
        <ul>
            { props.todos.map((todo) => {
                return <li><Todo content={ todo } /></li>
            }) }
        </ul>
    </div>
}

export default TodoList