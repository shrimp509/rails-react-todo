import React, { useState, useEffect, useRef } from 'react'

function Todo(props) {
    const [updating, setUpdating] = useState(false)
    const [todo, setTodo] = useState('')

    const handleClick = event => {
        if (event.detail < 2) return
        setUpdating(true)
    }

    const TodoElement = () => {
        if (updating) {
            return <form onSubmit={ onSubmitHandler } style={{ display: 'inline-block' }}>
                        <input type='text' value={todo} onChange={e => {setTodo(e.target.value)}}></input>  {/* FIXME: lose focus when typiung */}
                    </form>
        } else {
            return <p onClick={handleClick} style={{ display: 'inline-block' }}>
                        <span>{ todo }</span>
                    </p>
        }
    }

    useEffect(() => {
        setTodo(props.todo.name)
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        props.updateTodo(props.index, todo)
        setUpdating(false)
    }

    return <div>
                <TodoElement />
                <input type="button" value="-" style={{ marginLeft: 8 }} onClick={() => props.removeTodo(props.index)}/>
            </div>
}

export default Todo