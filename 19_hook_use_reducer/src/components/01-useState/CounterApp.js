import React, { useState } from 'react'
import './counter.css'

const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    })

    console.log(state)

    const { counter1, counter2, counter3, counter4 } = state;

    return (
        <>
         <h3>Counter1 {counter1}</h3>   
         <h3>Counter2 {counter2}</h3>   
         <h3>Counter3 {counter3}</h3>
         <h3>Counter4 {counter4}</h3>
         <hr />

         <button 
            className="btn btn-primary"
            onClick={() => {
                setState({
                    ...state,
                    counter1: counter1 + 1,
                    counter2: counter2 + 2,
                })
            }}
        >
             +1
         </button>
        </>
    )
}

export default CounterApp
