
export const getTodosThruApi = () => {
  return fetch('http://127.0.0.1:3000/api/v1/todos')
          .then((response) => {
              return response.json()
          })
          .catch(error => console.error("Error: " + error))
}

export const addTodoThruApi = (todo) => {
  return fetch('http://127.0.0.1:3000/api/v1/todos', {
                method: 'POST',
                body: JSON.stringify({
                    name: todo.name
                }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .catch(error => console.error("Error: " + error))
}

export const updateTodoThruApi = (id, newName) => {
    return fetch(`http://127.0.0.1:3000/api/v1/todos/${id}`, {
                  method: 'PUT',
                  body: JSON.stringify({
                      name: newName
                  }),
                  headers: new Headers({
                      'Content-Type': 'application/json'
                  })
              })
              .catch(error => console.error("Error: " + error))
  }

export const removeTodoThruApi = (todo) => {
  return fetch(`http://127.0.0.1:3000/api/v1/todos/${todo.id}`, {
              method: 'DELETE'
          })
          .catch(error => console.error("Error: " + error))
}
