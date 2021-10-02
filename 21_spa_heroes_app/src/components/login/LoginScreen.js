import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';


const LoginScreen = () => {

    let history = useHistory();
    const { dispatch } = useContext( AuthContext )

    const handleLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: "Esteban",
            }
        })

        history.replace(lastPath)

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
