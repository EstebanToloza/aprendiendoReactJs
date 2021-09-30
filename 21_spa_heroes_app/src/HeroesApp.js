import React, { useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import AppRouter from './routers/AppRouter'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {
        logged: false,
    }
}

const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init)

    return (

        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}

export default HeroesApp
