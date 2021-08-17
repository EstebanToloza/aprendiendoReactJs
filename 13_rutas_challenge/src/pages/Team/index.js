import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
    return (
        <div>
            Soy la pagina de equipo.
            Desde <Link to="/">acá</Link> podés regresar al home
        </div>
    )
}

export default Team;
