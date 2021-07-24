import React from 'react';

function Child({ callback }) {
    function handleClick() {
        callback('Ésta es la data de prueba')
    }

    return (
        <button onClick={handleClick}>Disparar callback</button>
    )
}

export default Child;