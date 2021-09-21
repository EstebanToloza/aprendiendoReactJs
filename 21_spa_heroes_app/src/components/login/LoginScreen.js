import React from 'react';
import { useHistory } from "react-router-dom";


const LoginScreen = () => {

    let history = useHistory();

    const handleLogin = () => {
        //history.push('/')
        history.replace('/')
    }

    return (
        <div className="container mt-5">
            <h1>LoginScreen</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen
