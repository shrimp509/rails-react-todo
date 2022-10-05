import React, { useState, useEffect, useRef } from 'react'

import UpdatingTodo from './UpdatingTodo'
import PlainTextTodo from './PlainTextTodo'

function Todo(props) {
    const [updating, setUpdating] = useState(false)

    const handleClick = event => {
        if (event.detail < 2) return
        setUpdating(true)
    }

    return <div>
                { updating ?
                    <UpdatingTodo todo={props.todo} updateTodo={props.updateTodo} index={props.index} setUpdating={setUpdating} />
                    :
                    <PlainTextTodo onClick={handleClick} todo={props.todo} />
                }
                <input type="button" value="-" style={{ marginLeft: 8 }} onClick={() => props.removeTodo(props.index)}/>
            </div>
}

export default Todo