import React, { useState, useEffect, useRef } from 'react'

import Checkbox from '@mui/material/Checkbox';

function PlainTextTodo(props) {
    const createdStyle = { textDecoration: 'none', color: 'black' }
    const doneStyle = { textDecoration: 'line-through', color: 'gray' }

    const [checked, setChecked] = useState(props.todo.status === 'done')
    const [todoStyle, setTodoStyle] = useState(createdStyle)

    useEffect(() => {
        checked ?
            setTodoStyle({...todoStyle, ...doneStyle})
            :
            setTodoStyle({...todoStyle, ...createdStyle})
    }, [checked])

    const onCheckboxClick = event => {
        var status = !checked ? 'done' : 'created'
        props.updateTodo(props.index, props.todo.name, status)
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
                <span style={todoStyle} onClick={props.onDoubleClick}>{props.todo.name}</span>
            </p>
}

export default PlainTextTodo