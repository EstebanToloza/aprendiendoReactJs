import React from 'react'

const ShowIncrement = React.memo(({increment}) => {

    console.log('me volví a generar :(')
    return (
        <div>
            <button 
                className="btn btn-outline-primary"
                onClick={ () => {
                    increment(5)
                }}
            >
                +1
            </button>
        </div>
    )
})

export default ShowIncrement
