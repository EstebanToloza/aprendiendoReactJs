import React, { Fragment } from 'react'

const Eventos = () => {
    
    const eventoClick = () => {
        console.log('Hiciste click')
    }

    return (
        <Fragment> {/* Se usa Fragment cuando no es necesario utilizar un div. También se puede utilizar sólo etiquetas de apertura y cierre, sin llamar a Fragment */}
            <hr/>
            <h2>Eventos</h2>
            <button onClick= { () => eventoClick() } >Click</button>
        </Fragment>
    )
}

export default Eventos
