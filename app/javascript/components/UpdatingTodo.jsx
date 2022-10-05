import React, { useState, useEffect, useRef } from 'react'

function UpdatingTodo(props) {
    const [todo, setTodo] = useState(props.todo.name)
    const [newTodo, setNewTodo] = useState(props.todo.name)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        props.updateTodo(props.index, newTodo)
        props.setUpdating(false)
    }

    const onBlurHandler = (e) => {
        setNewTodo(todo)
        props.setUpdating(false)
    }

    return <form onSubmit={onSubmitHandler} style={{ display: 'inline-block' }}>
                <input type='text' autoFocus value={newTodo} placeholder={todo} onChange={e => {setNewTodo(e.target.value)}} onBlur={onBlurHandler}></input>
            </form>
}

export default UpdatingTodo