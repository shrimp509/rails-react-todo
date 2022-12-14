import React, { useState, useEffect } from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import Todo from './Todo'

function TodoList(props) {
    return <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                { props.todos.map((todo, index) => {
                    return <ListItem key={`${todo.name}${index}`} sx={{ height: 50 }}>
                                <Todo todo={todo} index={index} removeTodo={props.removeTodo} updateTodo={props.updateTodo} />
                            </ListItem>
                }) }
            </List>
}

export default TodoList