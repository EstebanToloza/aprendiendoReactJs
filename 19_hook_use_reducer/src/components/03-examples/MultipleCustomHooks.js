import React from 'react'
import { useCounter } from '../../Hooks/useCounter'
import useFetch from '../../Hooks/useFetch'

const MultipleCustomHooks = () => {

   const { counter, increment } = useCounter(1);

   const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
   console.log(loading)

   const { author, quote } = !!data && data[0] //con "!!data" estoy diciendo "si el valor de data NO ES NULL (es decir, si null es FALSE, entonces..."

   console.log(author, quote)
    
    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading ? 
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                ) : (
                    <blockquote className="blockquote text-end">
                        <p className="mb-2">{ author }</p>
                        <footer className="blockquote-footer">{ quote }</footer>
                    </blockquote>
                )
            }      

            <button className="btn btn-primary" onClick={increment}>Next quote</button>
                  
        </div>
    )
}

export default MultipleCustomHooks
