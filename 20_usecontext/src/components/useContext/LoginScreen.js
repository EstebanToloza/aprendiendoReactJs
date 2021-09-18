import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const LoginScreen = () => {

    const {setUser} = useContext(UserContext)

    const newUser = {
        id: "123",
        name: "Esteban"
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={() => setUser(newUser)}
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen
