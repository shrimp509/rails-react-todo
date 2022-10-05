import React, { useState, useEffect } from 'react'

function Todo(props) {
    return <div>
        <p>
            { props.todo.name }
            <input type="button" value="-" style={{ marginLeft: 8 }} onClick={ () => props.removeTodo(props.index) }/>
        </p>
    </div>
}

export default Todo