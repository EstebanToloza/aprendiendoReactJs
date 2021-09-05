import React, { useRef } from 'react'

const FocusScreen = () => {

    const inputRef = useRef();
    //console.log(inputRef);

    const handleClick = () => {
        inputRef.current.select()
    };

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input 
                ref={ inputRef }
                className="form-control"
                placeholder="Nombre"
            />
            <button 
                className="btn btn-primary mt-3"
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
}

export default FocusScreen
