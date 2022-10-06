import React, { useState, useEffect, useRef } from 'react'

import Checkbox from '@mui/material/Checkbox';

function PlainTextTodo(props) {
    const [checked, setChecked] = useState(props.todo.status === 'done')
    const [todoStyle, setTodoStyle] = useState({ textDecoration: 'none' })

    useEffect(() => {
        checked ?
            setTodoStyle({...todoStyle, textDecoration: 'line-through', color: 'gray'})
            :
            setTodoStyle({...todoStyle, textDecoration: 'none', color: 'black'})
    }, [checked])

    const onCheckboxClick = event => {
        setChecked(!checked)
    }

    return <p style={{ display: 'inline-block' }}>
                <Checkbox
                  edge="start"
                  checked={checked}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': props.todo.name }}
                  onClick={onCheckboxClick}
                />
                <span style={todoStyle} onClick={props.onDoubleClick}>{ props.todo.name }</span>
            </p>
}

export default PlainTextTodo