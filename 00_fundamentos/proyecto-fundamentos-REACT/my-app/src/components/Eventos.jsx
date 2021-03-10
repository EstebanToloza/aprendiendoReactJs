import React, { Fragment, useState } from 'react'

const Eventos = () => {

    const [texto, setTexto] = useState('Texto desde estado') /* Lo primero que aparece entre corchetes es el nombre de nuestro estado, luego aparece el estado que va a modificarlo*/
                                                            /* En useState pasamos el valor por defecto de nuestro estado*/
    const eventoClick = () => {
        console.log('Hiciste click')
        setTexto('Y ahora cambiamos el texto')
    }

    return (
        <Fragment> {/* Se usa Fragment cuando no es necesario utilizar un div. También se puede utilizar sólo etiquetas de apertura y cierre, sin llamar a Fragment */}
            <hr/>
            <h2>Eventos</h2>
            <button onClick= { () => eventoClick() } >Click</button>

            <hr/>
            <h2> { texto} </h2>
        </Fragment>
    )
}

export default Eventos
