import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorldPathVariable, retrieveAllTodosForUserName } from './api/HelloWorldApiService'

export default function WelcomeComponent() {

    const { username } = useParams()

    const [message, setMessage] = useState(null)

    function callHelloWorldRestApi() {
        // axios.get('http://localhost:8080/hello-world-bean')
        // .then( (response) => successfullyResponse(response) )
        // .catch( (error) => errorResponse(error) )
        // .finally( () => console.log('cleanup'))

        // retrieveHelloWorldBean()
        // .then( (response) => successfullyResponse(response))
        // .catch( (error) => errorResponse(error))
        // .finally( () => console.log('cleanup'))

        retrieveHelloWorldPathVariable('Trong')
            .then((response) => successfullyResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'))

        retrieveAllTodosForUserName('Trong')
            .then((response) => successfullyResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'))
    }

    function successfullyResponse(response) {
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error) {
        console.log(error)
    }

    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos - <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className='btn btn-success m-5' onClick={callHelloWorldRestApi}>
                    Call Hello World
                </button>
            </div>
            <div className='text-info'>{message}</div>
        </div>
    )
}