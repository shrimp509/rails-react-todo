import axios from 'axios'

const HOST_URL = 'http://127.0.0.1:3000/api/v1'

export const getTodosThruApi = () => {
  return axios.get(`${HOST_URL}/todos`)
          .then((response) => {
            return response.data
          })
          .catch(error => console.error("Error: " + error))
}

export const addTodoThruApi = (todo) => {
  return axios.post(`${HOST_URL}/todos`, {
              name: todo.name
            })
            .catch(error => console.error("Error: " + error))
}

export const updateTodoThruApi = (id, newName, newStatus = undefined) => {
    return axios.put(`${HOST_URL}/todos/${id}`, {
                name: newName,
                status: newStatus === undefined ? undefined : newStatus
              })
              .catch(error => console.error("Error: " + error))
  }

export const removeTodoThruApi = (todo) => {
  return axios.delete(`http://127.0.0.1:3000/api/v1/todos/${todo.id}`)
              .catch(error => console.error("Error: " + error))
}
