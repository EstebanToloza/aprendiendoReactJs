import React from 'react'

const Variables = () => {

    const saludo = "Hola desde constante"
    const imagen = "https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_960_720.jpg"

    return (
        <div>
            <h2>Nuevo componente { saludo }</h2>
            <img src={ imagen } alt=""/>
        </div>
    )
}

export default Variables
