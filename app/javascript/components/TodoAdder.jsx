import React, { useState, useEffect, useRef } from 'react'

function TodoAdder(props) {
    const newTodo = useRef('')

    const onSubmitHandler = (event) => {
        event.preventDefault()
        props.addNewTodo(newTodo.current.value)
        newTodo.current.value = ''
    }

    return <form onSubmit={ onSubmitHandler }>
                <input type="text" ref={ newTodo }></input>
                <input type="submit" value="+" />
            </form>

}

export default TodoAdder