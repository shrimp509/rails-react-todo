import React, { useState, useEffect } from 'react'

import Todo from './Todo'

function TodoList() {
    return <div>
        <ul>
            <li><Todo content="This is my todo."/></li>
        </ul>
    </div>
}

export default TodoList