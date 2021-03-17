import React from 'react'
import Imagen from './Imagen'

const Comentario = ({urlImagen, persona, texto}) => { /* Otra forma de acceder a directamente a las propiedades de los props */

    //console.log(props)

    return (
        <div className="media">
            <Imagen urlImagen={urlImagen} />
            <div className="media-body">
                <h5 className="mt-0">{persona}</h5>
                {texto}
            </div>
        </div>
    )
}

export default Comentario
