import React, { useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import Small from './Small';

const Memorize = () => {

    const { counter, increment } = useCounter( 10 )
    const [show, setShow] = useState(true)

    return (
        <div>
            <h1>Counter: <Small value={counter}/></h1>
            <hr />
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

export default Memorize
