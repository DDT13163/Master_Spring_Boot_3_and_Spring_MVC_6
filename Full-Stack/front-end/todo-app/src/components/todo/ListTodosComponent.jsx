import { useEffect, useState } from "react"
import { retrieveAllTodosForUserNameApi, deleteTodoApi } from "./api/TodoApiService"

export default function ListTodosComponent() {

    const [todos, setTodos] = useState([])

    const [message, setMessage] = useState(null)

    //useEffect - tell React that your component need to do something after render

    useEffect(() => refreshTodos(), [])

    function refreshTodos() {
        retrieveAllTodosForUserNameApi('in28minutes')
            .then(response => {
                setTodos(response.data)
            })
            .catch(error => console.log(error))
    }

    function deleteTodo(id) {
        deleteTodoApi('in28minutes', id)
        .then(
            () => {
                setMessage(`Delete of todo with ${id} successfully`)
                refreshTodos()
            }
            //1: Display message
            //2: Update Todos list
        )
        .catch(error => console.log(error))
    }

    return (
        <div className="container">
            <h1>Things You Want To Do!</h1>
            {message &&<div className="alert alert-warning">{message}</div>} 
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        {/* <td>{todo.targetDate.toDateString()}</td> */}
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-warning"
                                            onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}