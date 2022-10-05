import React, { useState, useEffect, useRef } from 'react'

function UpdatingTodo(props) {
    const [todo, setTodo] = useState(props.todo.name)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        props.updateTodo(props.index, todo)
        props.setUpdating(false)
    }

    return <form onSubmit={ onSubmitHandler } style={{ display: 'inline-block' }}>
                <input type='text' value={todo} onChange={e => {setTodo(e.target.value)}}></input>  {/* FIXME: lose focus when typing */}
            </form>
}

export default UpdatingTodo