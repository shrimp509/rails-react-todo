import React, { useState, useEffect, useRef } from 'react'

function PlainTextTodo(props) {
    return <p style={{ display: 'inline-block' }} onClick={props.onClick}>
                <span>{ props.todo.name }</span>
            </p>
}

export default PlainTextTodo