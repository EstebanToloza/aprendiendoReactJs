import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import useFetch from '../../Hooks/useFetch';
import './layout.css'

const Layout = () => {

   const { counter, increment } = useCounter(1);
   const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
   const { quote } = !!data && data[0] //con "!!data" estoy diciendo "si el valor de data NO ES NULL (es decir, si null es FALSE, entonces..."

    const node = useRef()
    const [boxSize, setBoxSize] = useState({})

   useLayoutEffect( () => {
       setBoxSize(node.current.getBoundingClientRect())
   }, [quote]);
    
    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />
                <blockquote className="blockquote text-end">
                    <p 
                        className="mb-2" 
                        ref={node}
                    >
                        { quote }
                    </p>
                </blockquote>

                <pre>
                    { JSON.stringify( boxSize, null, 3 )}
                </pre>
            <button className="btn btn-primary" onClick={increment}>Next quote</button>            
        </div>
    )
}

export default Layout
