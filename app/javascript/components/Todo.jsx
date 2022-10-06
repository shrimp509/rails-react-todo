import React, { useState, useEffect, useRef } from 'react'

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import UpdatingTodo from './UpdatingTodo'
import PlainTextTodo from './PlainTextTodo'

function Todo(props) {
    const [updating, setUpdating] = useState(false)

    const onDoubleClick = event => {
        if (event.detail < 2) return
        setUpdating(true)
    }

    return <div style={{ width: '100%' }}>
                { updating ?
                    <UpdatingTodo todo={props.todo} updateTodo={props.updateTodo} index={props.index} setUpdating={setUpdating} />
                    :
                    <PlainTextTodo onDoubleClick={onDoubleClick} updateTodo={props.updateTodo} index={props.index} todo={props.todo} />
                }
                <IconButton aria-label="delete" size="small" onClick={() => props.removeTodo(props.index)}>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </div>
}

export default Todo