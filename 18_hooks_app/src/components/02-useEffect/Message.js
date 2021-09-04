import React from 'react'
import { useEffect } from 'react'

const Message = () => {

    useEffect(() => {
        console.log("Componente montado")
        
        return () => {
            console.log("Componente desmontado")
        }
    }, [])

    return (
        <>
            <h3>Eres genial</h3>
        </>
    )
}

export default Message
