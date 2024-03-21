import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

export default function WelcomeComponent() {

    const { username } = useParams()

    function callHelloWorldRestApi() {
        axios.get('http://localhost:8080/hello-world')
        .then( (response) => successfullyResponse(response) )
        .catch( (error) => errorResponse(error) )
        .finally( () => console.log('cleanup'))
    }

    function successfullyResponse(response) {
        console.log(response)
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
        </div>
    )
}