import React from 'react';
import { useCounter } from '../../Hooks/useCounter';
import './counter.css';


const CounterWithCustomHook = () => {

    const { state, increment, decrement, setstate, reset } = useCounter(100);



    return (
        <>
            <h1>Counter with Hook {state}</h1>
            <hr />

            <button onClick={() => increment()} className="btn btn-primary">+ 1</button>
            <button onClick={() => decrement()} className="btn btn-warning ms-3">- 1</button>
            <button onClick={reset} className="btn btn-danger ms-3">Reset</button>

            {/* <button onClick={() => setstate(100)} className="btn btn-danger ms-3">Reset</button> */}

        </>
    )
}

export default CounterWithCustomHook
