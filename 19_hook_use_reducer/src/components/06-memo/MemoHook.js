import React, { useMemo, useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import { procesoPesado } from '../helpers/procesoPesado';

const MemoHook = () => {

    const { counter, increment } = useCounter( 3000 )
    const [show, setShow] = useState(true)

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />

            <p> {memoProcesoPesado} </p>
            <button className="btn btn-primary" onClick={ increment }>
                +1
            </button>
            <br />
            <button 
                className="btn mt-3 btn-outline-primary"
                onClick={ () => {
                    setShow(!show)
                }}
            >
                Show / Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}

export default MemoHook
