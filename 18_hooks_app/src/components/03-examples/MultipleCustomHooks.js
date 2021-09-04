import React from 'react'
import useFetch from '../../Hooks/useFetch'

const MultipleCustomHooks = () => {

   const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
   console.log(state)
    
    return (
        <div>
            <h1>Custom Hooks</h1>
        </div>
    )
}

export default MultipleCustomHooks
