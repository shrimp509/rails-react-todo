import React, { useState, useEffect, useRef } from 'react'

import TextField from '@mui/material/TextField';

function TodoAdder(props) {
    const [text, setText] = useState('')

    const onTextChangeHandler = (e) => {
        setText(e.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (text === '') return false
        
        props.addNewTodo({
            name: text,
            status: 'created'
        })
        setText('')
    }

    return  <form onSubmit={ onSubmitHandler }>
                <TextField
                    fullWidth
                    autoFocus
                    id="outlined-required"
                    label="New Todo"
                    value={text}
                    placeholder="Dinner with girlfriend"
                    onChange={onTextChangeHandler}
                />
            </form>

}

export default TodoAdder