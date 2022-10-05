import React, { useState, useEffect, useRef } from 'react'

function TodoAdder(props) {
    const newTodo = useRef('')

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (newTodo.current.value === '') return false
        
        props.addNewTodo({
            name: newTodo.current.value,
            status: 'created'
        })
        newTodo.current.value = ''
    }

    return <form onSubmit={ onSubmitHandler }>
                <input type="text" ref={ newTodo }></input>
                <input type="submit" value="+" />
            </form>

}

export default TodoAdder